function createCard(title, cName, views, monthsOld, duration, thumbnail){
    // Finish this function
    let viewstr
if(views<1000000){
     viewstr = views/1000 + "K"
}else if(views>1000000){
     viewstr = views/1000000 + "M"
}
else{
    viewstr = views/1000 + "K"
}


     html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="CAPSULE">${duration}</div>
            </div>
            <div class="text">
                <h1>
                    ${title}
                </h1>
                <p>
                    ${cName} . ${viewstr} views . ${monthsOld} months ago
                </p>
            </div>
        </div>`

        document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}


createCard("Introduction to Backend | Sigma Web Dev video #45", "CodeWithHarry", 56000000, 7, "11:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")