let num=document.querySelector('input#fnum')
let lista= document.querySelector('select#flista')
let res=document.querySelector('div#res')
let valores=[]

function isNumero(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }else {
        return false
    }
}

function inlista(n,l){
    if(l.indexOf(Number(n))!= -1){
        return true
    } else {
        return false
    }    
}

function adicionar(){
    if(isNumero(num.value) && ! inlista(num.value, valores)) {
        valores.push(Number(num.value))
        let item=document.createElement('option')
        item.text=`valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML=''
    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value=''
    num.focus()
}
function finalizar(){
    if(valores.length==0){
        window.alert('Adcione valores antes de finalizar.')
    }else{
        let tot=valores.length
        let maior=valores[0]
        let menor=valores[0]
        let soma=0
        let media=0
        for(let pos in valores){
            soma+=valores[pos]
            media=soma/tot
            if(valores[pos]>maior){
                maior=valores[pos]
            }
            if(valores[pos]<menor){
                menor=valores[pos]
            }
        }

        res.innerHTML=' '
        res.innerHTML+=`<p>Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML+=`<p>O menor valor cadastrado é ${menor}.</p> `
        res.innerHTML+=`<p>O maior valor cadastrado é ${maior}.</p>`
        res.innerHTML+=`<p>A soma de todos os numeros cadastrados é ${soma}.</p>`
        res.innerHTML+=`<p>A media de todos os numeros cadastrados é ${media}.</p>`
    }
}

