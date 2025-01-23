function twoSum(numbers, target) {
  console.log("to get sum of ", target, "you add position: ");
  for(let i = 0; i < numbers.length; i++){
    for(let j = 1; j < numbers.length; j++){
        if(numbers[i] + numbers[j] == target){
          return [i, j];
        }
    }
  }
};
console.log(twoSum([1, 2, 3], 4));
console.log(twoSum([1234, 5678, 9012], 14690));
console.log(twoSum([2, 2, 3], 4));
console.log(twoSum([2, 3, 1], 3));
