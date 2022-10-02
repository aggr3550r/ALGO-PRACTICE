function binarySearch(nums, target) {
  nums = nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (left <= right) {
    if (nums[middle] == target) {
      return middle;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else if (nums[middle] > target) {
      right = middle - 1;
    }

    middle = Math.floor((left + right) / 2);
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 6, 10, 45], 10));
