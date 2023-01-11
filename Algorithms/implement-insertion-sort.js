// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-insertion-sort

// Implement Insertion Sort
// The next sorting method we'll look at is insertion sort. This method works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end. This algorithm has quadratic time complexity in the average and worst cases.

// Instructions: Write a function insertionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

// Tests
// Passed:insertionSort should be a function.
// Failed:insertionSort should return a sorted array (least to greatest).
// Passed:insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]) should return an array that is unchanged except for order.
// Failed:insertionSort([5, 4, 33, 2, 8]) should return [2, 4, 5, 8, 33].
// Passed:insertionSort should not use the built-in .sort() method.

// Edge cases:


// Plan:


function insertionSort(array) {
  for (let i = 1; i < array.length; i += 1) {
    for (let j = i; j > 0; j -= 1) {
      if (array[j] < array[j - 1]) {
        [array[j - 1], array[j]] = [array[j], array[j - 1]];
      } else {
        break;
      }
    }
  }
  return array;
}