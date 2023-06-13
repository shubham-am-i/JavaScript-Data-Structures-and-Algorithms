const checkArrayRotation = (arr) => {
  let max = Infinity
  let maxIndex = -1

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < max) {
      max = arr[i]
      maxIndex = i
    }
  }

  return maxIndex
}

const arr = [5, 6, 7, 1, 2, 3, 4]
console.log(checkArrayRotation(arr))
