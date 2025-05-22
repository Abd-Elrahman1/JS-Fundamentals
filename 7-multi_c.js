const args = process.argv.slice(2); // Remove the first two default elements
let nums;

if (Number(args[0])) {
  nums = Math.floor(Number(args[0]));
  for (let i = 0; i < nums; i++) {
    console.log("C is fun");
  }
} else {
  console.log("Missing number of occurrences");
}
