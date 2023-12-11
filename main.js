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

let poderes = document.querySelectorAll('.habilidades-caro .poder');
let proximo = document.getElementById('proximo');
let antes = document.getElementById('antes');

let comeco = 1;

function carregar() {
    let status = 0;

    poderes[comeco].style.transform = `none`;
    poderes[comeco].style.zIndex = 1;
    poderes[comeco].style.filter = 'none';
    poderes[comeco].style.opacity = 1;

    for (var i = comeco + 1; i < poderes.length; i++) {
        status++;
        poderes[i].style.transform = `translateX(${120 * status}px) scale(${1 - 0.2 * status}) perspective(16px) rotateY(-1deg)`;
        poderes[i].style.zIndex = -status;
        poderes[i].style.filter = 'blur(5px)';
        poderes[i].style.opacity = status > 2 ? 0 : 0.6;
    }

    status = 0;

    for (var i = comeco - 1; i >= 0; i--) {
        status++;
        poderes[i].style.transform = `translateX(${-120 * status}px) scale(${1 - 0.2 * status}) perspective(16px) rotateY(1deg)`;
        poderes[i].style.zIndex = -status;
        poderes[i].style.filter = 'blur(5px)';
        poderes[i].style.opacity = status > 2 ? 0 : 0.6;
    }
}

carregar();

proximo.onclick = function() {
    comeco = comeco + 1 < poderes.length ? comeco + 1 : comeco;
    carregar();
};

antes.onclick = function() {
    comeco = comeco - 1 >= 0 ? comeco - 1 : comeco;
    carregar();
};
