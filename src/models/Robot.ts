import { Table } from './Table';
import { Direction, RobotPosition } from '../types';

export class Robot {
    private directions: Direction[] = ['N', 'E', 'S', 'W'];
    private row: number;
    private col: number;
    private orientation: Direction;

    constructor(
        initialState: RobotPosition,
        private table: Table
    ) {
        this.row = initialState.row;
        this.col = initialState.col;
        this.orientation = initialState.orientation;
        // if you want to validate the initial position of the robot here if needed, you can uncomment the block below
        // if (!this.table.isValidPosition(this.row, this.col)) {
        //     throw new Error('Invalid initial position for the robot');
        // }
    }

    // rotate right 90 degrees
    rotateRight(): void {
        this.rotate(1);
    }

    // rotate left 90 degrees
    rotateLeft(): void {
        this.rotate(-1);
    }

    // move forward 1 step to the current direction
    move(): void {
        let nextRow = this.row;
        let nextCol = this.col;

        if (this.orientation === 'N') nextRow--;
        if (this.orientation === 'S') nextRow++;
        if (this.orientation === 'E') nextCol++;
        if (this.orientation === 'W') nextCol--;

        // only if the next position is valid, update the robot's position
        if (this.table.isValidPosition(nextRow, nextCol)) {
            this.row = nextRow;
            this.col = nextCol;
        }
        // if you want to throw an error instead of ignoring invalid moves, you can uncomment the else block below
        // else{
        //     throw new Error('Move not possible: Robot cannot move off the table');
        // }
    }

    getPosition(): string {
        return `${this.row} ${this.col} ${this.orientation}`;
    }

    // common logic for rotating left or right
    private rotate(step: number): void {
        const currentIndex = this.directions.indexOf(this.orientation);
        const index = (currentIndex + step + this.directions.length) % this.directions.length;
        this.orientation = this.directions[index];
    }
}