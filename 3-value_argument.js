const args = process.argv.slice(2); // Remove the first two default elements

if (args.length === 0) {
  console.log("no argument");
} else {
  console.log(args[0]);
}
