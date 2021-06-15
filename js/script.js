const parallax = document.getElementById("parallax");
window.addEventListener("scroll", function (){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.6 + "px";

})


const text = document.querySelector(".fancy")
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
}