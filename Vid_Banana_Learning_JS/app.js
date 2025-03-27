// //input
// var username = prompt("Enter your name")

// //processing this scripts works
// var welcomeMessage = "this scripts works!!!" + username

// //output
// alert(welcomeMessage)
var btntranslate = document.querySelector("#btn-translate")
var txtinput = document.querySelector("#txt-input")
var outputdiv = document.querySelector("#output-box")

function clickEventHandker(){
    outputdiv.innerText = "uaksuduf aoiseeff" + txtinput.value
}
btntranslate.addEventListener("click" , clickEventHandker)
