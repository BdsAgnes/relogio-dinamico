function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        // BOM DIA!
        msg.innerHTML = `Agora são ${hora} horas, Bom dia!`
        img.src = 'img.png/manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18){
        // BOA TARDE!
        msg.innerHTML = `Agora são ${hora} horas, Boa tarde!`
        img.src = 'img.png/tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        // BOA NOITE!
        msg.innerHTML = `Agora são ${hora} horas, Boa noite!`
        img.src = 'img.png/noit.png'
        document.body.style.background = '#515154'
    }
}