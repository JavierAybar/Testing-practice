const stringLength = require('../task1');

test('"Hello" have to be = 5', () => {
    expect(stringLength("hello")).toBe(5);

})