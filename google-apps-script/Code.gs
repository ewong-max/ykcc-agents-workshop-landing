/**
 * YKCC workshop registrations — receiver for BOTH landing pages.
 *
 * This is an updated version of the script already deployed for the
 * "AI Workshop for Accountants" page. It is backward compatible: a registration
 * with no `workshop` field still lands in the original "Registrations" tab, so
 * the older page keeps working unchanged after you paste this in.
 *
 * Registrations that do carry a `workshop` field are routed to their own tab,
 * and the workshop name is written into the row as well.
 *
 * Deployment steps are in README.md in this folder.
 */

var SHEET_ID = '1iMYKZmw5QPenxchB5IoLC8NmLSkzT9AdcskNoHg-pck';

/** Anything not listed here falls back to the original tab. */
var TABS = {
  'AI Agents & Skills Configuration': 'Registrations - AI Agents',
  'AI Workshop for Accountants': 'Registrations'
};
var DEFAULT_TAB = 'Registrations';

var HEADERS = [
  'Submitted At',
  'Lead ID',
  'Workshop',
  'Full Name',
  'Email',
  'Phone',
  'Company',
  'Job Role',
  'Status'
];

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse_({ ok: false, error: 'No registration data received.' });
    }

    var lead = JSON.parse(e.postData.contents);

    if (!lead.fullName || !lead.email || !lead.phone) {
      return jsonResponse_({ ok: false, error: 'Name, email and phone are all required.' });
    }

    var workshop = lead.workshop || 'AI Workshop for Accountants';

    getSheet_(TABS[workshop] || DEFAULT_TAB).appendRow([
      lead.submittedAt || new Date().toLocaleString(),
      lead.id || '',
      workshop,
      lead.fullName,
      lead.email,
      lead.phone,
      lead.companyName || '',
      lead.jobRole || '',
      lead.status || 'New'
    ]);

    return jsonResponse_({ ok: true });
  } catch (err) {
    return jsonResponse_({ ok: false, error: String(err) });
  }
}

/** Lets you confirm the deployment is live by opening the /exec URL in a browser. */
function doGet() {
  return jsonResponse_({ ok: true, message: 'YKCC registration endpoint is running.' });
}

function getSheet_(tabName) {
  var spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  var sheet = spreadsheet.getSheetByName(tabName);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(tabName);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
  }

  return sheet;
}

function jsonResponse_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}
