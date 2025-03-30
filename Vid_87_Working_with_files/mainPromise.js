import fs from "fs/promises"  //module me


let a = await fs.readFile("Parth.txt")
let b = await fs.appendFile("Parth.txt" , "\n\n\nHe is handsome")
console.log(a.toString() , b);
