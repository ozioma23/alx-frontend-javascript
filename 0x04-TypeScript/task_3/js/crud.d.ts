// crud.d.ts

import { RowID, RowElement } from './interface';

// Declare ambient types for CRUD functions
export declare function insertRow(row: RowElement): RowID;
export declare function deleteRow(rowId: RowID): void;
export declare function updateRow(rowId: RowID, row: RowElement): RowID;

"declare function insertRow(row: RowElement): number"