let a = prompt("Enter your first No")
let b = prompt("Enter your Second No")
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}
let sum = parseInt(a)+parseInt(b);


function main(){
let z = 1
    try {   //try catch sync kaam karte he to async func jaise settime agar try me hoo to catch kaam nhi karega
        console.log("Sum is" , sum*z);
        return true
    } catch (error) {
        console.log("Error aa gaya Bai");
        return false
    }
    finally{   // return ke baad bhi finally ka code chal jata he 
        console.log("Files have been closed , DB connetion also been closed");
        
    }
    
}
 main()