const calculator = require("../task3");

describe('add method', () => {

    test('3 + 5 has to be 8', () =>{

        const a = 3;
        const b = 5;

        const result = calculator.add(a, b);

        expect(result).toBe(8);
    });

    test('10 + 7 has to be 17', () =>{
        
        const a = 10;
        const b = 7;

        const result = calculator.add(a, b);

        expect(result).toBe(17);;
    });

    test('0 + 0 has to be 0', () =>{

        const a = 0;
        const b = 0;

        const result = calculator.add(a, b);

        expect(result).toBe(0);;
    });
})

describe('subtract method', () => {

    test('10 - 5 has to be 5', () =>{
        expect(calculator.subtract(10, 5)).toBe(5);
    });

    test('3 - 5 has to be -2', () =>{
        expect(calculator.subtract(3, 5)).toBe(-2);
    });

    test('0 - 0 has to be 0', () =>{
        expect(calculator.subtract(0, 0)).toBe(0);
    });
})

describe('divide method', () => {

    test('10 / 5 has to be 2', () =>{
        expect(calculator.divide(10, 5)).toBe(2);
    });

    test('30 / 3 has to be 10', () =>{
        expect(calculator.divide(30, 3)).toBe(10);
    });

    test('Dividing by zero should throw an error', () =>{
        expect( () => calculator.divide(5, 0)).toThrow('Divisor cannot be zero.');
    });
})

describe('multiply method', () => {

    test('10 * 5 has to be 50', () =>{
        expect(calculator.multiply(10, 5)).toBe(50);
    });

    test('30 * 3 has to be 90', () =>{
        expect(calculator.multiply(30, 3)).toBe(90);
    });

    test('miltiplying by zero should throw an error', () =>{
        expect( () => calculator.multiply(5, 0)).toThrow('multiply cannot be zero.');
    });
})
