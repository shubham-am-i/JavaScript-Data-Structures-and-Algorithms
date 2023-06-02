const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = Infinity,
      minIndex = -1
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j]
        minIndex = j
      }
    }

    ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }

  return arr
}

const arr = [2, 25, 29, 32, 35, 37, 40, 5, 8, 9, 12, 17, 19, 22]
console.log(selectionSort(arr))
