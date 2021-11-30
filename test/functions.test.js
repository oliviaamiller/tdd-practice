// IMPORT MODULES under test here:
import { 
    addExclamationPoints,
    multiplyBySeven,
    multiplyBy12ThenHalve,
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

test('multiplyBy12ThenHalve should take a number, multiply it by 12, and then halve that number', (expect) => {
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

