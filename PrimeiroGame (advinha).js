let palpite = 10
let resposta = 60
let console = ""

function primeiroGame (palpite){
 
    if (palpite === resposta){
        console = "resposta correta"
    } else if (palpite < resposta){
        console = "Muito baixo"
    } else if (palpite > resposta){
        console = "Muito alto"
    }
return console
}

