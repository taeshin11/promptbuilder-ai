/**
 * Google Apps Script - Web App for collecting prompts to Google Sheets
 *
 * SETUP INSTRUCTIONS:
 * 1. Go to Google Sheets and create a new spreadsheet.
 * 2. Click Extensions > Apps Script.
 * 3. Paste this entire code into the script editor.
 * 4. Click Deploy > New Deployment.
 * 5. Select type: "Web app".
 * 6. Set "Execute as" to "Me" and "Who has access" to "Anyone".
 * 7. Click Deploy and copy the Web App URL.
 * 8. Paste that URL into the WEBHOOK_URL variable in src/App.jsx.
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // Add header row if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Prompt", "Selections"]);
    }

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.prompt || "",
      JSON.stringify(data.selections || {}),
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ status: "success" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({ status: "ok", message: "PromptBuilder AI Webhook is active" })
  ).setMimeType(ContentService.MimeType.JSON);
}
