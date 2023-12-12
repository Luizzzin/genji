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

// Pega o elemento canvas do HTML
let canvas = document.getElementById("desenhar");

// Pega o contexto de desenho 2D do canvas
let contexto = canvas.getContext("2d");

// Variável para identificar se estamos desenhando
let desenhando = false;

// Largura inicial do pincel
let larguraPincel = 2;

// Referência ao elemento de largura no HTML
let largura = document.getElementById("largura");

// Atualiza o conteúdo do elemento de largura
largura.value = larguraPincel;

// Define a cor padrão do pincel
let corPincel = "black";

// Adiciona eventos de mouse para detectar cliques, movimentos e solturas do mouse
canvas.addEventListener("mousedown", function (event) {
    desenhando = true;
    contexto.beginPath();
    contexto.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
});

canvas.addEventListener("mousemove", function (event) {
    if (desenhando) {
        contexto.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        contexto.stroke();
    }
});

canvas.addEventListener("mouseup", function () {
    desenhando = false;
});

// Adiciona evento de mudança para a largura do pincel
largura.addEventListener("input", function () {
    larguraPincel = parseInt(largura.value);
    contexto.lineWidth = larguraPincel;
});

// Adiciona evento de mudança para a cor do pincel
document.getElementById("inputColor").addEventListener("input", function () {
    corPincel = document.getElementById("inputColor").value;
    contexto.strokeStyle = corPincel;
});

// Função para aumentar a largura do pincel
function maisLargura() {
    larguraPincel++;
    contexto.lineWidth = larguraPincel;
    largura.value = larguraPincel;
}

// Função para diminuir a largura do pincel
function menosLargura() {
    larguraPincel--;
    contexto.lineWidth = larguraPincel;
    largura.value = larguraPincel < 1 ? 1 : larguraPincel;
}

