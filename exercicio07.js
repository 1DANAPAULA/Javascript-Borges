let total = parseFloat(prompt("Digite o valor total da compra: "))

let desconto

if (total <= 100 ){
    desconto = 0
    console.log("O Valor de desconto foi: " + desconto)
}

else if (valortotal <= 200){
    desconto = 0.1
    console.log("O Valor de desconto foi: " + (desconto+100) + "%"
)
}

else {
    desconto = 0.2
     console.log("O Valor de desconto foi: " + (desconto+100) + "%")
}

let valorfinal = valortotal - (valortotal*desconto)

console.log("O Valor final da compra com o desconto")