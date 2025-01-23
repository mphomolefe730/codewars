/*
    You are given a non-negative integer array nums. In one operation, you must:

    Choose a positive integer x such that x is less than or equal to the smallest non-zero element in nums.
    Subtract x from every positive element in nums.

    Return the minimum number of operations to make every element in nums equal to 0.

    Example 1:
    Input: nums = [1,5,0,3,5]
    Output: 3

    Explanation:
    In the first operation, choose x = 1. Now, nums = [0,4,0,2,4].
    In the second operation, choose x = 2. Now, nums = [0,2,0,0,2].
    In the third operation, choose x = 2. Now, nums = [0,0,0,0,0].
  */

function solution(numbers){
  operationCount = 0;
  minNumber = Math.min(...numbers.filter(num => num > 0));

  while(minNumber != Infinity){
    minNumber = Math.min(...numbers.filter(n => n > 0));
    numbers = numbers.map(n => (n > 0) ? n - minNumber : n );
    console.log(numbers);
    operationCount++;
  }
  operationCount--;
  console.log("operation happened: ", operationCount, " times.");
}

solution([1,2,6,3,5]);
