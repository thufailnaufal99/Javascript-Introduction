const printSegitiga = "enam"
let output = "";
if (typeof printSegitiga == "number") {
  for (let i = printSegitiga ; i > 0; i -= 1) {
    for (let j = 1; j <= i ; j += 1) {
      output += j;
    }
    output += "\n";
  }
  console.log(output)
}
else {
  console.log("Data harus number")
}


