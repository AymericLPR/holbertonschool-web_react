// Import RowID and RowElement from interface.ts
import { RowID, RowElement } from "./interface";

// Declare type declarations for crud functions
export declare function insertRow(row: RowElement): number;
export declare function deleteRow(rowId: RowID): void;
export declare function updateRow(rowId: RowID, row: RowElement): number;
