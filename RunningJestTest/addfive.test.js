const {default: TestRunner} = require("jest-runner");

//here I'm importing the addFive JS funtion file
//in the project folder
const addFive = require('./addFive');

test('returns the number plus 5', () => {
    expect(addFive(1)).toBe(6);
    expect(addFive(4)).toBe(9.0)
})