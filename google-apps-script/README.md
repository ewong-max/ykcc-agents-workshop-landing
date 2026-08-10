# Where registrations go

This page POSTs each registration to the **same Apps Script endpoint** the
"AI Workshop for Accountants" page already uses, and tags every row with
`workshop: "AI Agents & Skills Configuration"`.

## You do not have to do anything

The script that is deployed today ignores fields it does not know about, so
registrations from this page will land in the existing **Registrations** tab
alongside the accountants leads. Nothing breaks. You just cannot tell the two
courses apart in the sheet.

## Optional: give this course its own tab

`Code.gs` in this folder is an updated, backward-compatible version of the
deployed script. It adds a **Workshop** column and routes Agents-course
registrations into a separate **Registrations - AI Agents** tab. Accountants
registrations keep going to **Registrations** exactly as before.

1. Open the leads spreadsheet →
   [sheet](https://docs.google.com/spreadsheets/d/1iMYKZmw5QPenxchB5IoLC8NmLSkzT9AdcskNoHg-pck/edit).
2. **Extensions → Apps Script**.
3. Replace the whole of `Code.gs` with the version in this folder. Save.
4. **Deploy → Manage deployments → ✏️ (edit) → Version: _New version_ → Deploy.**

Step 4 is the one everybody forgets. Editing the script changes nothing on the
live site until you publish a new version of the **existing** deployment — and
it must be the existing deployment, because creating a new one gives you a new
`/exec` URL that neither landing page is pointing at.

### After updating

The new **Registrations - AI Agents** tab is created automatically on the first
registration, with its header row. The old **Registrations** tab keeps its
original 8 columns for existing rows; new accountants rows written by the
updated script include the Workshop column, so add that heading to the old tab
by hand if you want the columns to line up.

To confirm the deployment is live, open the `/exec` URL in a browser — it should
answer `{"ok":true,"message":"YKCC registration endpoint is running."}`.
