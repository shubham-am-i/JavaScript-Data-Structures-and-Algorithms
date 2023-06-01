// You have been given an integer array/list(ARR) of size N. Where N is equal to [2M + 1].
// Now, in the given array/list, 'M' numbers are present twice and one number is present only once.
// You need to find and return that number which is unique in the array/list.

// brute force O(n^2)
// const findUnique = (arr) => {
//   if (arr.length === 0) return -1

//   for (let i = 0; i < arr.length; i++) {
//     let count = 0

//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         count++
//       }
//     }

//     if (count === 1) {
//       return arr[i]
//     }
//   }

//   return -1
// }

// 2 approach. We can use sorting with O(nlogn) complexity

// 3 approach. use of XOR
// This approach uses 2 properties of XOR:
// 1. XOR of a number with itself is 0.
// 2. XOR of a number with 0 is number itself.

const findUnique = (arr) => {
  let uniqueElement = 0

  for (const ele of arr) {
    uniqueElement = uniqueElement ^ ele
  }

  return uniqueElement
}

const arr = [1, 3, 1, 3, 6, 6, 7, 10, 7]
const uniqueElement = findUnique(arr)
console.log(uniqueElement)
