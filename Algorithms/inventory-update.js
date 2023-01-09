// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update

// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

function updateInventory(curInv, newInv) {
  // iterate over items in newInv
  for (const newInvArr of newInv) {
    const newInvItem = newInvArr[1];
    const newInvItemQty = newInvArr[0];
    let found = false;
    for (const curInvArr of curInv) {
      // if item in curInv, update the quantity
      const curInvItem = curInvArr[1];
      // console.log(curInvItem, curInvItem.toLowerCase());
      // if (curInvItem.toLowerCase() === newInvItem.toLowerCase()) {
      if (curInvItem === newInvItem) {
        console.log("The items are the same");
        curInvArr[0] += newInvItemQty;
        console.log(curInv);
        found = true;
      }
    }
    // item not found in curInv; add the item and quantity
    if (!found) {
      console.log("Adding the item");
      curInv.push([newInvItemQty, newInvItem]);
      console.log(curInv);
    }
  }
  // sort curInv by product
  curInv.sort((a, b) => {
    const itemA = a[1].toLowerCase();
    const itemB = b[1].toLowerCase();
    if (itemA < itemB) {
      return -1;
    }
    if (itemA > itemB) {
      return 1;
    }
    return 0;
  });
  console.log("CURINV: ", curInv);
  return curInv;
}


// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));