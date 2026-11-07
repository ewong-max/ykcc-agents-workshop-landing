"""
Two-page A4 brochure (front + back) for AI Agents for Business 101 — Nov 2026 redesign.

    python flyer/build_brochure.py        # zh + en
    python flyer/build_brochure.py zh     # one language

Outputs into flyer/brochure/:
    AI_Agents_Brochure_A4_<LANG>.pdf          print / email
    AI_Agents_Brochure_<LANG>_front.png       WhatsApp / Facebook
    AI_Agents_Brochure_<LANG>_back.png
Images come from public/img/v2 (blurred class photos, redacted screenshots).
Keep dates, fees and HRD numbers in step with src/data/workshopData.ts.
"""

import base64
import subprocess
import sys
from pathlib import Path

import segno

FLYER_DIR = Path(__file__).resolve().parent
PROJECT = FLYER_DIR.parent
OUT = FLYER_DIR / "brochure"
IMG = PROJECT / "public" / "img" / "v2"
SITE = "https://ewong-max.github.io/ykcc-agents-workshop-landing/"
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"

PROGRAMME_NO = "10001756328"
MYCOID = "19960102855"
PHONE = "03-6272 6933"
EMAIL = "ykcc@yk.com.my"
VENUE = "No. 37, Jalan 9/62A, Bandar Menjalara, Kepong, 52200 Kuala Lumpur"


def uri(path: Path) -> str:
    mime = {"png": "image/png", "webp": "image/webp", "jpg": "image/jpeg"}[path.suffix[1:]]
    return f"data:{mime};base64," + base64.b64encode(path.read_bytes()).decode()


def qr(lang: str) -> str:
    q = segno.make(f"{SITE}?lang={lang}", error="m")
    return q.svg_inline(scale=3, dark="#0B1B3F", border=1)


