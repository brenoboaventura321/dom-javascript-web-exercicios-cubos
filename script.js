const texto = document.querySelector('.texto p');

const tamanhoDaFonte = document.querySelector('.indica-tamanho');

let conta = 20;

texto.style.fontSize = `${conta}px`;

tamanhoDaFonte.textContent = conta;

const buttonTracado = document.querySelectorAll('button')[0];

const buttonItalico = document.querySelectorAll('button')[1];

const buttonNegrito = document.querySelectorAll('button')[2];


const buttonMenos = document.querySelectorAll('button')[3];

const buttonMais = document.querySelectorAll('button')[4];

const buttonRed = document.querySelector('#red');
const buttonBlue = document.querySelector('#blue');
const buttonPurple = document.querySelector('#purple');
const buttonBlack = document.querySelector('#black');


function estiloTracado(){
    if (texto.style.textDecoration === 'underline') {
        texto.style.textDecoration = 'none';
    }
    else {
        texto.style.textDecoration = 'underline';
    }
}

function estiloItalico(){
    if (texto.style.fontStyle === 'italic') {
        texto.style.fontStyle = 'normal';
    }
    else {
        texto.style.fontStyle = 'italic';
    }
}

function estiloNegrito(){
    if (texto.style.fontWeight === 'bold'){
        texto.style.fontWeight = 'normal';
    }else {
        texto.style.fontWeight = 'bold';
    }
}

function diminuirTamanho(){
   if (conta >= 13) {
    conta = conta - 2;
    texto.style.fontSize = `${conta}px`;
    tamanhoDaFonte.textContent = conta;
    }
}

function almentaTamanho(){
    conta = conta + 1;
    texto.style.fontSize = `${conta}px`;

    tamanhoDaFonte.textContent = conta;
}

function tornarVermelho(){
    texto.style.color = 'red';
}
function tornarAzul(){
    texto.style.color = 'blue';
}
function tornarRoxo(){
    texto.style.color = 'purple';
}
function tornarPreto(){
    texto.style.color = 'black';
}

buttonTracado.onclick = estiloTracado;

buttonItalico.onclick = estiloItalico;

buttonNegrito.onclick = estiloNegrito;

buttonMenos.onclick = diminuirTamanho;

buttonMais.onclick = almentaTamanho;

buttonRed.onclick = tornarVermelho;
buttonBlue.onclick = tornarAzul;
buttonPurple.onclick = tornarRoxo;
buttonBlack.onclick = tornarPreto;