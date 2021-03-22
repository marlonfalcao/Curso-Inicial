let numero = 0
let outroNumero = 0
let operacao = ""
let resultado = 0

function adicaoSubtracaoCalc (numero, outroNumero, operacao){
    if (operacao === "+") { 
        resultado = numero + outroNumero
    } else if (operacao === "-"){
        resultado = numero - outroNumero
    } else (resultado = 0)
return resultado
}

console.log (adicaoSubtracaoCalc (50, 30, "-"))
