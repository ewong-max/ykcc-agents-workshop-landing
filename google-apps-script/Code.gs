/**
 * AI Agents for Business 101 — registration receiver.
 *
 * Bound to its own spreadsheet, "AI Agents for Business 2026 10 15 & 16". It no
 * longer shares a script with the AI Workshop for Accountants page, so redeploying
 * this one cannot affect that page.
 *
 * Values are written by matching the header text in row 1, not by column position:
 * you can reorder columns, delete one, or add your own (e.g. Status, Remarks) and
 * the script keeps working. Headers it does not recognise are left blank.
 *
 * Deployment steps are in README.md in this folder.
 */

var SHEET_ID = '1TyQk5LlsZjYZ9kE4ZYCsOV9yKZ6G0t0E6Vwe9h9xkHI';
var TAB_NAME = 'Registrations';
var TIME_ZONE = 'Asia/Kuala_Lumpur';

/** Used only if the tab is empty — otherwise the sheet's own row 1 wins. */
var DEFAULT_HEADERS = [
  'Submission Date & Time',
  'Full Name',
  'Email Address',
  'Phone Number',
  'Company Name',
  'HRD or Cash'
];

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse_({ ok: false, error: 'No registration data received.' });
    }

    var lead = JSON.parse(e.postData.contents);

    if (!lead.fullName || !lead.email || !lead.phone) {
      return jsonResponse_({ ok: false, error: 'Name, email and phone are all required.' });
    }

    var values = {
      // Stamped here rather than taken from the browser, so every row uses the same
      // format and Malaysia time regardless of the visitor's computer settings.
      'Submission Date & Time': Utilities.formatDate(new Date(), TIME_ZONE, 'dd/MM/yyyy HH:mm:ss'),
      'Full Name': lead.fullName,
      'Email Address': lead.email,
      // The leading apostrophe stores it as text; otherwise Sheets turns 0123456789
      // into the number 123456789 and the leading zero is lost.
      'Phone Number': "'" + lead.phone,
      'Company Name': lead.companyName || '',
      'HRD or Cash': lead.paymentMethod === 'HRDC' ? 'HRD' : (lead.paymentMethod || '')
    };

    // Two people submitting in the same instant must not overwrite each other's row.
    lock.waitLock(10000);

    var sheet = getSheet_();
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    sheet.appendRow(headers.map(function (h) {
      var key = String(h).trim();
      return values.hasOwnProperty(key) ? values[key] : '';
    }));

    return jsonResponse_({ ok: true });
  } catch (err) {
    return jsonResponse_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

/** Lets you confirm the deployment is live by opening the /exec URL in a browser. */
function doGet() {
  return jsonResponse_({ ok: true, message: 'AI Agents for Business 101 registration endpoint is running.' });
}

function getSheet_() {
  var spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  var sheet = spreadsheet.getSheetByName(TAB_NAME) || spreadsheet.insertSheet(TAB_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(DEFAULT_HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, DEFAULT_HEADERS.length).setFontWeight('bold');
  }

  return sheet;
}

function jsonResponse_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}
