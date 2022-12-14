function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //bomdia
        img.src = 'fotomanha.png'
        document.body.style.background = '#ffcdb4'
    } else if (hora >= 12 && hora < 18) {
        //boatarde
        img.src = 'fototarde.png'
        document.body.style.background = '#be6c58'
    } else {
        //boanoite
        img.src = 'fotonoite.png'
        document.body.style.background = '#0c1d27'
    }
}