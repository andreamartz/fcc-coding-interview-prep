// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference

// Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

function symdiff(arr1, arr2) {

  const resultSet = new Set();
  const checked = new Set();
  const arr1Set = new Set(arr1);
  const arr2Set = new Set(arr2);
  for (const el of arr1Set) {
    if (!checked.has(el)) {
      if (!arr2Set.has(el)) {
        resultSet.add(el);
      }
      checked.add(el);
    }
  }

  for (const el of arr2) {
    if (!checked.has(el)) {
      if (!arr1Set.has(el)) {
        resultSet.add(el);
      }
      checked.add(el);
    }
  }

  const resultArr = [...resultSet];
  return resultArr;
}

function sym(...args) {
  let result = args[0];
  for (let i = 1; i <= args.length - 1; i++) {
    result = symdiff(result, args[i]);
  }
  return result;
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));  // [3, 4, 5]

// REFACTOR:

function symdiff(arr1, arr2) {
  // create a set from elements in arr1 and call it resultSet
  const resultSet = new Set(arr1);
  const arr2Set = new Set(arr2);
  for (const el of arr2Set) {
    // if the element is in the result set, delete it
    if (resultSet.has(el)) {
      resultSet.delete(el);
    // otherwise add it
    } else {
      resultSet.add(el);
    }
  }

  const resultArr = [...resultSet];
  return resultArr;
}

function sym(...args) {
  let result = args[0];
  for (let i = 1; i <= args.length - 1; i++) {
    result = symdiff(result, args[i]);
  }
  return result;
}