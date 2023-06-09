const pushZerosToEnd = (arr) => {
  let currentIndex = 0,
    nonZeroIndex = 0

  while (currentIndex < arr.length) {
    if (arr[currentIndex] !== 0) {
      ;[arr[nonZeroIndex], arr[currentIndex]] = [arr[currentIndex], arr[nonZeroIndex]]
      nonZeroIndex++
    }
    currentIndex++
  }

  return arr
}

const arr = [3, 2, 0, 0, 0, 9, 8, 2, 0, 0]
console.log(pushZerosToEnd(arr))
