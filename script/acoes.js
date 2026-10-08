
var resp = window.document.getElementById("saida");
    
function acao1() {
    resp.innerHTML += "<P>Você clicou no botão 1</P>";

    var a = prompt("Digite um número");
    if (a != "6") {
        resp.innerHTML += "<h1>Diferente de 6</h1>";
    } else {
        resp.innerHTML += "<h1>Igual a 6</h1>";
    }

}