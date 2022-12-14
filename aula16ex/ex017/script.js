var res = document.querySelector('#select')
var Vetor = []

function add(N) {
    if (N.value.length == 0 || N.value > 100 || N.value < 1){
        alert('ERRO! Nenhum valor digitado ou valor invalido :(')
    } else {
        Vetor.push(Number(N.value))
        let item = document.createElement('option')
        item.text = `Valor ${N.value} adicionado.`
        res.appendChild(item) 
    }
}
function end(){
    let res = document.querySelector('#res')
    let Vlength = Number(Vetor.length)
    let soma = 0
    for (let contador = 0; contador < Vlength;contador++){
        soma += Vetor[contador]
    }
    let media = soma/Vlength
    res.innerHTML = ''
    res.innerHTML += `</br> Ao todo temos ${Vlength} numeros cadastrados!`
    Vetor.sort(function(a,b){
        return a - b //nao entendi, lembrar de estudar maais tarde
    })
    res.innerHTML += `</br> O maior numero foi ${Vetor[Vlength-1]}`
    res.innerHTML += `</br> O menor numero foi ${Vetor[0]}` 
    res.innerHTML += `</br> A soma de todos os numero foi de ${soma}`
    res.innerHTML += `</br> A media dos numeros é ${media}`

    console.log(Vetor)


}