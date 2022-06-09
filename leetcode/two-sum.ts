// const mapIndices = (source_arr: number[], dest_arr: number[]): number[] => {
//   const mapped_indices = [];
//   console.log("source_arr:", source_arr);
//   source_arr.forEach((elem) => {
//     let index_of_elem = dest_arr.indexOf(elem);
//     mapped_indices.push(index_of_elem);
//     //filter out already mapped indices in case of duplicates
//     delete dest_arr[dest_arr.indexOf(elem)];
//   });
//   return mapped_indices;
// };

// const twoSum = (arr: number[], target: number): number[] => {
//   const unsorted_array = [];
//   unsorted_array.push(...arr);
//   arr.sort((a, b) => a - b);
//   const excess = arr.find((x) => x > target);
//   if (excess) {
//     const excess_count = arr.length - arr.indexOf(excess);
//     arr.splice(arr.indexOf(excess), excess_count);
//   }
//   let start = 0,
//     end = arr.length - 1;
//   while (start < end) {
//     let sum = arr[start] + arr[end];
//     if (sum === target) {
//       return mapIndices([arr[start], arr[end]], unsorted_array);
//     } else if (sum > target) {
//       end--;
//     } else start++;
//   }
//   return null;
// };

// console.log(twoSum([3, 3], 6));

const twoSum = (arr, target) => {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = i;
  }

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (complement in map && map[complement] != i) {
      return [i, map[complement]];
    }
  }
};

console.log(twoSum([3, 3], 6));
