const isPalindrome = (x: number) => {
  if (x < 0) return false;

  const array_of_int = Array.from(x.toString()).map(Number);
  const n = array_of_int.length;
  const required_iterations = Math.floor(n / 2);

  for (let i = 0; i < required_iterations; i++) {
    const j = n - (i + 1);

    [array_of_int[i], array_of_int[j]] = [array_of_int[j], array_of_int[i]];
  }

  const reversed_integer = Number(array_of_int.join(""));

  return reversed_integer === x;
};

console.log(isPalindrome(121));
