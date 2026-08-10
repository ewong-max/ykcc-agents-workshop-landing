# AI Agents & Skills Configuration — landing page

Landing page for the 2-day workshop **AI Agents & Skills Configuration —
Building AI Agents as Digital Colleagues for Business Productivity**, and a form
that collects interest registrations.

All the content comes from the participant handout
`2026-08-10_AI_Agents_Skills_Configuration_Participant_Handout_v4.docx` —
timings, module titles, prompt codes (P1–P26) and checkpoint wording follow the
book so the two cannot drift apart. Edit `src/data/workshopData.ts` when the
handout changes; almost nothing else needs touching.

Same stack and same visual language as the
[AI Workshop for Accountants page](../ykcc-landing-page): React 19 + Vite +
Tailwind 4.

## Running it

```bash
npm install
npm run dev
```

Then open http://localhost:3100. (The accountants page uses 3000, so both can
run side by side.)

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server on port 3100 |
| `npm run lint` | Type-check only — `tsc --noEmit` |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run deploy` | Build and push `dist/` to the `gh-pages` branch |

`npm run deploy` needs a git remote first — see below.

## Page structure

| Section | Anchor | Source in the handout |
| --- | --- | --- |
| Hero | `#top` | Cover page and "The running example" |
| What you actually configure | `#anatomy` | Module 1.2 (four parts) and Module 3.2 (five-part recipe) |
| Six builds | `#labs` | Labs 1–3, Modules 4–5, Capstone |
| Why this course is different | `#benefits` | Written from "How to Use This Handout" and the checkpoints |
| Full 2-day agenda | `#agenda` | Module and lab timings, hour by hour |
| Register interest | `#register-interest` | — |
| Before you start | `#prepare` | Part 0, sections 0.1–0.6 |
| Who should attend | `#audience` | — |
| FAQ | `#faq` | Part 0, Appendix D and the honest-limits sections |

## Where registrations go

Submissions POST to the same Google Apps Script endpoint the accountants page
uses, and land in the workshop leads spreadsheet. Each registration carries
`workshop: "AI Agents & Skills Configuration"` so the two courses stay
separable.

See [`google-apps-script/README.md`](google-apps-script/README.md) — it works as
deployed today, and includes an optional script update that gives this course
its own tab in the sheet.

The endpoint URL lives in `src/lib/leadSubmission.ts`. If it is ever blanked,
the form shows an amber warning instead of failing silently.

## Publishing

- **Repo:** https://github.com/ewong-max/ykcc-agents-workshop-landing —
  `main` holds the source, `gh-pages` holds the built output.
- **Live:** https://ewong-max.github.io/ykcc-agents-workshop-landing/

To push a change: commit to `main`, then run `npm run deploy`. That rebuilds
and force-pushes `dist/` to `gh-pages`; the live page updates a minute or so
later. `vite.config.ts` uses a relative `base`, so the build works both at a
domain root and under the `/repo-name/` sub-path Pages serves it from.

## Still to fill in

- `ORGANIZER_INFO` in `src/data/workshopData.ts` has blank `email`, `phone`,
  `address` and `website`. They are deliberately blank — the footer skips empty
  entries rather than printing placeholders. Fill them in and they appear.
- Workshop dates and venue are shown as TBC throughout.
- Hero and lab photographs are Unsplash stock. Swap the `image` URLs in
  `FEATURED_LABS` (`src/components/LandingPage.tsx`) for real photos from a
  previous batch when you have them.
