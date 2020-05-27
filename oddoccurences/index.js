// A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

// For example, in array A such that:

//   A[0] = 9  A[1] = 3  A[2] = 9
//   A[3] = 3  A[4] = 9  A[5] = 7
//   A[6] = 9
// the elements at indexes 0 and 2 have value 9,
// the elements at indexes 1 and 3 have value 3,
// the elements at indexes 4 and 6 have value 9,
// the element at index 5 has value 7 and is unpaired.
// Write a function:

// function solution(A);

// that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

// For example, given array A such that:

//   A[0] = 9  A[1] = 3  A[2] = 9
//   A[3] = 3  A[4] = 9  A[5] = 7
//   A[6] = 9
// the function should return 7, as explained in the example above.

// Write an efficient algorithm for the following assumptions:

// N is an odd integer within the range [1..1,000,000];
// each element of array A is an integer within the range [1..1,000,000,000];
// all but one of the values in A occur an even number of times.


function solution(A) {
  // first sort the array
  let sorted = A.sort()
  // variable to hold the length of the array
  let len = sorted.length
  // variable to hold the correct number that occurs once
  let num = null
  // iterate through the array
  // standard for loop setup until the i+=2
  // this is dones because we know the sorted array will have
  // the pairs next to each other, we can iterate by 2s
  for (let i = 0; i < len; i+=2) {
  // if the array at index i doesnt equal the next element in the array it doesnt have a pair
      if (sorted[i] != sorted[i + 1]) {
  // set the num to the array at index i
          num = sorted[i]
  // end the for loop
          break
      }
  }
  // return the num
  return num
}