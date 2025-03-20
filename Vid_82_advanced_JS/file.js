//chapter 12
// IIFE  immedaitily invoked func
async function sleep() {
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 2000);
    })
}
function sum(a,b,c){
    return a+b+c
}
(async function main(){   //iife
    // let a  = await sleep()
    // console.log(a);
    // let b = await sleep()
    // console.log(b);



    // let [x,y , ...rest] = [1,2 , 10,28,12] //destrucing arr
    // console.log(x,y , rest);
    

    // let obj = { //destructuring obj
    //     a:1,
    //     b:21
    // }
    // let {a,b} = obj;
    // console.log(a,b);
    
    let arr = [1,2,3]
    console.log(sum(arr[0] , arr[1], arr[2]));
    console.log(sum(...arr))  //...arr ka matlab arr ko khol do ... = spread operator

})()