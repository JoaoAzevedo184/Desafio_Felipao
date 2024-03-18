const prompt = require('prompt-sync')(); 

var genero ="";
var prazer ="";
var valor = ""; 
var artigo = "";
while(true){
    valor = prompt(`Digite o seu gênero:
                  [ 0 ] Masculino
                  [ 1 ] Feminino
                  `);
    if (Number.isInteger(parseInt(valor))) {
        valor = parseInt(valor);
        if (valor < 0 || valor > 1) {
            console.log("Escolha inválida. Por favor, escolha um número de 0 ou 1.");
            continue;
        } else if(valor === 1) {
            genero = "Heroína"
            prazer = "conhecê-la"
            artigo = "A"
            break;
        } else {
            genero = "Herói"
            prazer= "conhecê-lo"
            artigo = "O"
            break;
        }
        break;
    }
}

var xp = 4670;
var categoria = "";
let nome = prompt("Olá grande " + genero + "! É um prazer enorme " + prazer + ". Por favor, me diga seu nome:");
console.log("Que nome grandioso, " + genero);


switch (true) {
    case (xp <= 1000):
        categoria = "Ferro";
        break;
    case (xp >= 1001 && xp <= 2000):
        categoria = "Bronze";
        break;
    case (xp >= 2001 && xp <= 5000):
        categoria = "Prata";
        break;
    case (xp >= 5001 && xp <= 7000):
        categoria = "Ouro";
        break;
    case (xp >= 7001 && xp <= 8000):
        categoria = "Platina";
        break;
    case (xp >= 8001 && xp <= 9000):
        categoria = "Ascendente";
        break;
    case (xp >= 9001 && xp <= 10000):
        categoria = "Imortal";
        break;
    default:
        categoria = "Radiante";
  }
 
console.log(artigo + " " + genero + " ," + nome + ", está no nível " + xp+", então é rank "+ categoria);