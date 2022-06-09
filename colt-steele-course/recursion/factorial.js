function facI(num) {
  if (num === 0) return 1;
  return num * facI(num - 1);
}
console.log(facI(5));

function facII(num) {
  if (num === 1) return 1;
  return num * facII(num - 1);
}
console.log(facII(6));
