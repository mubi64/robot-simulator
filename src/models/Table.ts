import { TableSize } from '../types';

export class Table {
    private readonly rows: number;
    private readonly cols: number;

    constructor(size: TableSize) {
        this.rows = size.rows;
        this.cols = size.cols;
    }

    // Check if a given position is within the bounds of the table
    isValidPosition(row: number, col: number): boolean {
        return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
    }
}