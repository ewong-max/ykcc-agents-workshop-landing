"""
Builds the one-page A4 promotional flyer for the AI Agents & Skills Configuration
workshop.

Produces a single self-contained HTML file (logo and QR code inlined, no external
requests) and renders it to PDF and PNG with headless Chrome.

    python flyer/build_flyer.py          # both languages
    python flyer/build_flyer.py zh       # Simplified Chinese only

Outputs into flyer/:
    English  flyer.html     AI_Agents_Workshop_Flyer_A4.pdf / .png
    Chinese  flyer_zh.html  AI_Agents_Workshop_Flyer_A4_CN.pdf / .png

All copy lives in LANGS. Adding a language means adding an entry there plus an
OUTPUT_STEMS name — the layout and stylesheet are shared, with a handful of
typographic knobs in build_html() that differ for CJK.

Colours and tone follow the landing page at
https://ewong-max.github.io/ykcc-agents-workshop-landing/ — the flyer is meant to
look like the same thing, printed.
"""

import base64
import re
import io
import subprocess
import sys
from pathlib import Path

import segno

FLYER_DIR = Path(__file__).resolve().parent
PROJECT_DIR = FLYER_DIR.parent
SITE_URL = "https://ewong-max.github.io/ykcc-agents-workshop-landing/"

CHROME = Path(r"C:\Program Files\Google\Chrome\Application\chrome.exe")


# Mirrors src/data/workshopData.ts (WORKSHOP_SCHEDULE, PRICING, HRD_CORP_INFO,
# ORGANIZER_INFO). HRD Corp only lets a claimable course be marketed under its
# registered title and programme number, so keep these in step with the site.
HRD_PROGRAMME_NO = "10001756328"
MYCOID = "19960102855"
PHONE = "03-6272 6933"
EMAIL = "ykcc@yk.com.my"
VENUE = "No. 37, Jalan 9/62A, Bandar Menjalara, Kepong, 52200 Kuala Lumpur"


def png_data_uri(name: str) -> str:
    raw = (PROJECT_DIR / "public" / name).read_bytes()
    return "data:image/png;base64," + base64.b64encode(raw).decode("ascii")


def logo_data_uri() -> str:
    return png_data_uri("yk-logo.png")


def qr_svg() -> str:
    """
    QR to the landing page, as an inline SVG with no XML declaration.

    border=4 is the spec-mandated quiet zone. Dropping it to squeeze the code larger
    makes it undecodable — verified with a real decoder, not by eye.
    """
    buf = io.BytesIO()
    segno.make(SITE_URL, error="m").save(
        buf, kind="svg", scale=10, border=4, dark="#111113", light="#FFFFFF",
        xmldecl=False, svgns=True
    )
    svg = buf.getvalue().decode("utf-8")

    # segno emits width/height but no viewBox. Sizing that with CSS crops the drawing
    # to the top-left corner instead of scaling it — the printed code then shows one
    # giant finder square and will not scan. Give it a viewBox so CSS can size it.
    m = re.search(r'<svg\b[^>]*?width="(\d+)"\s+height="(\d+)"', svg)
    if not m:
        raise RuntimeError("could not find width/height on the generated QR SVG")
    w, h = m.group(1), m.group(2)
    return svg.replace(
        f'width="{w}" height="{h}"',
        f'viewBox="0 0 {w} {h}" width="100%" height="100%" preserveAspectRatio="xMidYMid meet"',
        1,
    )


