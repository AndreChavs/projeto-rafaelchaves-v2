var agora = new Date();
var circle = document.getElementsByClassName('circle')[0];
var txt = document.getElementsByClassName('txt')[0];
addEventListener('load', function() {    
    let diaSem = agora.getDay();
    let hora = agora.getHours();
    let min = agora.getMinutes();
    
    if (diaSem > 0 && diaSem < 6) {
        if ((hora >= 18 && min > 0) || (hora < 9)) {
            circle.style.background = `#E60000`;
            txt.innerText = `Fechado`;
        } else {
            circle.style.background = `#20B720`
            txt.innerText = `Aberto`;
        }
    }else{
        circle.style.background = `#E60000`;
        txt.innerText = `Fechado`;
    }
})