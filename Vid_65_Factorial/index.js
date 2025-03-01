let a = 4;
function fac(number){
    let facnum = 1;
    for (let i = 1; i <= number; i++) {
        facnum = facnum*i;
        
    }
    return facnum;
}
console.log(fac(a))