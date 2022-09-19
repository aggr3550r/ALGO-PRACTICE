function binarySearch(arr, value) {
  arr = arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (arr[middle] !== value) {
    if (arr[middle] < value) {
      left = middle + 1;
    } else if (arr[middle] > value) {
      right = middle - 1;
    }
    middle = Math.floor((left + right) / 2);
    if (left === right && arr[middle] !== value) {
      return -1;
    }
  }
  return middle;
}

console.log(binarySearch([1, 2, 3, 4, 67, 89, 90], 69)); //4
