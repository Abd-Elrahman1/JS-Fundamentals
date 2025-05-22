const args = process.argv.slice(2); // Remove the first two default elements

function add(a, b) {
  return a + b;
}

arg1 = Number(args[0]);
arg2 = Number(args[1]);

console.log(add(arg1, arg2));
