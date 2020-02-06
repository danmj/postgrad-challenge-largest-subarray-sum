let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]

const largestSubarraySum = (array) => {
  const arrLength = array.length

  let currentSum = array[0]
  let largeSum = currentSum

  if (array.every(x => x < 0)) {
    return 0
  }

  for (let i = 1; i < arrLength; i++) {
      currentSum += array[i];
      if (array[i] > currentSum) {
          currentSum = array[i];
      }
      if (currentSum > largeSum) {
          largeSum = currentSum;
      }
  }
  return largeSum;

}


largestSubarraySum(array)
