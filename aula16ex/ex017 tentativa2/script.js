let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('#res')
let valores = []

function isNumero (n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inlista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
function adicionar(){
    if(isNumero(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))  
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        console.log(valores)
    } else {
        alert('Valor invalido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}
function finalizar(){
    if (!valores.length == 0){
        res.innerHTML = ''
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            } else if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma/tot
        res.innerHTML += `Foram adicionados ${tot} numeros. <br>`
        res.innerHTML += `O maior numero foi ${maior}<br>`
        res.innerHTML += `O menor foi ${menor}<br>`
        res.innerHTML += `A soma dos valores é igual a ${soma}<br>`
        res.innerHTML += `A media dos valores é ${media}<br>`
        

    } else {
        alert('Adicione um numero primeiro')
    }
}