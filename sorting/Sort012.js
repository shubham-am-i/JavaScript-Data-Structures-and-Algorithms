const sort012 = (arr) => {
  let i = 0,
    nextZero = 0,
    nextTwo = arr.length - 1

  while (i <= nextTwo) {
    if (arr[i] === 0) {
      ;[arr[nextZero], arr[i]] = [arr[i], arr[nextZero]]
      i++
      nextZero++
    } else if (arr[i] === 2) {
      ;[arr[nextTwo], arr[i]] = [arr[i], arr[nextTwo]]
      nextTwo--
    } else {
      i++
    }
  }

  return arr
}

const arr = [0, 1, 2, 0, 1, 2, 0]
console.log(sort012(arr))
