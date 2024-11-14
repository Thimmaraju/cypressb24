//Converting XLSX file to Json

var XLSX =require('xlsx');

var fs = require('fs')

//Create a work book Object

var workbook = XLSX.readFile('spreadsheets/userData.xlsx');
//spreadsheets\userData.xlsx

// Create worksheet

var worksheet = workbook.Sheets['Sheet1']

//Convert xlsx to Json Object

var user_data = XLSX.utils.sheet_to_json(worksheet)

console.log(user_data);

fs.writeFile('cypress/fixtures/ExceltoJson/user_data.json', JSON.stringify(user_data), (err) =>{

    if(err){

        console.log(err)
        return
    }
})

