const testing = require('../lib/testing.js');
const smallestPositiveMissing= require('../src/smallest-positive-missing-no.js');

const assert = testing.assert;
const printHeadLine = testing.printHeadLine;
const missing = smallestPositiveMissing.main;

const it = function (testName, testData) {
  assert(testData.expected, testData.actual, testName);
};

const testSmallestPositiveMissing = function() {
  printHeadLine("\nTesting smallestPositiveMissing");

  it("Should give one when list is empty",{
    expected: 1,
    actual: missing([]),
  });

  it("Should give 2 if there is only one element ie. 1 in the list",{
    expected: 2,
    actual: missing([1]),
  });

  it("Should give 1 when list consist of only negative numbers",{
    expected: 1,
    actual: missing([-3, -9, -4, -32]),
  });

  it("Should give 1 when list consist of negatives and zero",{
    expected: 1,
    actual: missing([-3, -9, 0, -21, -63, -4, -32]),
  });
  it("Should give 1 when smallest positive number in the list is greater than 1",{
    expected: 1,
    actual: missing([-3, 2, 7, 3, -2, 0]),
  });

  it("Should give incremented greatest digit when list contains all positive and continuous numbers starts from 1",{
    expected: 5,
    actual: missing([1, 2, 3, 4]),
  });

  it("Should give first positive missing number when there are multiple missing",{
    expected: 3,
    actual: missing([1, 2, 6, 8, 4]),
  });
}

testSmallestPositiveMissing();
testing.getSummary();
