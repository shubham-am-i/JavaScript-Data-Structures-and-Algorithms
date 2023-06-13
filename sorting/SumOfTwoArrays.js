const sumOfTwoArrays = (arr1, arr2, outputArr) => {
  let i = arr1.length - 1
  let j = arr2.length - 1
  let k = outputArr.length - 1
  let carry = 0

  while (k >= 0) {
    let sum = carry
    if (i >= 0) {
      sum += arr1[i]
    }

    if (j >= 0) {
      sum += arr2[j]
    }

    carry = sum / 10
    sum = sum % 10

    outputArr[k] = Math.floor(sum)

    i--
    j--
    k--
  }
}

const arr1 = [9, 7, 6, 1]
const arr2 = [4, 5, 9]
const outputArr = new Array(Math.max(arr1.length, arr2.length) + 1)

sumOfTwoArrays(arr1, arr2, outputArr)

console.log(outputArr)
