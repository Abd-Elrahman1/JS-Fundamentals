const args = process.argv.slice(2); // Remove the first two default elements

if (Number(args[0])) {
  let size = Math.floor(Number(args[0]));

  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
      row += "X";
    }
    console.log(row);
  }
} else {
  console.log("Missing size");
}
