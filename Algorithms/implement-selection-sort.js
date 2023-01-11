// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-selection-sort

// Implement Selection Sort
// Here we will implement selection sort. Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element. It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted. Selection sort has quadratic time complexity in all cases.

// Instructions: Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

// Tests
// Waiting:selectionSort should be a function.
// Waiting:selectionSort should return a sorted array (least to greatest).
// Waiting:selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]) should return an array that is unchanged except for order.
// Waiting:selectionSort should not use the built-in .sort() method.

// Edge cases:

// Plan:

function selectionSort(array) {
  for (let i = 0; i < array.length; i += 1) {
    let idxOfMin = i;
    let makeSwitch = false;
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[j] < array[idxOfMin]) {
        idxOfMin = j;
        makeSwitch = true;
      }
    }
    if (makeSwitch) {
      [array[i], array[idxOfMin]] = [array[idxOfMin], array[i]];
    }
  }
  return array;
}