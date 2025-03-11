console.log("Parth is a Hacker")
console.log("Aditiya is a Hecker")

setTimeout(() =>{
    console.log("I am inside Set time Out")
} , 2000)

console.log("Praful is pagal")

const callback = (arg) => {
  console.log(arg)
}

const loadscript = (src  , callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Harry");
  document.head.append(sc)
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js" , callback)