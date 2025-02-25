/*
Adjectives:
Crazy
Amazing
Fire

Shop Name:
Engine
Foods
Garment


Another Word
Bros
Limited
HUb
 */

console.log("Business name generator")

function choose_name(adj , shop_name , another_word){
    console.log(adj ,"" + shop_name ,"" + another_word)
}

let random = Math.random()
console.log(random)
if(random < 0.33){
    choose_name("Crazy", "Engine" , "Bros")
}else if(0.33 < random && random < 0.66){
    choose_name("Amzing" , "Foods" , "Limited")
}else if(0.66 < random && random < 1){
    choose_name("Fire" , "Garment" , "Hub")
}