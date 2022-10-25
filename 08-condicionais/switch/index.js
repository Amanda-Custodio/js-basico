/* SWITCH (parâmetro){
    case valor1:
        <bloco de declaração>
        break
    case valor2:
        <bloco de declaração>
        break
}


let filmeEscolhido = "Batman"

switch(filmeEscolhido){
    case "Vingadores":
        console.log("É o filme dos Vingadores")
        break
    case "Batman vs Superman":
        console.log("É o filme do Batman vs Superman")
        break
    default:
        console.log("Filme não encontrado")
        break
}
*/

let avaliacao = 8

switch(avaliacao){
    case 1:
    case 2:
        console.log("Filme ruim")
        break
    case 3:
    case 4:
        console.log("Filme regular")
        break
    case 5:
        console.log("Filme ótimo")
        break
    default:
        console.log("Nota inválida")
        break
}