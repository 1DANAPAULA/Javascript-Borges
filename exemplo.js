//Alert - Apresenta uma mensagem na tela
// window.alert("Ola Turma do Borges")
// //Confirm - Pergunta com ok/ cancela (Retorna um true ou false)
// window.confirm(" o jonas vai casar ") 
// //prompt - Pega o texto da tela
// window.prompt("Qual o seu nome?")

//Comentario em linha
/*
Comentario em texto
*/

// console.log("Multimidia")

// let nome = prompt("Informe o seu nome")

// console.log("Bem vindo!" + nome)

// let numero1 = Number.parseInt(prompt ( "Digite o primeiro numero: "))
// let numero2 = Number.parseInt(prompt("Digite o segundo numero: "))
 
// let resultado = numero1 + numero2 

// console.log(resultado)

// let numero1 = Number.parseFloat(prompt ( "Digite o primeiro numero: "))
// let numero2 = Number.parseFloat(prompt("Digite o segundo numero: "))
 
// let resultado = numero1 + numero2 

// console.log(resultado)

let idade = window.prompt ("qual sua idade")

if(idade >= 18){
    console.log("Maior de idade! Dalhee!")
}else{
    console.log("Menor de idade!")
}

switch (idade) {
    case "18":
        console.log("Maior de idade!")
        break;
    case "27":
        console.log("Esta perto dos 30")
        break;

    default:
        console.log("Nada a dizer")
        break;
}