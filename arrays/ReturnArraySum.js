// calculate array sum
const arr = [1, 2, 3, 4, 5, 4, 22, 14, 23]

// using for each method
// let sum = 0

// arr.forEach((num) => (sum += num))

// console.log(sum)

// using reduce method
const sum = arr.reduce((acc, currNum) => acc + currNum)
console.log(sum)
