// Import RowID and RowElement from interface.ts
import { RowID, RowElement } from "./interface";
// Import all functions from crud.js as CRUD
import * as CRUD from "./crud";

// Create an object called row with the type RowElement
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Create a const variable named newRowID with the type RowID and assign the value the insertRow command
const newRowID: RowID = CRUD.insertRow(row);

// Create a const variable named updatedRow with the type RowElement and update row with an age field set to 23
const updatedRow: RowElement = { ...row, age: 23 };

// Call the updateRow and deleteRow commands
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
