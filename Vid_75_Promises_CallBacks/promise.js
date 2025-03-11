console.log("This is Promises");

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("No random number is supported you")
    } else {
        setTimeout(() => {
            console.log("Yes i am done");
            resolve("Manvar")
        }, 1000)

    }
})
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("No random number is supported you 2")
    } else {
        setTimeout(() => {
            console.log("Yes i am done 2");
            resolve("Manvar 2")
        }, 1000)

    }
})

let p3 = Promise.allSettled([prom1 , prom2])

p3.then((a) => {
    console.log(a);
}).catch((err) =>{
    console.log(err)
})
