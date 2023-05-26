// You have been given an empty array(ARR) and its size N. The only input taken from the user will be N and you need not worry about the array.
// Your task is to populate the array using the integer values in the range 1 to N(both inclusive) in the order - 1,3,5,.......,6,4,2.

const arrange = (arr, num) => {
  let i = 0,
    j = num - 1
  let number = 1

  while (i < j) {
    arr[i] = number
    i++
    number++

    arr[j] = number
    j--
    number++
  }

  if (i === j) arr[i] = number

  return arr
}

const arr = []
const filledArray = arrange(arr, 9)

console.log(filledArray)
