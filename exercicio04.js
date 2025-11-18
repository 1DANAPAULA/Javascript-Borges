let nota01 = parseFloat(prompt("Digite sua primeira nota:"))
let nota02 = parseFloat(prompt("Digite sua segunda nota:"))
let nota03 = parseFloat(prompt("Digite sua terceira nota:"))
let nota04 = parseFloat(prompt("Digite sua quarta nota:"))

let media = (nota01 + nota02 + nota03 + nota04) / 4

if (media >= 7) {
    console.log("Aprovado")

}
else if (media > 5 && media <7){
    console.log ("Recuperação")
}
else {
    console.log ("Reprovado")
}