L = {
    "zh": dict(
        html_lang="zh-Hans",
        badge="两天实操工作坊 · HRD Corp 注册课程",
        full="🔥 11月4–5日班 已满额",
        h1a="两天，", h1b="把最烦的工作", h1c="交给 AI 同事",
        sub="不是教你和 AI 聊天。从你公司的痛点出发，亲手设置一个会填表、对账、查邮件、做报表、写网页的 AI 智能代理 —— 最后带走你自己的项目。",
        ba_title="这些事，以后不用再自己做",
        ba=[
            ("找齐一年的 TNB、门牌税、TnGo 收据", "翻邮箱半天", "一句话全部列出"),
            ("每月银行对账", "逐笔手工勾对", "自动配对，只标差异"),
            ("每天几十封邮件", "一封封看", "每日早报自动送到"),
            ("预算 vs 实际 评语", "写一个下午", "几分钟出初稿，中英马三语"),
            ("审计报告给老板看", "几十页没人看", "图表 + 解说仪表板"),
            ("政府网站下载、填表", "每次手动", "AI 操作浏览器，你确认"),
        ],
        facts=[("📅 11月24–25日", "华语 · 9:00–5:00"), ("👥 10–15 人小班", "手把手"), ("💻 零程式", "无需 IT 背景")],
        price_t="课程费用（每位）",
        group="团体：第二位起七折",
        scan="扫码报名",
        journey_t="两天怎么上：先找痛点，再动手做",
        journey=[
            ("认识 AI 智能代理", "现场看它真的替人做事"),
            ("定策略 · 找痛点", "按「影响 × 难易」排优先"),
            ("拆解流程 · 定项目", "哪里给 AI，哪里人把关"),
            ("设置你的 Claude", "连好邮件、日历、浏览器"),
            ("14+ 实战案例", "先示范，再亲手做"),
            ("完成你的项目", "带回公司就能用"),
        ],
        cases_t="你会亲手做出这些",
        cats=[
            ("文书自动化", "#0EA5E9", ["自动填表格（销售单）", "起草销售提案", "画工作流程图", "HR 16 项性格测验问卷"]),
            ("财务与税务", "#10B981", ["预算 vs 实际 评语", "审计报告 → 仪表板（多语言解说）", "CP204 预估税", "银行对账"]),
            ("邮件 · 日历 · 浏览器", "#8B5CF6", ["找出所有账单收据 / 客户多年邮件", "每日早报：跟进、税务更新、约会", "日历自动提醒（路税更新）", "AI 控制浏览器：订票、填表、下载通告"]),
            ("自己做系统", "#F97316", ["即时财务仪表板网页", "网页 + 免费上线", "SEO 审查", "开单、库存、税务计算器小软件", "员工报销系统", "公司办公门户"]),
            ("第二大脑", "#D946EF", ["Obsidian 知识管理系统", "整理客户、产品、人事、项目知识", "AI 随时可查、可引用"]),
        ],
        gift_b="报名即送：SST 第二大脑（免费）", gift="—— 最新完整 SST 法规整理成知识库，并教你日后自己更新。",
        fin_t="最后：做你自己的项目", fin="用第一天写下的痛点，做出你公司的 AI 解决方案，带回去就能用。",
        bonus_t="报名即送",
        bonus=[("SST 第二大脑（免费）", "最新完整 SST 法规 Obsidian 知识库，并教你日后更新"), ("学员手册 + 提示词", "回到公司自己重做"), ("你做的所有档案", "表格、报表、网页、工具全归你")],
        trainer_eb="讲师",
        trainer_role="税务、e-Invoice、SST 与 GST 专家",
        trainer_bio="会计出身，协助数百家企业落实 GST、SST 及电子发票。他的事务所每天都在用 AI 智能代理处理报销、报税单据、预约与早报 —— 课堂上教的，都是他自己真的在用的。",
        cta="立即报名，预留座位",
        need="需自备手提电脑及 Claude 付费帐号，报名后寄上设置说明。",
        venue_l="地点",
        enquiry="查询",
        signoff="AI 准备，人来批准。",
    ),
    "en": dict(
        html_lang="en",
        badge="2-day hands-on workshop · HRD Corp registered",
        full="🔥 4–5 Nov class FULL",
        h1a="In two days,", h1b="hand tedious work", h1c="to an AI colleague",
        sub="Not another “chat with AI” class. Start from your own pain points, set up an AI agent that fills forms, reconciles, searches email, builds reports and web pages — and leave with your own project.",
        ba_title="Jobs you will stop doing by hand",
        ba=[
            ("A year of TNB, quit rent, TnGo receipts", "Half a day in email", "One sentence lists them all"),
            ("Monthly bank reconciliation", "Tick item by item", "Auto-matched, gaps flagged"),
            ("Dozens of emails each morning", "Read one by one", "A morning brief arrives itself"),
            ("Budget vs actual commentary", "A whole afternoon", "Draft in minutes, EN/CN/BM"),
            ("Audit report for the boss", "40 pages nobody reads", "Dashboard with explanations"),
            ("Government sites & forms", "Click and type every time", "AI drives browser, you confirm"),
        ],
        facts=[("📅 24–25 Nov", "Mandarin · 9am–5pm"), ("👥 10–15 per class", "Hands-on help"), ("💻 No coding", "No IT background")],
        price_t="Course fee (per pax)",
        group="Group offer: 2nd pax onwards 30% off",
        scan="Scan to register",
        journey_t="How the two days run: find the pain, then build",
        journey=[
            ("Meet the AI agent", "Watch it do real work"),
            ("Strategy & pain points", "Rank by impact × ease"),
            ("Break down a process", "AI does it, a human checks"),
            ("Set up your Claude", "Email, calendar, browser"),
            ("14+ use cases", "Shown live, then you do it"),
            ("Build your project", "Take it back to the office"),
        ],
        cases_t="What you will build",
        cats=[
            ("Paperwork", "#0EA5E9", ["Auto-fill forms (sales orders)", "Draft sales proposals", "Draw workflow diagrams", "HR 16-factor questionnaire"]),
            ("Finance & tax", "#10B981", ["Budget vs actual commentary", "Audit report → dashboard", "CP204 tax estimate", "Bank reconciliation"]),
            ("Email · Calendar · Browser", "#8B5CF6", ["Find every bill or client email", "Daily brief: follow-ups, tax news", "Auto calendar reminders (road tax)", "Browser: book, fill forms, download"]),
            ("Build your own apps", "#F97316", ["Live finance dashboard web page", "Landing page + free hosting", "SEO audit", "Invoicing, inventory, tax apps", "Staff expense claims", "Office portal for all your tools"]),
            ("Second brain", "#D946EF", ["Obsidian knowledge system", "Client, product, HR, project know-how", "Searchable by your AI agent"]),
        ],
        gift_b="Free with every seat: SST Second Brain", gift="— full latest SST law as a knowledge base.",
        fin_t="Finally: your own project", fin="Turn the pain point from Day 1 into an AI solution you take back to the office.",
        bonus_t="Included",
        bonus=[("SST Second Brain (free)", "Full latest SST legislation in Obsidian — and how to keep it updated"), ("Participant pack + prompts", "Redo every case at your desk"), ("Everything you build", "Forms, reports, pages, tools — yours")],
        trainer_eb="Trainer",
        trainer_role="Tax, e-Invoicing, SST & GST specialist",
        trainer_bio="An accountant who has guided hundreds of businesses through GST, SST and e-Invoicing. His firm runs AI agents daily for claims, tax slips, appointments and morning briefs — he teaches what he actually uses.",
        cta="Register now — reserve your seat",
        need="Bring a laptop and a paid Claude plan; setup notes are sent after registration.",
        venue_l="Venue",
        enquiry="Enquiries",
        signoff="AI prepares. A human approves.",
    ),
}

