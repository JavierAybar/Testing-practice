class Calculator {

    add(a, b){
        return a + b;
    }

    subtract(a, b){
        return a - b;
    }

    divide(a, b){
        if (b === 0) {
            throw new Error("Divisor cannot be zero.");
          }
        return a / b;
    }

    multiply(a, b){
        if (b === 0) {
            throw new Error("multiply cannot be zero.");
          }
        return a * b;
    }
}

const calculator = new Calculator();

module.exports = calculator;