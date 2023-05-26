// IMPLEMENT THE ARRAY.SLICE() FUNCTION FROM SCRATCH

function arraySlice(array, beginIndex, endIndex) {
  // If no parameters passed, return the array
  if (!beginIndex && !endIndex) return array

  // If only beginIndex is found, set endIndex to size of array
  if (beginIndex && !endIndex) endIndex = array.length

  const partArray = []

  // If both begin and end index specified, then return the part of the array
  for (let i = beginIndex; i < endIndex; i++) partArray.push(array[i])

  return partArray
}

console.log(arraySlice([1, 2, 3, 4], 1, 2)) // [2]
console.log(arraySlice([1, 2, 3, 4], 2)) // [3,4]
