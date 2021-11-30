// IMPORT MODULES under test here:
import { 
    addExclamationPoints,
} from '../functions.js';

const { test, skip } = QUnit;

test('addExclamationPoints should return a string with 3 exclamation points added to the end', (expect) => {
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


skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

