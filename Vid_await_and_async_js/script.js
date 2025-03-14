// async function getData(){
//     return new Promise((resolve , reject) =>{
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

/* Promise ka Settle means 
    Resolve or Reject
 */


async function getData(){
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')  //network se aya data
    let data = await x.json() // data chunks me aya json me parse hua
      console.log(data)
}
async function main(){

    console.log("Loading Modules");
    
    
    console.log("Do something esle");
    
    console.log("Load data");
    
    let data = await getData()  //await nhi karoge to promise aajyengi
    console.log(data);

    console.log("task2");
    
    console.log("Process data");
    
}
main()
// data.then((v)=>{

//     console.log("task2");
    
//     console.log("Process data");
    
// })


