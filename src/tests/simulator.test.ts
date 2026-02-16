import { Simulator } from '../services/Simulator';

describe('Robot Simulator Assessment Tests', () => {
    
    // test 1 from the given requirement document
    test('Example 1: Should match the expected output 3 1 S', () => {
        const input =  `
                        5 5
                        1 2 S
                        MRMLM
                        `;
        const result = Simulator.run(input);
        expect(result).toBe('3 1 S');
    });

    // test 2 from the given requirement document
    test('Example 2: Should not move off the table and match the expected output 3 0 W', () => {
        const input =  `
                        5 4
                        1 2 N
                        LMLMMRMMLRM
                        `;
        const result = Simulator.run(input);
        expect(result).toBe('3 0 W');
    });
    
});