CSS = """
@page { size: A4; margin: 0; }
* { box-sizing: border-box; margin: 0; padding: 0; }
:root { --navy:#0B1B3F; --amber:#FBBF24; --ink:#0f172a; --muted:#475569; --paper:#F7F5F0; }
body { font-family: "Segoe UI", "Microsoft YaHei", "PingFang SC", sans-serif; color: var(--ink);
       -webkit-print-color-adjust: exact; print-color-adjust: exact; }
.page { width: 210mm; height: 297mm; overflow: hidden; position: relative; page-break-after: always; background: var(--paper); }
.page:last-child { page-break-after: auto; }
.navy { background: var(--navy); color: #fff; }
.row { display: flex; }
/* ---- front ---- */
.hero { padding: 10mm 12mm 0; height: 146mm; position: relative; overflow: hidden; }
.hero:before { content:""; position:absolute; right:-40mm; top:-40mm; width:140mm; height:140mm; border-radius:50%;
  background: radial-gradient(circle, rgba(251,191,36,.35), transparent 65%); }
.top { display:flex; justify-content:space-between; align-items:center; position:relative; }
.logo { background:#fff; border-radius:2mm; padding:1.2mm 2mm; height:11mm; }
.logo img { height: 8.6mm; }
.hrd { background:#fff; border-radius:2mm; padding:1mm; height:13mm; }
.hrd img { height: 11mm; }
.pills { margin-top: 6mm; display:flex; gap:2mm; position:relative; }
.pill { font-size: 8.5pt; font-weight: 700; padding: 1.2mm 3mm; border-radius: 10mm; background: rgba(255,255,255,.12); }
.pill.red { background:#F43F5E; }
.course { margin-top: 4mm; font-size: 10pt; font-weight: 800; letter-spacing:.3mm; color: var(--amber); position:relative; }
h1 { font-size: 34pt; line-height: 1.12; font-weight: 900; margin-top: 2mm; position:relative; }
h1 .acc { color: var(--amber); }
.sub { font-size: 10pt; line-height: 1.55; color: rgba(255,255,255,.82); margin-top: 4mm; width: 104mm; position:relative; }
.shots { position:absolute; right: 9mm; top: 46mm; width: 80mm; height: 100mm; }
.shots img { position:absolute; border-radius: 3mm; box-shadow: 0 3mm 8mm rgba(0,0,0,.45); border: .8mm solid #0B1B3F; }
.s1 { width: 80mm; right:0; top:0; }
.s2 { width: 32mm; height: 46mm; object-fit: cover; object-position: top; left: -6mm; bottom: 0; }
.s3 { width: 50mm; right: -2mm; bottom: 4mm; }
.facts { display:flex; gap: 3mm; margin: -12mm 12mm 0; position: relative; }
.fact { flex:1; background: var(--amber); border-radius: 3mm; padding: 3mm 4mm; color: var(--navy); }
.fact b { display:block; font-size: 12pt; font-weight: 900; }
.fact span { font-size: 8.5pt; font-weight: 700; opacity:.8; }
.sec { padding: 0 12mm; }
.h2 { font-size: 15pt; font-weight: 900; color: var(--navy); margin: 5mm 0 2.5mm; }
.ba { display:grid; grid-template-columns: repeat(3, 1fr); gap: 3mm; }
.ba > div { background:#fff; border-radius: 3mm; padding: 3mm 3.5mm; border: .3mm solid #E2E8F0; }
.ba .t { font-size: 9.5pt; font-weight: 800; line-height: 1.3; min-height: 8.5mm; }
.ba .b { font-size: 8pt; color:#94a3b8; text-decoration: line-through; margin-top: 1.5mm; }
.ba .a { font-size: 8.5pt; color:#047857; font-weight: 800; margin-top: .8mm; }
.gift { margin-top: 4mm; background:#fff; border: .7mm dashed #F59E0B; border-radius: 3mm; padding: 3mm 4mm; font-size: 9.5pt; color: var(--navy); }
.gift b { font-weight: 900; color:#B45309; }
.cta { position:absolute; left: 12mm; right: 12mm; bottom: 9mm; border-radius: 4mm; padding: 5mm 6mm;
  display:flex; align-items:center; gap: 6mm; }
.cta .price { display:flex; gap: 3mm; }
.cta .p { background: rgba(255,255,255,.1); border-radius: 2.5mm; padding: 2mm 3.5mm; }
.cta .p small { display:block; font-size: 7.5pt; font-weight: 800; color: var(--amber); }
.cta .p b { font-size: 17pt; font-weight: 900; }
.cta .ctxt { flex: 1; }
.cta .ctxt .big { font-size: 13pt; font-weight: 900; color: var(--amber); }
.cta .ctxt .sm { font-size: 8pt; color: rgba(255,255,255,.8); margin-top: 1mm; line-height:1.45; }
.qr { background:#fff; border-radius: 2.5mm; padding: 1.5mm; text-align:center; color: var(--navy); font-size: 7.5pt; font-weight: 800; }
.qr svg { width: 25mm; height: 25mm; display:block; }
.foot { position:absolute; bottom: 3mm; left: 12mm; right: 12mm; font-size: 7pt; color: var(--muted); display:flex; justify-content:space-between; }
/* ---- back ---- */
.band { padding: 7mm 12mm 6mm; }
.band .h2 { color:#fff; margin-top:0; }
.steps { display:grid; grid-template-columns: repeat(3, 1fr); gap: 2.5mm; }
.step { background: rgba(255,255,255,.07); border-radius: 2.5mm; padding: 2.2mm 3mm; display:flex; gap: 2.5mm; align-items:center; }
.step > div { min-width:0; }
.step.last { background: var(--amber); color: var(--navy); }
.step i { flex: none; font-style:normal; display:inline-grid; place-items:center; width: 6mm; height: 6mm; border-radius: 50%;
  background: var(--amber); color: var(--navy); font-weight: 900; font-size: 9pt; }
.step.last i { background: var(--navy); color: var(--amber); }
.step b { display:block; font-size: 9.5pt; font-weight: 900; line-height:1.25; }
.step span { font-size: 7.5pt; opacity: .8; line-height: 1.35; display:block; margin-top: .8mm; }
.cases { display:grid; grid-template-columns: 1fr 1fr 1fr; gap: 3mm; }
.cat { background:#fff; border-radius: 3mm; overflow:hidden; border: .3mm solid #E2E8F0; }
.cat .ch { color:#fff; font-size: 9.5pt; font-weight: 900; padding: 1.8mm 3mm; }
.cat ul { list-style:none; padding: 1.5mm 3mm 2mm; }
.cat li { font-size: 8.3pt; line-height: 1.35; padding: .5mm 0 .5mm 3.5mm; position:relative; }
.cat li:before { content:"✓"; position:absolute; left:0; font-weight:900; color: var(--c); }
.cat.finale { background: var(--amber); border: none; padding: 4mm; display:flex; flex-direction:column; justify-content:center; color: var(--navy); }
.cat.finale b { font-size: 12pt; font-weight: 900; }
.cat.finale span { font-size: 8.5pt; margin-top: 1.5mm; line-height: 1.45; font-weight: 600; }
.shotcard { border-radius: 3mm; overflow:hidden; border: .3mm solid #E2E8F0; background:#fff; position:relative; }
.shotcard img { width:100%; height:100%; object-fit: cover; object-position: top; display:block; }
.shotcard span { position:absolute; left: 2mm; bottom: 2mm; background: var(--navy); color:#fff; font-size: 7pt; font-weight: 800; padding: .8mm 2mm; border-radius: 3mm; }
.bonus { display:grid; grid-template-columns: 1.3fr 1fr 1fr; gap: 3mm; }
.bonus div { border-radius: 3mm; padding: 3mm 3.5mm; background:#fff; border:.3mm solid #E2E8F0; }
.bonus div:first-child { background: var(--navy); color:#fff; border: .8mm solid var(--amber); }
.bonus b { font-size: 10pt; font-weight: 900; display:block; }
.bonus span { font-size: 8pt; opacity:.8; line-height: 1.4; display:block; margin-top: .8mm; }
.trainer { display:flex; gap: 5mm; align-items: center; margin-top: 4mm; }
.trainer img { flex:none; width: 60mm; height: 38mm; object-fit: cover; border-radius: 3mm; }
.trainer .eb { font-size: 8pt; font-weight: 900; color: #D97706; letter-spacing:.3mm; }
.trainer .nm { font-size: 17pt; font-weight: 900; color: var(--navy); }
.trainer .rl { font-size: 9.5pt; font-weight: 700; color: var(--muted); }
.trainer p { font-size: 8.5pt; line-height: 1.5; margin-top: 1.5mm; }
.backcta { position:absolute; left:0; right:0; bottom:0; padding: 5mm 12mm; display:flex; align-items:center; gap: 6mm; }
.backcta .info { flex:1; font-size: 8pt; line-height: 1.6; color: rgba(255,255,255,.8); }
.backcta .info b { color:#fff; }
.backcta .big { font-size: 14pt; font-weight: 900; color: var(--amber); margin-bottom: 1mm; }
"""


