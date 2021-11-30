// IMPORT MODULES under test here:
import { 
    addExclamationPoints,
    multiplyBySeven,
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


test('multiplyBySeven should take a number and multiply it by 7', (expect) => {
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

