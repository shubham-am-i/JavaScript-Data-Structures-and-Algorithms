const frequencyCounter = (arr) => {
  let eleMap = {}

  for (const element of arr) {
    eleMap[element] ? eleMap[element]++ : (eleMap[element] = 1)
  }
  console.log(eleMap)
}

const arr = [1, 2, 2, 3, 4, 5, 6, 6]
frequencyCounter(arr)
