/* Create a faulty calculator using javasccript


this faulty calculator does following:
1. It takes two numbers as input from the user
2. It performs wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times
*/

let random = Math.random();
console.log(random)

let a = prompt("Enter first Number");
let b = prompt("Enter second Number");
let c = prompt("Enter Operation");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}
if(random>0.1){
    //pedrform right operation
    alert(`The result is ${eval (`${a} ${c} ${b}`)}`)
}else{
    //perform wrong operation
    c = obj[c]
    alert(`The result is ${eval (`${a} ${c} ${b}`)}`)
}