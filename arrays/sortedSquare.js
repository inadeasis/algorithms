// A function that sorts an array from ascending order and returns a new array of the same length with the squares of original integers in ascending order.

const sortedSquaredArray = (array) => {

  // initialize new array
  let arrSquared = []

  for (let i = 0; i<array.length; i++){
    let squaredArr = Math.pow((array[i]),2);
    arrSquared.push(squaredArr)
  
  }
  return arrSquared.sort((a,b)=>a-b);
}

// tests
console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]))
console.log(sortedSquaredArray([10]))
console.log(sortedSquaredArray([-1]))
console.log(sortedSquaredArray([-7, -3, 1, 9, 22, 30]))