LANGS = {
    "en": {
        "html_lang": "en",
        "font": '"Segoe UI", "Helvetica Neue", Arial, sans-serif',
        "doc_title": "AI Agents for Business 101 — Workshop Flyer",
        "org": "YKCC",
        "org_sub": "Practical AI training",
        "chip": "2-Day Hands-On Workshop · HRD Corp Claimable",
        "title_line1": "AI Agents for",
        "title_line2": "Business 101",
        "standfirst": "Building AI agents as digital colleagues for business productivity.",
        "hook_h": "It does the work, not just the talking.",
        "hook_p": "Most people have only ever used AI as a chat window that gives advice. Over "
                  "two days you will set one up to actually open your files, build the report, "
                  "and save it into your folder — finished work, not suggestions you still have "
                  "to type up yourself.",
        "section_label": "What changes on Monday morning",
        "benefits": [
            ("The report that ate your day",
             "The monthly pack, the management report, the board deck — drafted from your own "
             "figures in minutes, so your time goes on checking the numbers instead of keying "
             "them in."),
            ("No coding. No jargon.",
             "If you can use email and Excel, you can do this. You give instructions in ordinary "
             "English, and every technical word is explained in plain language before it is used."),
            ("Real files, not text on a screen",
             "Excel workbooks with working formulas. Word documents in your house style. Slide "
             "decks with speaker notes. Saved straight into your own folder, ready to send."),
            ("You are still the one who signs",
             "It takes away the typing, not the judgement. You will know exactly what to check, "
             "and exactly what your AI colleague must never be trusted to decide."),
        ],
        "takeaways_h": "You go<br>home with",
        "takeaways": [
            "An AI colleague set up and working on your own laptop",
            "Every file you build during the two days, yours to keep",
            "A step-by-step handbook so you can do it all again at your desk",
        ],
        "facts": [
            ("15–16 Oct 2026", "9:00 AM – 5:00 PM"),
            ("Hands-on", "Bring your laptop"),
            ("0 Code", "No IT background"),
            ("HRD Corp", "Claimable · SBL-Khas"),
        ],
        "cta_h": "Register now to reserve your seat",
        "cta_badge": "HRDC claimable RM2,500 &nbsp;|&nbsp; Self-funded RM2,000",
        "cta_p": f"Venue: {VENUE}. 30% off for each additional participant from the same "
                 "group of companies. In-house batches available on request.",
        "hrd_line": f"HRD Corp Programme No. {HRD_PROGRAMME_NO} · MYCoID {MYCOID}",
        "qr_label": "SCAN TO REGISTER",
        "foot_left": "Requires a laptop and a paid Claude plan (Pro, Max, Team or Enterprise).",
        "foot_right": f"Enquiries: {PHONE} · {EMAIL}",
    },
    "zh": {
        "html_lang": "zh-Hans",
        # Microsoft YaHei ships with Windows and covers Simplified Chinese; the Latin
        # fallbacks keep "Claude", "Excel" and the URL looking like the English flyer.
        "font": '"Microsoft YaHei", "微软雅黑", "PingFang SC", '
                '"Noto Sans SC", "Segoe UI", sans-serif',
        "doc_title": "AI Agents for Business 101 — 工作坊宣传单",
        "org": "YKCC",
        "org_sub": "实用 AI 培训",
        "chip": "两天实操工作坊 · HRD Corp 可申报",
        # The registered HRD Corp title stays in English; the standfirst carries the
        # Chinese name of the course.
        "title_line1": "AI Agents for",
        "title_line2": "Business 101",
        "standfirst": "AI 智能代理实战：打造 AI 数码同事，提升企业生产力。",
        "hook_h": "它真的替你做事，不只是聊天。",
        "hook_p": "大多数人只把 AI 当成一个给建议的聊天窗口。这两天，你将亲手设置一个能真正打开你的"
                  "档案、生成报告、并存入你指定文件夹的 AI 同事 —— 交到你手上的是完成的档案，"
                  "而不是还要你自己重新打一遍的建议。",
        "section_label": "星期一早上，有什么不一样",
        "benefits": [
            ("那份耗掉你一整天的报告",
             "每月业绩报表、管理报告、董事会简报 —— 几分钟内就从你自己的数据生成。"
             "你的时间花在核对数字，而不是逐格输入。"),
            ("不必写程式，也没有术语",
             "只要你会用电邮和 Excel，就学得会。你用日常语言下指令，"
             "每一个技术名词都会先用白话解释清楚，才拿来用。"),
            ("交给你的是真档案，不是屏幕上的文字",
             "有公式的 Excel 工作簿、符合公司格式的 Word 文件、附讲稿的简报档，"
             "直接存进你自己的文件夹，随时可以寄出。"),
            ("签名的人，还是你",
             "它省掉的是打字，不是判断。你会清楚知道哪些一定要复核，"
             "也会清楚知道哪些事绝不能交给它决定。"),
        ],
        "takeaways_h": "你可以<br>带走",
        "takeaways": [
            "一个在你自己的手提电脑上设置好、能实际运作的 AI 同事",
            "这两天亲手做出来的每一份档案，全部归你",
            "一本逐步操作手册，回到座位可以自己重做一遍",
        ],
        "facts": [
            ("10月15–16日", "2026 · 上午 9:00 – 下午 5:00"),
            ("实操为主", "请自备手提电脑"),
            ("零程式", "无需 IT 背景"),
            ("HRD Corp 可申报", "SBL-Khas 计划"),
        ],
        "cta_h": "立即报名，预留座位",
        "cta_badge": "HRDC 可申报 RM2,500 &nbsp;｜&nbsp; 自费 RM2,000",
        "cta_p": f"地点：{VENUE}。同一集团公司每增加一位学员，每位享 30% 折扣。"
                 "也可安排企业内部培训。",
        "hrd_line": f"HRD Corp 课程编号 Programme No. {HRD_PROGRAMME_NO} · MYCoID {MYCOID}",
        "qr_label": "扫描报名",
        # Ends on the closing bracket deliberately: a full-width ） followed by 。
        # leaves an ugly gap.
        "foot_left": "需自备手提电脑，以及付费 Claude 账户（Pro、Max、Team 或 Enterprise）",
        "foot_right": f"查询：{PHONE} · {EMAIL}",
    },
}


