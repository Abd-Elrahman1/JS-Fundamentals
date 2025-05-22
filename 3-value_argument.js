const args = process.argv.slice(2); // Remove the first two default elements

if (args[0] === undefined) {
  console.log("No argument");
} else {
  console.log(args[0]);
}
