function carregar(){
    var msg=window.document.getElementById('msg')
    var img=window.document.getElementById('imagem')
    var data=new Date()
    //var hora=data.getHours()
    var hora=21
    msg.innerHTML=`Agora são ${hora} horas.`
    if(hora>=0 && hora<12){
        //Bom dia!
        foto.src="manha250.png"        
    }else if(hora>=12 && hora<=18){
        //Boa tarde!
        img.src='tarde250.png'        
    }else{
        //Boa noite
        img.src='noite250.png'        
    }
}