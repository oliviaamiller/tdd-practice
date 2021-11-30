// IMPORT MODULES under test here:
import { 
    addExclamationPoints,
    multiplyBySeven,
    multiplyBy12ThenHalve,
    divideThenMultiply,
    returnAsAnArray,
    returnAsAString,
    makeLuckyGreeting
} from '../functions.js';

const { test, skip } = QUnit;

skip('addExclamationPoints should return a string with 3 exclamation points added to the end', (expect) => {
    const expected1 = 'puppy!!!';
    const actual1 = addExclamationPoints('puppy');

    const expected2 = 'hello!!!';
    const actual2 = addExclamationPoints('hello');

    const expected3 = 'it works!!!';
    const actual3 = addExclamationPoints('it works');

    expect.equal(actual1, expected1, 'adds !!! to the end of `puppy` string');
    expect.equal(actual2, expected2, 'adds !!! to the end of `hello` string');
    expect.equal(actual3, expected3, 'adds !!! to the end of `it works` string');
});


skip('multiplyBySeven should take a number and multiply it by 7', (expect) => {
    const expected1 = 14;
    const actual1 = multiplyBySeven(2);

    const expected2 = 49;
    const actual2 = multiplyBySeven(7);

    const expected3 = 38.5;
    const actual3 = multiplyBySeven(5.5);

    expect.equal(actual1, expected1, '2 * 7 = 14');
    expect.equal(actual2, expected2, '7 * 7 = 49');
    expect.equal(actual3, expected3, '5.5 * 7 = 38.5');
});

skip('multiplyBy12ThenHalve should take a number, multiply it by 12, and then halve that number', (expect) => {
    const expected1 = 12;
    const actual1 = multiplyBy12ThenHalve(2);

    const expected2 = 42;
    const actual2 = multiplyBy12ThenHalve(7);

    const expected3 = 33;
    const actual3 = multiplyBy12ThenHalve(5.5);

    expect.equal(actual1, expected1, '(2 * 12) / 2 = 12');
    expect.equal(actual2, expected2, '(7 * 12) / 2 = 42');
    expect.equal(actual3, expected3, '(5.5 * 12) / 2 = 33');
});

skip('divideThenMultiply should should take in three numbers, divide the first by the second, then multiply the result by the third', (expect) => {
    const expected1 = 48;
    const actual1 = divideThenMultiply(12, 2, 8);

    const expected2 = 45;
    const actual2 = divideThenMultiply(36, 4, 5);

    const expected3 = 30;
    const actual3 = divideThenMultiply(25, 5, 6);

    expect.equal(actual1, expected1, '(12 / 2) * 8 = 48');
    expect.equal(actual2, expected2, '(36 / 4) * 5 = 45');
    expect.equal(actual3, expected3, '(25 / 5) * 6 = 30');
});

skip('returnAsAnArray should take in three numbers and return those numbers in an array', (expect) => {
    const expected1 = [2, 3, 4];
    const actual1 = returnAsAnArray(2, 3, 4);

    const expected2 = [6, 7, 8];
    const actual2 = returnAsAnArray(6, 7, 8);

    const expected3 = [30, 77, 80];
    const actual3 = returnAsAnArray(30, 77, 80);

    expect.deepEqual(actual1, expected1, 'return array [2, 3, 4]');
    expect.deepEqual(actual2, expected2, 'return array [6, 7, 8]');
    expect.deepEqual(actual3, expected3, 'return array [30, 77, 80]');
});

skip('returnAsAString should take in three numbers and return those numbers mushed together as a string', (expect) => {
    const expected1 = 234;
    const actual1 = returnAsAString(2, 3, 4);

    const expected2 = 678;
    const actual2 = returnAsAString(6, 7, 8);

    const expected3 = 307780;
    const actual3 = returnAsAString(30, 77, 80);

    expect.equal(actual1, expected1, 'return string 234');
    expect.equal(actual2, expected2, 'return string 678');
    expect.equal(actual3, expected3, 'return string 307080');
});

test('makeLuckyGreeting should take in two numbers and return a greeting announcing that the sum of those numbers is today`s lucky number', (expect) => {
    const expected1 = 'Hello! Your lucky number for the day is 8';
    const actual1 = makeLuckyGreeting(4, 4);

    const expected2 = 'Hello! Your lucky number for the day is 70';
    const actual2 = makeLuckyGreeting(60, 10);

    const expected3 = 'Hello! Your lucky number for the day is 52';
    const actual3 = makeLuckyGreeting(12, 40);

    expect.equal(actual1, expected1, 'return string `Hello! Your lucky number for the day is 8`');
    expect.equal(actual2, expected2, 'return string `Hello! Your lucky number for the day is 70`');
    expect.equal(actual3, expected3, 'return string `Hello! Your lucky number for the day is 52`');
});
