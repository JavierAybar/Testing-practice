const reverseString = require("../task2");

test('"Hello" has to be = "olleH"', () => {
    expect(reverseString("Hello")).toBe("olleH");
});