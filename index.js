function sumItems(array) {
  // Sum all the numbers in the array
  let sum = 0;

  array.forEach((item) => {
    // there can be nested arrays

    // recursive case: if there is an array recursion
    if (Array.isArray(item)) {
      // sumItems is going to keep happening until it reaches the inner most item
      sum += sumItems(item);
    } else {
      sum += item;
    }
    // base case: have a number return it
    
  });

  return sum;
  
  
  
}

module.exports = sumItems;