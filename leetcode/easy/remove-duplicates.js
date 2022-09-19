function removeDuplicates(nums, val) {
  const valueExistsInArray = nums.includes(val);

  if (!valueExistsInArray) return [];

  nums.forEach((element, index) => {
    if (element === val) {
      nums.splice(index, 1);
    }
  });

  nums = nums.sort();

  return nums;
}

console.log(removeDuplicates([3, 2, 2, 3], 3));
