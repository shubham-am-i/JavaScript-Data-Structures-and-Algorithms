// You have been given an array/list(ARR) of size N. You need to swap every pair of alternate elements in the array/list.
// You don't need to print or return anything, just change in the input array itself.

const swapAlternative = (arr) => {
  if (arr.length === 0) return

  for (let i = 0; i < arr.length - 1; i += 2) {
    for (let j = i + 1; j < arr.length; j += 2) {
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
      break
    }
  }

  return arr
}

const arr = [9, 3, 6, 12, 4, 32, 5, 11, 19]
const swapArray = swapAlternative(arr)

console.log(swapArray)
