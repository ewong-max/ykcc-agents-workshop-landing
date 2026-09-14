# Where registrations go

Registrations for **AI Agents for Business 101** go to their own spreadsheet,
[AI Agents for Business 2026 10 15 & 16](https://docs.google.com/spreadsheets/d/1TyQk5LlsZjYZ9kE4ZYCsOV9yKZ6G0t0E6Vwe9h9xkHI/edit),
tab **Registrations**. This course no longer shares a sheet or a script with the
AI Workshop for Accountants page.

The page POSTs each registration to the Apps Script in `Code.gs`, which appends
one row. Columns are matched by the header text in row 1:

| Header                 | Filled with                                  |
|------------------------|----------------------------------------------|
| Submission Date & Time | Server time, Malaysia (dd/MM/yyyy HH:mm:ss)  |
| Full Name              | Name                                         |
| Email Address          | Email                                        |
| Phone Number           | Phone                                        |
| Company Name           | Company (`N/A` if left blank on the form)    |
| HRD or Cash            | `HRD` or `Cash`                              |

Any other column (e.g. a Status or Remarks column you add yourself) is left blank
for you to fill in, and columns can be reordered freely.

## First-time setup

1. Open the spreadsheet above → **Extensions → Apps Script**.
2. Replace the contents of `Code.gs` with the version in this folder. Save.
3. **Deploy → New deployment → ⚙️ → Web app.**
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Deploy, approve the permissions prompt, and copy the **Web app URL** (ends in `/exec`).
5. Put that URL in `APPS_SCRIPT_ENDPOINT` in `src/lib/leadSubmission.ts`, then
   `npm run deploy`.

To confirm it is live, open the `/exec` URL in a browser — it should answer
`{"ok":true,"message":"AI Agents for Business 101 registration endpoint is running."}`.

## Changing the script later

Use **Deploy → Manage deployments → ✏️ → Version: _New version_ → Deploy** on the
*existing* deployment. Creating a new deployment mints a new `/exec` URL that the
landing page is not pointing at.
