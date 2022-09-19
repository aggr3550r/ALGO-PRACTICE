function twoSum(arr, target) {
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = i;
  }

  for (let i = 0; i < arr.length; i++) {
    var complement = target - arr[i];

    if (complement in map && map[complement] !== i) {
      return [i, map[complement]];
    }
  }
}
