// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
  for (let i = 0; i < A.length; i++) {
    if (A.filter((element) => element === A[i]).length % 2 !== 0)
    return A[i]
    }
}

// Otra forma para evitar la iteración repetitiva:

function findOdd(A) {
  let result

  new Set(A).forEach((item) => {
    if (A.filter((element) => element === item).length % 2 !== 0) {
      result = item
      return
    }
  })

  return result
}

// Mucho más simple, con el find:

function findOdd(A) {
  return A.find((item) => A.filter(element => element == item).length % 2)
}

console.log(findOdd([1,2,1,1,1]))
console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]))
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]))
console.log(findOdd([10]))
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]))
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]))