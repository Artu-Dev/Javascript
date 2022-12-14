let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('#res')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}
function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}
function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores) ){
        valores.push(Number(num.value))  
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert ('Valor invalido ou ja se encontra na lista')
    }
    num.value = ''
    num.focus()
}
function finalizar(){
    if (!valores.length == 0) {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0 
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `Ao todo foram ${tot} numeros <br>`
        res.innerHTML += `O maior valor foi ${maior} <br>`
        res.innerHTML += `O menor valor foi ${menor} <br>`
        res.innerHTML += `A soma de todos os valores é de ${soma}<br>`
        res.innerHTML += `A media dos valores é ${media}`
    } else {
        alert('Voce precisa adicionar valores primeiro!')
    }
}

function Limpar(){
    res.innerHTML = ''
    lista.innerHTML = ''
    valores = []
}