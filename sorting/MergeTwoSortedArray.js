const mergeSortedArrays = (arr1, arr2) => {
  let i = 0,
    j = 0
  const mergedArray = []

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergedArray.push(arr1[i])
      i++
    } else {
      mergedArray.push(arr2[j])
      j++
    }
  }

  while (i !== arr1.length) {
    mergedArray.push(arr1[i])
    i++
  }

  while (j !== arr2.length) {
    mergedArray.push(arr2[j])
    j++
  }

  return mergedArray
}

const arr1 = [1, 3, 5, 7, 9, 11, 13, 16, 17]
const arr2 = [2, 4, 6, 8, 10, 12, 14, 16]

console.log(mergeSortedArrays(arr1, arr2))
