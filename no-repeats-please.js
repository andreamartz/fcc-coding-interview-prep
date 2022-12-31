// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/no-repeats-please

// Return the number of total permutations of the provided str that don't have repeated consecutive letters. Assume that all characters in the provided str are each unique.

// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

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
