var botao = document.getElementById('botao')

function abrir() {
    var minhaDiv = document.getElementById("minhaDiv");
    if (minhaDiv.style.display === "none") {
        minhaDiv.style.display = "flex";
        botao.style.display = "none"

    } else {
        minhaDiv.style.display = "none";
        botao.style.display = "block";
    }
}

// ------------//

let items = document.querySelectorAll('.habilidades-caro .poder');
let next = document.getElementById('proximo');
let prev = document.getElementById('antes');

let active = 1;

function loadShow() {
    let stt = 0;

    items[active].style.transform = `none`;
    items[active].style.zIndex = 2;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    for (let i = active + 1; i < items.length; i++) {
        stt--;
        items[i].style.transform = `translateX(${105 * stt}px) scale(${1 - 0.2 * Math.abs(stt)}) perspective(20px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.9;
    }

    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
        stt--;
        items[i].style.transform = `translateX(${-105 * stt}px) scale(${1 - 0.2 * Math.abs(stt)}) perspective(20px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 1 ? 0 : 0.9;

    }
}

loadShow();

next.onclick = function () {
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
}

prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}
// ------ desenho agr

