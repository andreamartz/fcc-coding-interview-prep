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

// PLAN
// Create a lookup dictionary; keys are the values in the array / values are arrays containing the indices where the values occur
// Then, iterate through the array and find any pairs that add to the target sum

function pairwise(arr, targetSum) {
  const dict = {};
  let sum = 0;

  for (let i = 0; i <= arr.length - 1; i += 1) {
    // create a dictionary where the keys are the values in the array and the values are the indices where they occur
    dict[arr[i]] = dict[arr[i]] || [];
    dict[arr[i]].push(i);
  }
  for (let i = 0; i <= arr.length - 1; i += 1) {
    const current = arr[i];
    const complement = targetSum - current;

    // CASE 1: current equals complement
    if (current === complement) {
      // there must be at least two values in the array for dict[current] or dict[complement]
      if (dict[current]?.length > 2) {
        sum = sum + dict[current].shift() + dict[complement].shift();
        adjustDict(dict, current);
        adjustDict(dict, complement);
      }
      continue;
    }

    // CASE 2: current is not equal to complement
    if (dict[complement]?.length && dict[current]?.length) {
      sum = sum + dict[current].shift() + dict[complement].shift();
      adjustDict(dict, current);
      adjustDict(dict, complement);
    }
  }
  return sum;
}

function adjustDict(dict, val) {
  if (dict[val]?.length === 0) {
    delete dict[val];
  }
}

console.log("pairwise([1, 4, 2, 3, 0, 5], 7): ", pairwise([1, 4, 2, 3, 0, 5], 7));   // 11
console.log("pairwise([1, 3, 2, 4], 4): ", pairwise([1, 3, 2, 4], 4));     // 1
console.log("pairwise([1, 1, 1], 2): ", pairwise([1, 1, 1], 2));        // 1
console.log("pairwise([0, 0, 0, 0, 1, 1], 1): ", pairwise([0, 0, 0, 0, 1, 1], 1));   // 10
console.log("pairwise([], 100): ", pairwise([], 100));   // 0