// You are given with a random integer array A with its size and an element
// x. You need to search this element x in the given array, using linear search. Return the index of
// element in the input. If the element is not found in the array, return -1.

const linearSearch = (arr, num) => {
  if (arr.length === 0) return -1

  for (const key in arr) {
    if (arr[key] === num) {
      return key
    }
  }

  return -1
}

const arr = [2, 13, 4, 1, 3, 6, 28]
const index = linearSearch(arr, 66)

console.log(index)
