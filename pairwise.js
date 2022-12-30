// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/pairwise

// Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

// You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.

// For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

// Index	| 0	| 1	|  2	|  3	|  4 |
// Value	| 7	| 9	| 11	| 13	| 15 |
// Below we'll take their corresponding indices and add them.

// 7 + 13 = 20 → Indices 0 + 3 = 3
// 9 + 11 = 20 → Indices 1 + 2 = 3
// 3 + 3 = 6 → Return 6

function pairwise(arr, targetSum) {
  const dict = {};
  let sum = 0;

  for (let i = 0; i <= arr.length - 1; i += 1) {
    // if (dict.hasOwnProperty(arr[i])) {
    //   dict[arr[i]].push(i);
    // } else {
    //   dict[arr[i]] = [i];
    // }

    // create a dictionary where the keys are the values in the array and the values are the indices where they occur
    dict[arr[i]] = dict[arr[i]] || [];
    dict[arr[i]].push(i);
  }
  for (let i = 0; i <= arr.length - 1; i += 1) {
    const complement = targetSum - arr[i];
    if (dict[complement]) {
      sum = sum + i + dict[complement].shift();
      dict[arr[i]].unshift();
    }
    if (dict[complement].length === 0) {
      delete dict[complement];
    }
    if (dict[arr[i]].length === 0) {
      delete dict[arr[i]];
    }
  }
  return sum;
}

// function pairwise(arr, targetSum) {
//   arr.sort((a, b) => a - b);
//   // if (!arr.length || arr.length === 1) {
//   //   return 0;
//   // }
//   let ptr1 = 0;
//   let ptr2 = arr.length - 1;
//   let sumOfIndices = 0;

//   while (ptr1 < ptr2) {
//     if (arr[ptr2] === arr[ptr2 - 1]){
//       ptr2 -= 1;
//       continue;
//     }
//     if (arr[ptr1] + arr[ptr2] > targetSum) {
//       ptr2 -= 1;
//     }
//     if (arr[ptr1] + arr[ptr2] < targetSum) {
//       ptr1 += 1;
//     }
//     if (arr[ptr1] + arr[ptr2] === targetSum) {
//       sumOfIndices = sumOfIndices + ptr1 + ptr2;
//       ptr1 += 1;
//       ptr2 -= 1;
//     }
//   }
//   return sumOfIndices;
// }

pairwise([1,4,2,3,0,5], 7);