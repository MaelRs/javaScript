function verificar(){
    let data=new Date()
    let ano=data.getFullYear()
    let fano=document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length==0 || fano.value>ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        let fsex=document.getElementsByName('radsex')
        let idade= ano-Number(fano.value)
        let genero=''
        let img=document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero='Homem'
            if(idade>=0 && idade<12){
                //Criança
                img.setAttribute('src','criançamenino250.jpg')
            }else if(idade<18){
                //Adolescente
                img.setAttribute('src','adolecente250.jpg')
            }else if(idade<=30){
                //Jovem
                img.setAttribute('src','rapazjovem250.jpg')
            }else if(idade<65){
                //Adulto
                img.setAttribute('src','homemadulto250.jpg')
            }else {
                //Idoso
                img.setAttribute('src','homemidoso250.jpg')
            }
        }else if (fsex[1].checked){
            genero='Mulher'
            if(idade>=0 && idade<12){
                //Criança
                img.setAttribute('src','criançamenina250.jpg')    
            }else if(idade>=12 && idade<18){
                //Adolescente
                img.setAttribute('src','adolecentemenina250.jpg')
            }else if(idade>=18 && idade<30){
                //Jovem
                img.setAttribute('src','moçajovem250.jpg')
            }else if(idade<65){
                //Adulto
                img.setAttribute('src','mulheradulta250.jpg')
            }else {
                //Idoso
                img.setAttribute('src','mulheridosa250.jpg')
            }
        }
        //res.innerHTML= 'Idade Calculada '+idade+' anos'
        res.innerHTML='Detectamos um(a) '+genero+' com '+idade+' anos.'
        res.appendChild(img)

    }
}