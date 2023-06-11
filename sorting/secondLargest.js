const secondLargest = (arr) => {
  let largest = Number.NEGATIVE_INFINITY
  let secondLargest = Number.NEGATIVE_INFINITY

  for (const element of arr) {
    if (element > largest) {
      secondLargest = largest
      largest = element
    } else if (element > secondLargest && element < largest) {
      secondLargest = element
    }
  }

  return secondLargest
}

const arr = [1, 22, 3, 4, 5, 6, 7]
console.log(secondLargest(arr))
