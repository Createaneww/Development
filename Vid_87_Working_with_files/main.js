//commonjs me 
const fs = require("fs")
console.log("Starting");

// fs.writeFileSync("Parth.txt" , "Parth is a good boy")
fs.writeFile("parth2.txt" , "I am Vibrant" , ()=>{
    console.log("Done");
    fs.readFile("parth2.txt" , (error , data)=>{
        console.log(error , data.toString());
        
    })
})

fs.appendFile("parth2.txt" , "Namaskaram" , (error , data)=>{
    console.log(data);
})
console.log("Ending");
