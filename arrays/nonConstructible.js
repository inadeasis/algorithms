// A function that returns that minimum amount of change you cannot create

// Optimal Space and Time Complexity
// O(nlogn) time O(1) space where n is the number of coins
const nonConstructibleChange = (coins) => {
 
  coins.sort((a,b)=>a-b)
  let change = 0;
  for (let i=0; i<coins.length; i++){
    if (coins[i]>(change+1)){
        return change+1;}
      change += coins[i];}
  return change + 1;
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]))
console.log(nonConstructibleChange([1, 1, 1, 1, 1]))
console.log(nonConstructibleChange([1, 5, 1, 1, 1, 10, 15, 20, 100]))
console.log(nonConstructibleChange([6, 4, 5, 1, 1, 8, 9]))