def front(t: dict, lang: str, img: dict) -> str:
    ba = "".join(f'<div><div class="t">{a}</div><div class="b">✗ {b}</div><div class="a">✓ {c}</div></div>' for a, b, c in t["ba"])
    facts = "".join(f'<div class="fact"><b>{a}</b><span>{b}</span></div>' for a, b in t["facts"])
    hr_img = img["hrzh"] if lang == "zh" else img["hren"]
    return f"""
<section class="page">
  <div class="hero navy">
    <div class="top"><span class="logo"><img src="{img['logo']}"></span><span class="hrd"><img src="{img['hrd']}"></span></div>
    <div class="pills"><span class="pill">{t['badge']}</span><span class="pill red">{t['full']}</span></div>
    <div class="course">AI AGENTS FOR BUSINESS 101</div>
    <h1>{t['h1a']}<br>{t['h1b']}<br><span class="acc">{t['h1c']}</span></h1>
    <p class="sub">{t['sub']}</p>
    <div class="shots">
      <img class="s1" src="{img['portal']}">
      <img class="s3" src="{hr_img}">
      <img class="s2" src="{img['teach']}">
    </div>
  </div>
  <div class="facts">{facts}</div>
  <div class="sec">
    <div class="h2">{t['ba_title']}</div>
    <div class="ba">{ba}</div>
    <div class="gift">🎁 <b>{t['gift_b']}</b> {t['gift']}</div>
  </div>
  <div class="cta navy">
    <div class="price">
      <div class="p"><small>HRDC</small><b>RM2,500</b></div>
      <div class="p"><small>CASH</small><b>RM2,250</b></div>
    </div>
    <div class="ctxt"><div class="big">{t['cta']}</div><div class="sm">{t['price_t']} · {t['group']}<br>{t['venue_l']}: {VENUE}</div></div>
    <div class="qr">{qr(lang)}{t['scan']}</div>
  </div>
  <div class="foot"><span>HRD Corp Programme No. {PROGRAMME_NO} · SBL-Khas · MYCoID {MYCOID}</span><span>{t['enquiry']}: {PHONE} · {EMAIL}</span></div>
</section>"""


