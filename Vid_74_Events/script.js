let button = document.getElementById("btn")
button.addEventListener("dblclick" , () =>{
    document.querySelector(".box").innerHTML = "<b> YEEEEEE YOUR WERE CLICKED</b>"
})
button.addEventListener("contextmenu" , () =>{
    alert("Dont press right click")
})