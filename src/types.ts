// possible directions for robot
export type Direction = 'N' | 'E' | 'S' | 'W';

// possible commands for robot
export type Command = 'M' | 'L' | 'R';

// interface for robot's position and orientation
export interface RobotPosition {
    row: number;
    col: number;
    orientation: Direction;
}

// interface for table size
export interface TableSize {
    rows: number;
    cols: number;
}