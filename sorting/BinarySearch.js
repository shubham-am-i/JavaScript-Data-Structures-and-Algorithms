const binarySearch = (arr, value) => {
  let startIndex = 0,
    endIndex = arr.length - 1

  while (startIndex <= endIndex) {
    const midIndex = Math.floor((startIndex + endIndex) / 2)

    if (arr[midIndex] > value) {
      endIndex = midIndex - 1
    } else if (arr[midIndex] < value) {
      startIndex = midIndex + 1
    } else {
      return midIndex
    }
  }

  return -1
}

const arr = [2, 5, 8, 9, 12, 17, 19, 22, 25, 29, 32, 35, 37, 40]
console.log(binarySearch(arr, 41))
