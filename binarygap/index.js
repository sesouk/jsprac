// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

// For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

// Write a function:

// function solution(N);

// that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..2,147,483,647].


function solution(N) {
  // turn the number into a string of binary digits
  let str = N.toString(2)
  // create a variable to count the amount of times a 0 shows up
  let count = 0
  // create a variable to hold the max number of 0s
  let maxCount = 0
  // iterate through the str of binary digits
  for (let x of str) {
  // start counting zeroes
      if (x === '0') {
          count += 1
  // once a 1 is found we set the result to whatever is greater between maxCount and count
  // we also reset the counter for the next loop
      } else {
          result = Math.max(maxCount, count)
          count = 0
      }
  }
  // return the max 0 count
  return maxCount
}