function linearSearch(set, target) {
  for (let i = 0; i < set.length; i++) {
    if (set[i] === target) return i;
  }
  return -1;
}
