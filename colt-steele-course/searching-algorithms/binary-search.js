function binarySearch(arr, target) {
  arr = arr.sort((a, b) => a - b);
  let start = 0,
    end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (arr[mid] !== target) {
    if (target > arr[mid]) {
      start = mid + 1;
    }
    if (target < arr[mid]) {
      end = mid - 1;
    }
    mid = Math.floor((start + end) / 2);
    if (start === end && arr[mid] !== target) {
      return -1;
    }
  }
  return mid;
}

console.log(binarySearch([1, 2, 3, 4, 6, 7], 5));
