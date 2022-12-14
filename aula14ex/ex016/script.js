function contar() {
    let start = document.querySelector('input#start')
    let end = document.querySelector('input#end')
    let passo = document.querySelector('input#passo')
    let res = document.querySelector('div#res')
    
    
    if (start.value.length == 0||end.value.length == 0||passo.value.length == 0){
        res.innerHTML = '[FALTAM DADOS] Impossivel Calcular!! :('
    } else {
        res.innerHTML = `Contando:</br>`
        let i = Number(start.value)
        let f = Number(end.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo invalido! Considerando Passo 1')
            p = 1
        }  
        if (i < f) {
            //contagem crescente
            for (let c = i;c <= f;c += p){
                res.innerHTML += ` \u{1F449} ${c} `
            }
        } else {
            //contangem regressiva
            for (let c = i;c >= f;c -= p){
               res.innerHTML += ` \u{1F449} ${c} `
            }
        } 
        res.innerHTML += `\u{1F3C1}`
    }
}