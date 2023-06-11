const rotateArrayLeft = (arr, k) => {
  k %= arr.length

  let i = 0,
    j = arr.length - 1
  while (i <= j) {
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
    i++
    j--
  }

  let a = 0,
    b = arr.length - 1 - k
  while (a <= b) {
    ;[arr[a], arr[b]] = [arr[b], arr[a]]
    a++
    b--
  }

  let c = arr.length - k,
    d = arr.length - 1
  while (c <= d) {
    ;[arr[c], arr[d]] = [arr[d], arr[c]]
    c++
    d--
  }

  return arr
}

const arr = [1, 2, 3, 4, 5, 6, 7]
console.log(rotateArrayLeft(arr, 3))
