// let ele = document.getElementsByClassName("box")
// console.log(ele)

// ele[2].style.backgroundColor = "red"

// document.getElementById("red").style.backgroundColor = "red"

document.querySelector(".box").style.backgroundColor = "Yellow"  // phela box karega bas


document.querySelectorAll(".box").forEach(e =>{  //sabka ek sath karega
    e.style.backgroundColor = "brown";
})