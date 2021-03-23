function onEdit() {
  var sheet = SpreadsheetApp.getActive().getSheetByName('Sheet1');
  var active = sheet.getActiveCell();

    // When the 1st column is edited, add date/time to adjacent column.
    if( active.getColumn() == 1 ) {
      var date_time = active.offset(0, 1);
      date_time.setValue(new Date()).setNumberFormat("DD/MMM/YYYY - hh:mm AM/PM");
    }

    // If row on 1st column is erased, delete date/time on that row
    if(active.isBlank()) {
      date_time.setValue('')
    }
}

// To Make this applicable to all sheets in a single file > var sheet = SpreadsheetApp.getActiveSheet();
