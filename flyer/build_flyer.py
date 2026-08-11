"""
Builds the one-page A4 promotional flyer for the AI Agents & Skills Configuration
workshop.

Produces a single self-contained HTML file (logo and QR code inlined, no external
requests) and renders it to PDF and PNG with headless Chrome.

    python flyer/build_flyer.py

Outputs into flyer/: flyer.html, AI_Agents_Workshop_Flyer_A4.pdf, and a .png preview.

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


def logo_data_uri() -> str:
    raw = (PROJECT_DIR / "public" / "yk-logo.png").read_bytes()
    return "data:image/png;base64," + base64.b64encode(raw).decode("ascii")


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


BENEFITS = [
    (
        "The report that ate your day",
        "The monthly pack, the management report, the board deck — drafted from your own "
        "figures in minutes, so your time goes on checking the numbers instead of keying "
        "them in.",
    ),
    (
        "No coding. No jargon.",
        "If you can use email and Excel, you can do this. You give instructions in ordinary "
        "English, and every technical word is explained in plain language before it is used.",
    ),
    (
        "Real files, not text on a screen",
        "Excel workbooks with working formulas. Word documents in your house style. Slide "
        "decks with speaker notes. Saved straight into your own folder, ready to send.",
    ),
    (
        "You are still the one who signs",
        "It takes away the typing, not the judgement. You will know exactly what to check, "
        "and exactly what your AI colleague must never be trusted to decide.",
    ),
]

TAKEAWAYS = [
    "An AI colleague set up and working on your own laptop",
    "Every file you build during the two days, yours to keep",
    "A step-by-step handbook so you can do it all again at your desk",
]

FACTS = [
    ("2 Days", "9:00 AM – 5:00 PM"),
    ("Hands-on", "Bring your laptop"),
    ("0 Code", "No IT background"),
    ("Small group", "Live help all day"),
]


def build_html() -> str:
    benefit_cards = "\n".join(
        f"""      <div class="benefit">
        <div class="benefit-num">{i:02d}</div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>"""
        for i, (title, body) in enumerate(BENEFITS, start=1)
    )

    takeaway_items = "\n".join(f"        <li>{t}</li>" for t in TAKEAWAYS)

    fact_items = "\n".join(
        f"""      <div class="fact"><strong>{big}</strong><span>{small}</span></div>"""
        for big, small in FACTS
    )

    return f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>AI Agents &amp; Skills Configuration — Workshop Flyer</title>
<style>
  @page {{ size: A4; margin: 0; }}
  * {{ box-sizing: border-box; margin: 0; padding: 0; }}

  html, body {{
    width: 210mm;
    height: 297mm;
    background: #FAF8F5;
    color: #1C1C1F;
    font-family: "Segoe UI", "Helvetica Neue", Arial, sans-serif;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }}

  .page {{
    width: 210mm;
    height: 297mm;
    padding: 9mm 12mm 8mm;
    display: flex;
    flex-direction: column;
    gap: 3.6mm;
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
  .masthead .org {{
    font-size: 8.5pt;
    font-weight: 700;
    color: #777672;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    text-align: right;
    line-height: 1.5;
  }}
  .masthead .org span {{ display: block; font-weight: 600; color: #A5A4A0; letter-spacing: 0.02em; }}

  /* ---- title ---- */
  .chip {{
    display: inline-block;
    background: rgba(2,132,199,0.10);
    border: 0.35mm solid rgba(2,132,199,0.25);
    color: #0284C7;
    font-size: 7.5pt;
    font-weight: 800;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    padding: 1.4mm 3mm;
    border-radius: 1.5mm;
  }}
  h1 {{
    font-size: 27pt;
    line-height: 1.05;
    letter-spacing: -0.02em;
    font-weight: 800;
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
    padding: 5.2mm 6mm;
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
    font-weight: 800;
    line-height: 1.2;
    color: #fff;
    position: relative;
  }}
  .hook p {{
    font-size: 9.5pt;
    line-height: 1.55;
    color: #D5D4D0;
    margin-top: 2.4mm;
    position: relative;
  }}

  /* ---- benefits ---- */
  .section-label {{
    font-size: 8pt;
    font-weight: 800;
    letter-spacing: 0.14em;
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
    padding: 3.8mm 4.2mm;
  }}
  .benefit-num {{
    font-size: 7.5pt;
    font-weight: 800;
    color: #fff;
    background: #262629;
    width: 6.4mm; height: 6.4mm;
    border-radius: 1.8mm;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 2.4mm;
  }}
  .benefit h3 {{
    font-size: 10.5pt;
    font-weight: 800;
    color: #111113;
    line-height: 1.25;
    margin-bottom: 1.4mm;
  }}
  .benefit p {{ font-size: 8.6pt; line-height: 1.5; color: #555450; }}

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
    font-weight: 800;
    letter-spacing: 0.12em;
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
  .fact strong {{ display: block; font-size: 12.5pt; font-weight: 800; color: #0284C7; }}
  .fact span {{ display: block; font-size: 7.8pt; color: #666562; margin-top: 0.6mm; }}

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
  .cta h2 {{ font-size: 13.5pt; font-weight: 800; color: #111113; line-height: 1.2; }}
  .cta p {{ font-size: 8.6pt; color: #555450; margin-top: 1.4mm; line-height: 1.45; }}
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
    font-size: 6.8pt;
    color: #777672;
    margin-top: 1.2mm;
    font-weight: 600;
    letter-spacing: 0.03em;
  }}

  .tbc {{
    background: #FEF08A;
    border: 0.35mm solid #FACC15;
    color: #713F12;
    font-weight: 800;
    font-size: 8pt;
    padding: 0.8mm 2mm;
    border-radius: 1.2mm;
    display: inline-block;
  }}

  footer {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 7pt;
    color: #8A8983;
    border-top: 0.35mm solid #E6E3DB;
    padding-top: 2.4mm;
  }}
</style>
</head>
<body>
<div class="page">

  <div class="masthead">
    <img src="{logo_data_uri()}" alt="YK Group">
    <div class="org">YKCC / YK Group<span>Practical AI training</span></div>
  </div>

  <div>
    <span class="chip">2-Day Hands-On Workshop</span>
    <h1>AI Agents &amp;<br><em>Skills Configuration</em></h1>
    <p class="standfirst">Building AI agents as digital colleagues for business productivity.</p>
  </div>

  <div class="hook">
    <h2>It does the work, not just the talking.</h2>
    <p>Most people have only ever used AI as a chat window that gives advice. Over two days you
    will set one up to actually open your files, build the report, and save it into your folder —
    finished work, not suggestions you still have to type up yourself.</p>
  </div>

  <div>
    <span class="section-label">What changes on Monday morning</span>
    <div class="benefits">
{benefit_cards}
    </div>
  </div>

  <div class="takeaways">
    <div class="heading">You go<br>home with</div>
    <ul>
{takeaway_items}
    </ul>
  </div>

  <div class="facts">
{fact_items}
  </div>

  <div class="cta">
    <div class="copy">
      <h2>Register your interest</h2>
      <p><span class="tbc">Dates &amp; venue to be confirmed</span> &nbsp;Register now and we will
      email you the moment they are set. In-house batches can be run at your own office.</p>
      <span class="url">{SITE_URL}</span>
    </div>
    <div class="qr">
      {qr_svg()}
      <span>SCAN TO REGISTER</span>
    </div>
  </div>

  <footer>
    <span>Requires a laptop and a paid Claude plan (Pro, Max, Team or Enterprise).</span>
    <span>Details kept confidential under the PDPA.</span>
  </footer>

</div>
</body>
</html>
"""


