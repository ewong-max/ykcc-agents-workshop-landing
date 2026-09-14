import { InterestRegistration } from '../types';

/**
 * Where registrations land. A browser cannot write to a private Google Sheet directly —
 * there is no credential a public page can safely hold — so submissions are POSTed to a
 * Google Apps Script bound to this sheet, which appends the row on your behalf.
 *
 * This course has its own sheet and script, separate from the AI Workshop for
 * Accountants page — see google-apps-script/README.md.
 */
export const SHEET_URL =
  'https://docs.google.com/spreadsheets/d/1TyQk5LlsZjYZ9kE4ZYCsOV9yKZ6G0t0E6Vwe9h9xkHI/edit';

/** Paste the /exec URL from your Apps Script deployment here. */
export const APPS_SCRIPT_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbwrii7G-H3H-1_E8z6CQqi54YZpLrecZWSGycet1twleFT51l8HvtAVL9YqqDXufEFa/exec';

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
  // Job Role is no longer collected, and the sheet has no column for it.
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
