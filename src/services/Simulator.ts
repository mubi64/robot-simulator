import { Command, Direction, RobotPosition, TableSize } from '../types';
import { Table } from '../models/Table';
import { Robot } from '../models/Robot';

export class Simulator {
    static run(input: string): string {
        const lines = input.trim().split('\n').map(l => l.trim());
        
        // Line 1: parse table size
        const dimensions = lines[0].split(' ').map(Number);
        const size: TableSize = { 
            rows: dimensions[0], 
            cols: dimensions[1] 
        };
        const table = new Table(size);

        // Line 2: parse initial position and orientation of the robot
        const posParts = lines[1].split(' ');
        const initialPosition: RobotPosition = { 
            row: parseInt(posParts[0]), 
            col: parseInt(posParts[1]), 
            orientation: posParts[2] as Direction 
        };
        
        const robot = new Robot(initialPosition, table);

        // Line 3: execute commands
        const commands = lines[2];
        
        for (const cmd of commands) {
            // optional: check if the command is valid before executing
            if (!this.isValidCommand(cmd)) {
                throw new Error(`Invalid command: ${cmd}`);
            }
            
            if (cmd === 'M') robot.move();
            if (cmd === 'L') robot.rotateLeft();
            if (cmd === 'R') robot.rotateRight();
        }

        return robot.getPosition();
    }

    private static isValidCommand(cmd: string): cmd is Command {
        return cmd === 'M' || cmd === 'L' || cmd === 'R';
    }
}