def render(html_path: Path) -> None:
    if not CHROME.exists():
        print(f"Chrome not found at {CHROME}; skipping PDF/PNG render.", file=sys.stderr)
        return

    url = html_path.as_uri()
    common = ["--headless", "--disable-gpu", "--no-sandbox", "--force-color-profile=srgb"]

    subprocess.run(
        [str(CHROME), *common,
         f"--print-to-pdf={FLYER_DIR / 'AI_Agents_Workshop_Flyer_A4.pdf'}",
         "--no-pdf-header-footer", url],
        check=True, capture_output=True,
    )

    # A4 is 794x1123 CSS px at 96dpi; a device scale factor of 2 gives a 1588x2246
    # image (~192dpi) that stays readable when shared on WhatsApp. The window must be
    # the CSS size, not the pixel size, or the page renders in a corner of the shot.
    subprocess.run(
        [str(CHROME), *common, "--window-size=794,1123", "--force-device-scale-factor=2",
         "--hide-scrollbars",
         f"--screenshot={FLYER_DIR / 'AI_Agents_Workshop_Flyer_A4.png'}", url],
        check=True, capture_output=True,
    )


if __name__ == "__main__":
    out = FLYER_DIR / "flyer.html"
    out.write_text(build_html(), encoding="utf-8")
    print(f"wrote {out}")
    render(out)
    for f in sorted(FLYER_DIR.glob("AI_Agents_Workshop_Flyer_A4.*")):
        print(f"wrote {f}  ({f.stat().st_size / 1024:.0f} KB)")
