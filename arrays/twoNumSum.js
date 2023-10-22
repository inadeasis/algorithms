// A function that takes in a non-empty array of distinct integers representing a target sum. If any two numbers in the array sum up to the target sum, the function returns them as an array. If no two numbers sum up to the target sum, it returns an empty array.

function twoNumberSum(array, targetSum) {
  // Write your code here.
  for (let i=0; i<array.length-1; i++){
    const firstNum = array[i]
    for (let j=i+1; j<array.length; j++){
      const secondNum = array[j];
      if (firstNum + secondNum === targetSum){
        return [firstNum, secondNum];
      }
    }
  }
  return [];
}

//tests
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))
console.log(twoNumberSum([4,6,1], 5))
console.log(twoNumberSum([4,6,1,3], -3))
