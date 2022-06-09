function sumI(arr) {
  if (arr.length === 1) return arr[0];
  return arr[0] + sumI(arr.splice(1));
}
console.log(sumI([2, 4, 6, 10]));

function sumII(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumII(arr.splice(1));
}
console.log(sumII([2, 3, 4]));
