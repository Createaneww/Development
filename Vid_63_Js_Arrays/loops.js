let a = [1,2,3,44,3];

// for(let i = 0 ; i<a.length ; i++){
//     const elements = a[i]
//     console.log(elements)
// }

// a.forEach((value , index , arr)=>{
//         console.log(value , index , arr)
// })

// let obj = {
    //     a:0,
    //     b:2,
    //     c:3
    // }
// forin
    // for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(element)
//     }
// }

//forof
// for (const element of a) {
//     console.log(element)
// }


// maps

// le men method
let newArr = [];
for(let i = 0 ; i< a.length ; i++){
    const element = a[i];
    newArr.push(element**2);
}
console.log(newArr)

// pro method
let arr = a.map((e)=>{
    return e**2;
})
console.log(arr)