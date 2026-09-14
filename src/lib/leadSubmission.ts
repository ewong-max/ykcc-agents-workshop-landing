import { InterestRegistration } from '../types';

/**
 * Where registrations land. A browser cannot write to a private Google Sheet directly —
 * there is no credential a public page can safely hold — so submissions are POSTed to a
 * Google Apps Script bound to this sheet, which appends the row on your behalf.
 *
 * This is the same sheet and the same endpoint as the AI Workshop for Accountants page.
 * Every lead carries a `workshop` field so the two courses can be told apart; see
 * google-apps-script/README.md for the (optional) script update that puts the Agents
 * course into its own tab.
 */
export const SHEET_URL =
  'https://docs.google.com/spreadsheets/d/1iMYKZmw5QPenxchB5IoLC8NmLSkzT9AdcskNoHg-pck/edit?usp=sharing';

/** Paste the /exec URL from your Apps Script deployment here. */
export const APPS_SCRIPT_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbyeFnBiKZCH0trEKQcB31CgTZ0i-Xv4T0_PkNvJNKj_j7mNBu3wIcdxt_lJdLRoROkd/exec';

export const isSubmissionConfigured = APPS_SCRIPT_ENDPOINT.length > 0;

/** Written into every registration so leads from the two landing pages stay separable. */
export const WORKSHOP_NAME = 'AI Agents for Business 101';

export interface LeadInput {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  paymentMethod: 'HRDC' | 'Cash';
}

export const buildLead = (input: LeadInput): InterestRegistration => ({
  id: 'agents-' + Date.now(),
  workshop: WORKSHOP_NAME,
  fullName: input.fullName.trim(),
  email: input.email.trim(),
  phone: input.phone.trim(),
  companyName: input.companyName.trim() || 'N/A',
  // Job Role is no longer collected on this page; the sheet's Job Role column
  // is simply left blank for these rows (Code.gs already tolerates its absence).
  jobRole: '',
  paymentMethod: input.paymentMethod,
  submittedAt: new Date().toLocaleString(),
  status: 'New'
});

/**
 * Appends the registration to the Google Sheet.
 * Sent as text/plain so the browser skips the CORS preflight, which Apps Script
 * web apps do not answer.
 */
export const submitLeadToSheet = async (lead: InterestRegistration): Promise<void> => {
  if (!isSubmissionConfigured) {
    throw new Error(
      'Registration endpoint is not set up yet. Add your Apps Script /exec URL to APPS_SCRIPT_ENDPOINT in src/lib/leadSubmission.ts.'
    );
  }

  const response = await fetch(APPS_SCRIPT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(lead)
  });

  if (!response.ok) {
    throw new Error(`The registration service returned ${response.status}.`);
  }

  const result = await response.json().catch(() => null);
  if (result && result.ok === false) {
    throw new Error(result.error || 'The registration could not be saved.');
  }
};