def back(t: dict, lang: str, img: dict) -> str:
    steps = "".join(
        f'<div class="step{" last" if i == 5 else ""}"><i>{i + 1}</i><div><b>{a}</b><span>{b}</span></div></div>'
        for i, (a, b) in enumerate(t["journey"]))
    cats = "".join(
        f'<div class="cat" style="--c:{col}"><div class="ch" style="background:{col}">{name}</div><ul>'
        + "".join(f"<li>{x}</li>" for x in items) + "</ul></div>"
        for name, col, items in t["cats"]) + (
        f'<div class="cat finale"><b>🚀 {t["fin_t"]}</b><span>{t["fin"]}</span></div>')
    bonus = "".join(f"<div><b>{'🎁 ' if i == 0 else ''}{a}</b><span>{b}</span></div>" for i, (a, b) in enumerate(t["bonus"]))
    return f"""
<section class="page">
  <div class="band navy">
    <div class="h2">{t['journey_t']}</div>
    <div class="steps">{steps}</div>
  </div>
  <div class="sec">
    <div class="h2">{t['cases_t']}</div>
    <div class="cases">
      {cats}
    </div>
    <div class="cases" style="margin-top:3mm; height: 27mm;">
      <div class="shotcard"><img src="{img['email']}"></div>
      <div class="shotcard"><img src="{img['brief']}"></div>
      <div class="shotcard"><img src="{img['third']}"></div>
    </div>
    <div class="h2">{t['bonus_t']}</div>
    <div class="bonus">{bonus}</div>
    <div class="trainer">
      <img src="{img['group']}">
      <div>
        <div class="eb">{t['trainer_eb']}</div>
        <div class="nm">Wong Yew Choon</div>
        <div class="rl">{t['trainer_role']}</div>
        <p>{t['trainer_bio']}</p>
      </div>
    </div>
  </div>
  <div class="backcta navy">
    <div class="info">
      <div class="big">{t['cta']}</div>
      <b>{t['facts'][0][0].replace('📅 ', '')}</b> · {t['facts'][0][1]} · <b>HRDC RM2,500 · CASH RM2,250</b> · {t['group']}<br>
      {t['venue_l']}: {VENUE}<br>
      {t['need']}<br>
      {t['enquiry']}: {PHONE} · {EMAIL} · HRD Corp Programme No. {PROGRAMME_NO}
    </div>
    <div class="qr">{qr(lang)}{t['scan']}</div>
  </div>
</section>"""