def build_html(lang: str) -> str:
    L = LANGS[lang]
    cjk = lang == "zh"

    benefit_cards = "\n".join(
        f"""      <div class="benefit">
        <div class="benefit-num">{i:02d}</div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>"""
        for i, (title, body) in enumerate(L["benefits"], start=1)
    )

    takeaway_items = "\n".join(f"        <li>{t}</li>" for t in L["takeaways"])

    fact_items = "\n".join(
        f"""      <div class="fact"><strong>{big}</strong><span>{small}</span></div>"""
        for big, small in L["facts"]
    )

    # Chinese sets denser than English at the same point size, and the tight tracking
    # that suits Segoe looks wrong on Han characters. These are the only per-language
    # typographic knobs — the rest of the stylesheet is shared.
    title_size = "26pt" if cjk else "27pt"
    title_track = "0" if cjk else "-0.02em"
    hook_p_size = "10pt" if cjk else "9.5pt"
    hook_p_lh = "1.75" if cjk else "1.55"
    benefit_p_size = "9pt" if cjk else "8.6pt"
    benefit_p_lh = "1.7" if cjk else "1.5"
    heavy = "700" if cjk else "800"
    title_lh = "1.15" if cjk else "1.05"
    h3_lh = "1.3" if cjk else "1.25"
    cta_h2_lh = "1.25" if cjk else "1.2"
    cta_p_lh = benefit_p_lh if cjk else "1.45"
    # Han characters already carry their own visual spacing; Latin small-caps labels
    # need tracking. Each label kept its own English value.
    chip_track = "0.06em" if cjk else "0.13em"
    section_track = "0.06em" if cjk else "0.14em"
    takeaway_track = "0.06em" if cjk else "0.12em"

    return f"""<!doctype html>
<html lang="{L["html_lang"]}">
<head>
<meta charset="utf-8">
<title>{L["doc_title"]}</title>
<style>
  @page {{ size: A4; margin: 0; }}
  * {{ box-sizing: border-box; margin: 0; padding: 0; }}

  html, body {{
    width: 210mm;
    height: 297mm;
    background: #FAF8F5;
    color: #1C1C1F;
    font-family: {L["font"]};
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }}

  .page {{
    width: 210mm;
    height: 297mm;
    padding: 9mm 12mm 8mm;
    display: flex;
    flex-direction: column;
    gap: 2.6mm;
    overflow: hidden;
  }}
  /* Without this the flex column squeezes the tallest block (the dark hook) to make
     the page fit, silently clipping its text instead of overflowing visibly. */
  .page > * {{ flex-shrink: 0; }}

  /* ---- masthead ---- */
  .masthead {{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.6mm solid #E6E3DB;
    padding-bottom: 3mm;
  }}
  .masthead img {{ height: 9mm; width: auto; }}
  .masthead-right {{ display: flex; align-items: center; gap: 2.4mm; }}
  .masthead img.hrd {{ height: 12mm; }}
  .masthead-right .org {{ margin-left: 1.6mm; }}
  .masthead .org {{
    font-size: 8.5pt;
    font-weight: 700;
    color: #777672;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    text-align: right;
    line-height: 1.5;
  }}
  .masthead .org span {{ display: block; font-weight: 600; color: #6E6C68; letter-spacing: 0.02em; }}

  /* ---- title ---- */
  .chip {{
    display: inline-block;
    background: rgba(2,132,199,0.10);
    border: 0.35mm solid rgba(2,132,199,0.25);
    color: #0284C7;
    font-size: 7.5pt;
    font-weight: {heavy};
    letter-spacing: {chip_track};
    text-transform: uppercase;
    padding: 1.4mm 3mm;
    border-radius: 1.5mm;
  }}
  h1 {{
    font-size: {title_size};
    line-height: {title_lh};
    letter-spacing: {title_track};
    font-weight: {heavy};
    color: #111113;
    margin-top: 2.6mm;
  }}
  h1 em {{ font-style: normal; color: #0284C7; }}
  .standfirst {{
    font-size: 11.5pt;
    font-weight: 600;
    color: #3D3C42;
    margin-top: 1.8mm;
    line-height: 1.35;
  }}

  /* ---- dark hook ---- */
  .hook {{
    background: #202024;
    color: #F3F2EE;
    border-radius: 4mm;
    padding: 4.2mm 6mm;
    position: relative;
    overflow: hidden;
  }}
  .hook::after {{
    content: "";
    position: absolute;
    top: -14mm; right: -14mm;
    width: 46mm; height: 46mm;
    background: rgba(2,132,199,0.22);
    border-radius: 50%;
    filter: blur(14mm);
  }}
  .hook h2 {{
    font-size: 16pt;
    font-weight: {heavy};
    line-height: 1.2;
    color: #fff;
    position: relative;
  }}
  .hook p {{
    font-size: {hook_p_size};
    line-height: {hook_p_lh};
    color: #D5D4D0;
    margin-top: 2.4mm;
    position: relative;
  }}

  /* ---- benefits ---- */
  .section-label {{
    font-size: 8pt;
    font-weight: {heavy};
    letter-spacing: {section_track};
    text-transform: uppercase;
    color: #0284C7;
  }}
  .benefits {{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.8mm;
    margin-top: 2.2mm;
  }}
  .benefit {{
    background: #fff;
    border: 0.35mm solid #E6E3DB;
    border-radius: 3.2mm;
    padding: 2.8mm 4.2mm;
  }}
  .benefit-num {{
    font-size: 7.5pt;
    font-weight: 800;
    color: #fff;
    background: #262629;
    width: 6.4mm; height: 6.4mm;
    border-radius: 1.8mm;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 1.6mm;
  }}
  .benefit h3 {{
    font-size: 10.5pt;
    font-weight: {heavy};
    color: #111113;
    line-height: {h3_lh};
    margin-bottom: 1.4mm;
  }}
  .benefit p {{ font-size: {benefit_p_size}; line-height: {benefit_p_lh}; color: #555450; }}

  /* ---- takeaways ---- */
  .takeaways {{
    background: #262629;
    border-radius: 3.6mm;
    padding: 4.2mm 5mm;
    display: flex;
    align-items: flex-start;
    gap: 6mm;
  }}
  .takeaways .heading {{
    font-size: 8pt;
    font-weight: {heavy};
    letter-spacing: {takeaway_track};
    text-transform: uppercase;
    color: #38BDF8;
    white-space: nowrap;
    padding-top: 0.6mm;
  }}
  .takeaways ul {{ list-style: none; display: grid; gap: 1.7mm; }}
  .takeaways li {{
    font-size: 9pt;
    color: #E0DFDC;
    line-height: 1.4;
    padding-left: 4.6mm;
    position: relative;
  }}
  .takeaways li::before {{
    content: "";
    position: absolute;
    left: 0; top: 1.6mm;
    width: 1.6mm; height: 1.6mm;
    border-radius: 50%;
    background: #34D399;
  }}

  /* ---- facts ---- */
  .facts {{ display: grid; grid-template-columns: repeat(4, 1fr); gap: 3mm; }}
  .fact {{
    background: #fff;
    border: 0.35mm solid #E6E3DB;
    border-radius: 3mm;
    padding: 3.2mm 2mm;
    text-align: center;
  }}
  .fact strong {{ display: block; font-size: 12.5pt; font-weight: {heavy}; color: #0284C7; }}
  .fact span {{ display: block; font-size: 7.8pt; color: #55534E; margin-top: 0.6mm; }}

  /* ---- call to action ---- */
  .cta {{
    margin-top: auto;
    background: #fff;
    border: 0.7mm solid #0284C7;
    border-radius: 4mm;
    padding: 4.4mm 5.2mm;
    display: flex;
    align-items: center;
    gap: 5.5mm;
  }}
  .cta .copy {{ flex: 1; min-width: 0; }}
  .cta h2 {{ font-size: 13.5pt; font-weight: {heavy}; color: #111113; line-height: {cta_h2_lh}; }}
  .cta p {{ font-size: {benefit_p_size}; color: #555450; margin-top: 1.4mm; line-height: {cta_p_lh}; }}
  .cta p.hrd-line {{ font-size: 7.8pt; font-weight: 600; color: #3D3C42; }}
  .cta .url {{
    display: inline-block;
    margin-top: 2.4mm;
    font-size: 9pt;
    font-weight: 700;
    color: #0284C7;
    word-break: break-all;
  }}
  .cta .qr {{ width: 29mm; flex-shrink: 0; text-align: center; }}
  .cta .qr svg {{ width: 29mm; height: 29mm; display: block; }}
  .cta .qr span {{
    display: block;
    font-size: 7pt;
    color: #5A5854;
    margin-top: 1.2mm;
    font-weight: 600;
    letter-spacing: 0.03em;
  }}

  .tbc {{
    background: #FEF08A;
    border: 0.35mm solid #FACC15;
    color: #713F12;
    font-weight: {heavy};
    font-size: 8pt;
    padding: 0.8mm 2mm;
    border-radius: 1.2mm;
    display: inline-block;
  }}

  footer {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6mm;
    font-size: 7.8pt;
    color: #55534E;
    border-top: 0.35mm solid #E6E3DB;
    padding-top: 2.6mm;
  }}
  /* The entry requirements are the one thing a reader must not miss: at the old
     #8A8983/7pt they sat at 3.3:1, below WCAG AA and worse again in print. */
  footer .req {{ color: #46443F; font-weight: 600; }}
</style>
</head>
<body>
<div class="page">

  <div class="masthead">
    <img src="{logo_data_uri()}" alt="YK Group">
    <div class="masthead-right">
      <img class="hrd" src="{png_data_uri("hrd-corp-claimable.png")}" alt="HRD Corp Claimable">
      <img class="hrd" src="{png_data_uri("hrd-corp-registered.png")}" alt="HRD Corp Registered Training Provider">
      <div class="org">{L["org"]}<span>{L["org_sub"]}</span></div>
    </div>
  </div>

  <div>
    <span class="chip">{L["chip"]}</span>
    <h1>{L["title_line1"]}<br><em>{L["title_line2"]}</em></h1>
    <p class="standfirst">{L["standfirst"]}</p>
  </div>

  <div class="hook">
    <h2>{L["hook_h"]}</h2>
    <p>{L["hook_p"]}</p>
  </div>

  <div>
    <span class="section-label">{L["section_label"]}</span>
    <div class="benefits">
{benefit_cards}
    </div>
  </div>

  <div class="takeaways">
    <div class="heading">{L["takeaways_h"]}</div>
    <ul>
{takeaway_items}
    </ul>
  </div>

  <div class="facts">
{fact_items}
  </div>

  <div class="cta">
    <div class="copy">
      <h2>{L["cta_h"]}</h2>
      <p><span class="tbc">{L["cta_badge"]}</span></p>
      <p>{L["cta_p"]}</p>
      <p class="hrd-line">{L["hrd_line"]}</p>
      <span class="url">{SITE_URL}</span>
    </div>
    <div class="qr">
      {qr_svg()}
      <span>{L["qr_label"]}</span>
    </div>
  </div>

  <footer>
    <span class="req">{L["foot_left"]}</span>
    <span>{L["foot_right"]}</span>
  </footer>

</div>
</body>
</html>
"""


