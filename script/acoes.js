
var resp = window.document.getElementById("saida");
    
function acao1() {
    resp.innerHTML += "<P>Você clicou no botão 1</P>";

    var a = prompt("Digite um número");
    if (a != "6") {
        resp.innerHTML += "<h1 style='color: red;'>Diferente de 6</h1>";
    } else {
        resp.innerHTML += "<h1 style='color: green;'>Igual a 6</h1>";
    }
}

function acao2() {
resp.innerHTML += "<p>clicou no segundo Botão</p>"
switch(prompt("como está o tempo? use chuvoso, ensolarado ou nublado")){
//switch("chuvoso"){
case "chuvoso":
resp.innerHTML += '<h1>Lembre-se de trazer gurada-chuva!</h1>';
break;
case "ensolarado":
resp.innerHTML += '<h1>Vista roupas leves!</h1>';
break;
case "nublado":
resp.innerHTML += '<h1>Vá lá fora!</h1>';
break;
default:
resp.innerHTML += '<h1>Tempo desconhecido</h1>';
break;
}
}
function acao3() {
resp.innerHTML += '<h1>clicou no terceiro botão</h1>';
let numero = prompt("Informe o número");
for (let i = 0; i < nunmero; i++){
resp.innerHTML += '<p>Paragrafo' + i + '</p>';
}
}
function acao4() {
resp.innerHTML += '<p>clicou no quarto botão</p>'
let var1 = prompt("Informe um número");
while (var1 <= 10) {
resp.innerHTML += 'linha'+var1+'<br/>';
numero++;
}
}
function acao5() {
resp.innerHTML += '<p>clicou no quinto botão</p>'
let var1 = prompt("informe o numero");
do{
resp.innerHTML += 'linha' +var1+'<br/>';
var1++;
} while (var1 <= 10);
}
function acao6() {
resp.innerHTML += '<p>clicou no sexto botão</p>'

let myArray = [1,2,3,4,5,6,7,8,9,10,11];
myArray.forEach(function(value, key) {
resp.innerHTML += "Chave: "+key+" Valor: "+value+"<br/>";
//document.write(value+' ', key+<br/>);
});
}
function acao7() {
    let entrada = "Bem vindo" + prompt("Informe seu nome: ");
    var saldacao = document.getElementsById('titulo');
    saldacao.textContent = entrada;
    const collection = document.getElementsByName("animal");
    for (let i = 0; i < collection.length; i++){
        if (collection[i].type == "checkbox") {
        collection[i].checked = true;
}
}
resp.innerHTML += '<p>clicou no sétimo botão</p>'
document.getElementsByTagName("p")[1].innerHTML = 'texto do paragrafo 2 substituido cm sucesso';
let teste = document.getElementsByName("paragrafo");
teste[1].textContent = 'Texto do paragrafo identificado por "paragrafo" na posição 1, substituido com sucesso!';

}
function acao8() {
    resp.innerHTML += '<p>clicou no oitavo botão</p>';
    function calcularArea() {
        let area = 3*5;
        resp.innerHTML += '<h1> Área total: '+area+'</h1>';
    }
    calcularArea();
}

function acao9() {
    resp.innerHTML += '<p>Clicou no nono botão</p>'
    
    let largura = prompt("Informe a largura");
    let altura = prompt("Informe a altura");

    function getArea(width, height) {
        let calculateArea = width * height;
        return calculateArea;
    }
    let area = getArea(largura, altura);
    resp.innerHTML += '<h1 style="color:green;">Área total: '+ area +'</h1>';

}

function acao10() {
    resp.innerHTML += '<p>Clicou no décimo botão</p>'

    //Set item
    let login = ['user', '********'];
    sessionStorage.setItem("acessoOn", login);
    //Retrieve
    document.getElementById("session").innerHTML = sessionStorage.getItem("acessoOn");

}

function acao11() {
    resp.innerHTML += '<p>clicou no décimo primeiro botão</p>'
    //Criando um objeto notação literal
    let hotel = { //o bjeto é declarado comovariavel.
        nome: 'Por do sol', //as chaves são separada do seu valor por dois pontos. Igual
        quartos: 40, //separa com virgula cada propriedade e método.
        reservados: 25,
        piscina: true,
        tipoQuarto: ['simples', 'duplo', 'suite'],
        
        checkAvailability: function () {
            return this.quartos - this.reservados; //this = este objeto (objeto atual)
        }// a palavra chave this indica que ele usa as prpriedades deste objeto.

    };

    let atrNome = document.getElementById('nome');
    atrNome.textContent = hotel.nome; //Acesando um objeto com a notação de ponto
    //O ponto é conhecido como: Operador de membro
    let atrQuartos = document.getElementById('quartos');
    atrQuartos.textContent = hotel.checkAvailability();
}

function acao12() {
    resp.innerHTML += '<p>Clicou no decimo segundo botão</p>'

        //criando obejto notação de construtor
        let carro =  new Object(); //função do construtor object()

            carro.modelo = 'tracker'; //
            carro.ano  = 2025;
            carro.fabricante = 'Chevrolet';
            carro.kmAtual = 123456;
            carro.proxTrocaOleo = 1233456;

            carro.checkStatus = function () {
                return this.proxTrocaOleo - this.kmAtual;
            };
        let atrModelo = document.getElementsById('modelo');
        atrModelo.textContent = carro.modelo; //acessando um objeto com a notação de ponto

        let atrProxTrocaOleo = document.getElementById('oleoMotor');
        atrProxTrocaOleo.textContent = carro.checkStatus();

        let atrkmAtual = document.getElementById('kmAtual');
        atrkmAtual.textContent = carro.kmAtual;

}