const findLargestElement = (arr) => {
  if (arr.length === 0) return

  let max = arr[0]

  for (const ele of arr) {
    if (ele > max) max = ele
  }

  return max
}

const arr = [10, 5, 20, 88, 15]

const largestNumber = findLargestElement(arr)

console.log(largestNumber)
