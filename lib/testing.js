
/*********************************** Test Framework ************************/
const formatting= function (code, text) {
  return "\033[" + code + "m" + text + "\033[0m";
}

const underline= function (string) {
  return formatting(4, string);
}

const bold = function (string){
  return formatting(1, string);
}

const italic= function (string){
  return formatting(3, string);
}

const yellow = function (string){
  return formatting(33, string);
}

const red = function (string){
  return formatting(31, string);
}

const green = function (string){
  return formatting(32, string);
}
const blue = function (string){
  return formatting(34, string);
}

const cyan= function (string) {
  return formatting(37, string);
}

const printHeadLine= function (string){
  console.log(underline(bold(italic(yellow(string)))));
}

const isEven = function (number) {
  return number % 2 === 0;
}

const isOdd = function (number) {
  return number % 2 !== 0;
}

const areArrayEqual = function (array1, array2) {
  if(array1.length === array2.length) {

    for( let index = 0; index < array1.length; index++) {
      if ( array1[index] !== array2[index] ) 
        return false;
    }
    return true;
  }
  return false;
}

let totalTest = 0;
let passedTest = 0;

const passedMessage = function(expected, actual, message) {
  const passMessage = "✅ " + bold(cyan("Test: ")) + message;

  return passMessage;
}

const failedMessage = function(expected, actual, message) {
  const failMessage = "❌ " + red("Test: ") + message + green("\n     Expected : ") + expected + red("\n     Actual : ") + actual;

  return failMessage;
}

const assertArray = function(expected, actual, message) {
  if(areArrayEqual(expected, actual)) passedTest += 1;
  const passMessage = passedMessage(expected, actual, message);
  const failMessage = failedMessage(expected, actual, message);
  totalTest += 1;
  console.log(areArrayEqual(expected, actual)? passMessage : failMessage);
}

const assert = function(expected, actual, message) {
  if(expected === actual) passedTest += 1;
  const passMessage = passedMessage(expected, actual, message);
  const failMessage = failedMessage(expected, actual, message);
  totalTest +=1;
  console.log(expected ===  actual ? passMessage : failMessage);
}

const getSummary = function() {
  console.log(blue("\n  Summary : "),passedTest + "/" + totalTest, "test passed");
}

exports.assert = assert;
exports.assertArray = assertArray;
exports.getSummary = getSummary;
exports.printHeadLine = printHeadLine;
