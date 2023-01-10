// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/no-repeats-please

// Return the number of total permutations of the provided str that don't have repeated consecutive letters. Assume that all characters in the provided str are each unique.

// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

// SOLUTION 1:
function findAllPermutations(str) {
  if (str.length === 1) {
    return str;
  }

  let allPermutations = [];
   
  for (let i = 0; i < str.length; i++){
    let char = str[i];

    let remainingChars = str.slice(0, i) + str.slice(i + 1, str.length);

    for (let permutation of findAllPermutations(remainingChars)) {
      allPermutations.push(char + permutation);
    }
  }
  return allPermutations;
}

// count the permutations with no repeats
function permAlone(str) {
  const allPermutations = findAllPermutations(str);
  let noRepeats = 0;
  for (const permutation of allPermutations) {
    let validPermutation = true;
    for (let i = 0; i < permutation.length - 1; i += 1) {
      if (permutation[i] === permutation[i + 1]) {
        validPermutation = false;
        break;
      }
    }
    if (validPermutation) {
      noRepeats += 1;
    }
  }
  return noRepeats;
}

console.log("permAlone('aab'): ", permAlone('aab'));  // 2
console.log("permAlone('aaa'): ", permAlone('aaa'));  // 0
console.log("permAlone('aabb'): ", permAlone('aabb'));  // 8
console.log("permAlone('abcdefa'): ", permAlone('abcdefa'));  // 3600
console.log("permAlone('abfdefa'): ", permAlone('abfdefa'));  // 2640
console.log("permAlone('zzzzzzzz'): ", permAlone('zzzzzzzz'));  // 0
console.log("permAlone('a'): ", permAlone('a'));  // 1
console.log("permAlone('aaab'): ", permAlone('aaab'));  // 0 
console.log("permAlone('aaabb'): ", permAlone('aaabb'));  // 12

// SOLUTION 2:
function permAlone2(str) {
  // create variable allPermutations, an array to hold all the permutations
  const allPermutations = [];

  // BASE CASES
    // str is an empty string; 
  if (str.length === 0) {

  }
    // str is a string of length 1; return str
  if (str.length === 1) {
    return str;
  }

  // RECURSIVE CASE
  // iterate over the string
  for (let i = 0; i < str.length; i += 1) {
    // for each iteration, create two new variables:
      // 1. currChar - the current character
      // 2. remaining Chars - a string containing all the other characters
    const currChar = str[i];
    const remainingChars = str.slice(0,i) + str.slice(i);

    // make all possible permutations with the currChar as the first character (done recursively); push each one onto the allPermutations array
    let permutation = currChar + permAlone(remainingChars);
    allPermutations.push(permutation);
  }
  
  // count the permutations that do not have repeated consecutive letters
  // let noRepeats = 0;
  for (let i = 0; i < allPermutations.length; i += 1) {
    
  }
}

console.log("permAlone2('aab'): ", permAlone2('aab'));  // 2
console.log("permAlone2('aaa'): ", permAlone2('aaa'));  // 0
console.log("permAlone2('aabb'): ", permAlone2('aabb'));  // 8
console.log("permAlone2('abcdefa'): ", permAlone2('abcdefa'));  // 3600
console.log("permAlone2('abfdefa'): ", permAlone2('abfdefa'));  // 2640
console.log("permAlone2('zzzzzzzz'): ", permAlone2('zzzzzzzz'));  // 0
console.log("permAlone2('a'): ", permAlone2('a'));  // 1
console.log("permAlone2('aaab'): ", permAlone2('aaab'));  // 0 
console.log("permAlone2('aaabb'): ", permAlone2('aaabb'));  // 12