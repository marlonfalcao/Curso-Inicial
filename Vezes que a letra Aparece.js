
let frase = " "
let letra = " "
let resultado = 0


function vezesLetraAparece (frase, letra){
    for(let i = 0; i < frase.length; i++){
    if (frase [i] === letra) {resultado++}
    }
    return resultado
}

console.log (vezesLetraAparece ("aabbb ccc aaaa", "a"))


