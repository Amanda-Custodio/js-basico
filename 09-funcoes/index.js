/*
function nomeDaFuncao(){
    <bloco de declaração>
}
    nomeDaFuncao()
*/


/*
function nomeDaFuncao(parâmetro){
    <bloco de declaração>
}
    nomeDaFuncao(parâmetro)
*/


/*
function nomeDaFuncao(parâmetro1, parâmetro2){
    <bloco de declaração>
}
    nomeDaFuncao(parâmetro1, parâmetro2)
*/

// função sem parâmetro
/*
function incentivarQuester(){
    alert('Você chegou ao Js, continue assim!')
}

incentivarQuester()

// função com parâmetro
function soma(numero1, numero2){
    return numero1 + numero2
}

let resultadoDaSoma = soma(5, 3)
console.log(resultadoDaSoma)

resultadoDaSoma = soma(resultadoDaSoma, 10)
console.log(resultadoDaSoma)
*/

// função com padrões definidos
function incentivarQuester(nomeQuester = 'Quester'){
    alert('Parabéns, ' + nomeQuester + ', você chegou ao Js, continue assim!')
}

incentivarQuester()