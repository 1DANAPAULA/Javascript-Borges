let numero01 = parseFloat(prompt("Digite o primeiro numero:"))
let numero02 = parseFloat(prompt("Digite o segundo numero:"))
let numero03 = parseFloat(prompt("Digite o terceiro numero:"))

if (numero01 < numero02 && numero02 < numero03) {
    console.log("Os números estão em ordem crescente" , numero01,numero02,numero03)

} else {
    console.log("Os números não estão em ordem crescente")
}
