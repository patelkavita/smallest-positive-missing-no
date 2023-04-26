const sort = function(unsortedList) {
  const numbers = unsortedList.slice(0);

  for(let index =0; index <= numbers.length; index++){
    let temp = 0;

    for(let i = 0; i < numbers.length; i++){
      if(numbers[i] > numbers[i+1]) {
        temp = numbers[i+1];
        numbers[i+1] = numbers[i];
        numbers[i] = temp;
      }
    }
  }

  return numbers;
}

const findMissingNumber = function(list) {
  let length = list.length;
  let listStart = list.indexOf(1);

  if(listStart < 0 ) return 1;

  let index = 0;
  while(index < length) {
    if(list[index + 1] - list[index] > 1) {
      return list[index] + 1;
    }
    index++;
  }

  return list[length - 1] + 1;
}

const main = function(numbers) {
  let list =  sort(numbers);

  return findMissingNumber(list);
}

exports.main = main;
