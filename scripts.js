//Exemplo de Modelo de Botão com acionamento em Java Script:

document.getElementById('myButton').addEventListener('click', function () {
    alert('Botão Clicado!');
})

//Exemplo de Variável do Tipo Object (Date):

let minhaDataDeNAscimento = new Date(1969, 0, 24);
console.log(minhaDataDeNAscimento); //object
console.log(typeof minhaDataDeNAscimento);

//Exemplos de Tipos de Variáveis Primitivas:

let minhaIdade = 30; //number
console.log(typeof minhaIdade);

let meuNome = "João"; //string
console.log(typeof meuNome);

let souEstudante = true; //boolean
console.log(typeof souEstudante);

let valorNulo = null; //null também vale como object
console.log(typeof valorNulo);

let valorIndefinido;
console.log(typeof valorIndefinido);

//Exemplos de casos de uso do método Math:

raizQuadrada = Math.sqrt(16);
console.log(raizQuadrada);

expoentePotencia = Math.pow(3, 3);
console.log(expoentePotencia);

raizCubicaComExpoente = Math.pow(27, 1 / 3);
console.log(raizCubicaComExpoente);

//Estrutura de Controle - Condicionais: if, else if, else e switch

let idade = 15;

if (idade >= 18) {
    console.log('Você pode votar');
}
else if (idade == 17) {
    console.log('Você poderá votar no próximo ano');
}
else {
    console.log('Você ainda não pode votar');
}

//switch - testando os dias da semana:

let dia = 7;
switch (dia) {
    case 1:
        console.log('Domingo');
        alert('Pé de Cachimbo!');
        break;
    case 2:
        console.log('segunda-feira');
        break;
    case 3:
        console.log('terça-feira');
        break;
    case 4:
        console.log('quarta-feira');
        break;
    case 5:
        console.log('quinta-feira');
        break;
    case 6:
        console.log('sexta-feira');
        break;
    case 7:
        console.log('sábado');
        break;
    default:
        console.log('Dia inválido');
        alert('Dia INVÁLIDO, Seu Corno!');
}

//Estrutura de Controle - Loop: for, while e do... while

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(' ');

let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

console.log(' ');

let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);

console.log(' ');

//=================Exemplo de uso de LOOP com FOR IN e FOR OF===================================

const myCar = {
    model: 'BMW',
    color: 'White',
    year: 2023
}
for (let i in myCar)
    console.log(1, myCar[i]);

console.log(' ');

const friends = ['José', 'Maria', 'João'];
for (let i of friends)
    console.log(i);

//=============================================================================================

console.log(' ');

let a = 2; //variável do tipo int
let b = "3"; //vatiável do tipo string
c = a + b; //neste caso, ocorre uma operação de CONCATENAÇÃO por envolver variáveis de tipo int + string
console.log(c);

console.log(' ');

let d = 2; //variável do tipo int
let e = "3"; //vatiável do tipo string
f = d + parseInt(e); //neste caso ocorreu a SOMA, pois a variável "e" (string) foi convertida em tipo int
console.log(f);

console.log(' ');

for (let n = 1; n < 11; n++) {
    console.log(n);
}

console.log(' ');

let m = 1;
while (m < 11) {
    console.log(m);
    m++;
}

console.log(' ');

//Exemplo de operador TERNÁRIO com uso de '?' e ':'

let driver = 90;
let speed = driver > 100 ? 'Acima da Velocidade' : 'Abaixo da Velocidade';
console.log(speed);

console.log(' ');

//============================ ESTUDO DE FUNÇÕES ======================================

//Estrutura Básica de uma Função

function saudacao(nome) {
    console.log('Olá, ' + nome);
}
saudacao('Elan Deol!');

console.log(' ');

//Exemplo de Função de Alta Ordem usando map() como método de retorno de array

const numeros = [1, 2, 3, 4, 5];
const quadrados = numeros.map(function (n) {
    return n * n;
})
console.log(quadrados);

console.log(' ');

//Exemplo de Função de Callback

function cumprimentar(Callback) {
    console.log('Olá,');
    Callback();
}
function dizerNome() {
    console.log('João!');
}
cumprimentar(dizerNome);

//=====================================================================================

//Exercícios:

console.log(' ');

function soma(num1, num2) {
    return num1 + num2;
}
let result = soma(2, 3);
console.log(result);

console.log(' ');

function parOuImpar(num) {
    if (num % 2 == 0) {
        console.log('Número Par');
    }
    else
        console.log('Número Ímpar');
}
parOuImpar(102);

console.log(' ');

function contagemRegressiva(num) {
    for (let i=num; i>=0;i--) {
        console.log(i);
    }
}
contagemRegressiva(15);

console.log(' ');