def doc(t: dict, body: str) -> str:
    extra = "h1{font-size:30pt}" if t["html_lang"] == "en" else ""
    return f'<!doctype html><html lang="{t["html_lang"]}"><head><meta charset="utf-8"><style>{CSS}{extra}</style></head><body>{body}</body></html>'


def chrome(args: list[str]) -> None:
    subprocess.run([CHROME, "--headless=new", "--disable-gpu", "--no-pdf-header-footer", *args],
                   check=True, capture_output=True, timeout=120)


def build(lang: str) -> None:
    t = L[lang]
    img = {
        "logo": uri(PROJECT / "public" / "yk-logo.png"),
        "hrd": uri(PROJECT / "public" / "hrd-corp-registered.png"),
        "portal": uri(IMG / "office-portal.webp"),
        "teach": uri(IMG / "trainer-teach.webp"),
        "group": uri(IMG / "class-group.webp"),
        "hrzh": uri(IMG / "hr-questionnaire-zh.webp"),
        "hren": uri(IMG / "hr-questionnaire-en.webp"),
        "email": uri(IMG / "email-bills.webp"),
        "brief": uri(IMG / "daily-brief.webp"),
    }
    # Optional screenshot: when public/img/v2/live-dashboard.png is saved, it replaces
    # the portal in the back-page screenshot row.
    dash = IMG / "live-dashboard.png"
    img["third"] = uri(dash) if dash.exists() else img["portal"]
    OUT.mkdir(exist_ok=True)
    tag = lang.upper()
    pages = {"front": front(t, lang, img), "back": back(t, lang, img)}
    full = OUT / f"brochure_{lang}.html"
    full.write_text(doc(t, pages["front"] + pages["back"]), encoding="utf-8")
    chrome([f"--print-to-pdf={OUT / f'AI_Agents_Brochure_A4_{tag}.pdf'}", full.as_uri()])
    for side, body in pages.items():
        h = OUT / f"_{lang}_{side}.html"
        h.write_text(doc(t, body), encoding="utf-8")
        # 210x297mm at 96dpi = 794x1123 px; scale 1.6 for a crisp phone image
        chrome(["--hide-scrollbars", "--window-size=794,1123", "--force-device-scale-factor=1.6",
                f"--screenshot={OUT / f'AI_Agents_Brochure_{tag}_{side}.png'}", h.as_uri()])
        h.unlink()
    print("built", lang)


if __name__ == "__main__":
    for lang in (sys.argv[1:] or ["zh", "en"]):
        build(lang)
