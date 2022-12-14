 function pintaTabuada(){
    let Num = document.querySelector('input#txtN')
    let Tab = document.querySelector('select#Tab')
    if (Num.value.length == 0){
        window.alert('Erro! Digite um numero primeiro')
    } else {  
        Tab.innerHTML = ''
        let n = Number(Num.value)
        
        for (let cont = 1;cont <= 10;cont++){
            let item = document.createElement('option')
            item.text = `${n} x ${cont} = ${n*cont}`
            item.value = `tab${cont}`
            Tab.appendChild(item)
        }     
    }
 }