def render(html_path: Path, stem: str) -> None:
    if not CHROME.exists():
        print(f"Chrome not found at {CHROME}; skipping PDF/PNG render.", file=sys.stderr)
        return

    url = html_path.as_uri()
    common = ["--headless", "--disable-gpu", "--no-sandbox", "--force-color-profile=srgb"]

    subprocess.run(
        [str(CHROME), *common,
         f"--print-to-pdf={FLYER_DIR / (stem + '.pdf')}",
         "--no-pdf-header-footer", url],
        check=True, capture_output=True,
    )

    # A4 is 794x1123 CSS px at 96dpi; a device scale factor of 2 gives a 1588x2246
    # image (~192dpi) that stays readable when shared on WhatsApp. The window must be
    # the CSS size, not the pixel size, or the page renders in a corner of the shot.
    subprocess.run(
        [str(CHROME), *common, "--window-size=794,1123", "--force-device-scale-factor=2",
         "--hide-scrollbars",
         f"--screenshot={FLYER_DIR / (stem + '.png')}", url],
        check=True, capture_output=True,
    )


OUTPUT_STEMS = {
    "en": "AI_Agents_Workshop_Flyer_A4",
    "zh": "AI_Agents_Workshop_Flyer_A4_CN",
}


def build(lang: str) -> None:
    stem = OUTPUT_STEMS[lang]
    html = FLYER_DIR / (f"flyer_{lang}.html" if lang != "en" else "flyer.html")
    html.write_text(build_html(lang), encoding="utf-8")
    print(f"wrote {html.name}")
    render(html, stem)
    for suffix in (".pdf", ".png"):
        f = FLYER_DIR / (stem + suffix)
        if f.exists():
            print(f"wrote {f.name}  ({f.stat().st_size / 1024:.0f} KB)")


if __name__ == "__main__":
    wanted = sys.argv[1:] or list(LANGS)
    for lang in wanted:
        if lang not in LANGS:
            sys.exit(f"unknown language {lang!r}; choose from {', '.join(LANGS)}")
        build(lang)
