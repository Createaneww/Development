// let obj = {
//     a: 1,
//     b:"Parth"
// }
// console.log(obj);

// let animal = {
//     eats: true
// }

// let rabbit = {
//     jumps: true
// }
// rabbit.__proto__ = animal


class Animal{
    constructor(name){
        this.name = name
        console.log("Obj created....");
        
    }
    eat(){
        console.log("Kha raha huu");  
    }
    jumps(){
        console.log("Kood raha huu");  
    }
    
}
class lion extends Animal{

}

let a = new Animal("Praful")
console.log(a)
let l = new lion("shera")
console.log(l);
