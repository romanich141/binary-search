// Import stylesheets
import './style.css';

// generate SORT data
const arr = [...Array(100)].map((_, i) => ++i);

const binarySearch = (target, array = arr) => {
  let right = array.length - 1;
  let left = 0;

  // with cycle for
  for (let i = left; i <= right; i++) {
    let middle = Math.round((right - left) / 2) + left;

    if (array[middle] === target) {
      return middle;
    } else if (target > array[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  // with cycle while
  // while (left <= right) {
  //   let middle = Math.round((right - left) / 2) + left;

  //   if (array[middle] === target) {
  //     return middle;
  //   } else if (target > array[middle]) {
  //     left = middle + 1;
  //   } else {
  //     right = middle - 1;
  //   }
  // }

  return -1;
};

console.log({ searchedIndex: binarySearch(9) });
