const args = process.argv.slice(2); // Remove the first two default elements

if (Number(args[0])) {
  console.log(`My number: ${Math.floor(Number(args))}`);
} else {
  console.log("Not a number");
}
