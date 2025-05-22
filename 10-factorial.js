const args = process.argv.slice(2); // Remove the first two default elements
let f = 1;
let num = Math.floor(Number(args[0]));

function factorial(n) {
  n = parseInt(n);
  if (isNaN(n)) {
    return 1;
  } else if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(num));
