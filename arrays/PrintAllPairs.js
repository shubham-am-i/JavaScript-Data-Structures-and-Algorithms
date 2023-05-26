// Print all possible pairs within an array

const printAllPairs = (arr) => {
  if (arr.length === 0) return

  const n = arr.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      console.log(`(${arr[i]}, ${arr[j]})`)
    }
  }
}

const arr = [1, 3, 5, 4, 6, 7]
printAllPairs(arr)
