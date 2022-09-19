var isPalindrome = function (x) {
  if (x < 0) return false;
  var array_of_int = Array.from(x.toString()).map(Number);
  var n = array_of_int.length;
  var required_iterations = Math.floor(n / 2);
  for (var i = 0; i < required_iterations; i++) {
    var j = n - (i + 1);
    [array_of_int[i], array_of_int[j]] = [array_of_int[j], array_of_int[i]];
  }
  var reversed_integer = Number(array_of_int.join(""));
  return reversed_integer === x;
};
console.log(isPalindrome(10));
