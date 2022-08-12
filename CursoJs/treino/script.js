//let num=document.querySelector('input#fnum')
//let lista=document.querySelector('select#flista')
//let valores=[]
let palio=0
let gol=0
let voto=Number(window.prompt('Digite seu voto [1]-Palio [2]-Gol: '))

if (voto==1){
    palio+=1
    console.log('Você está votando no Palio')
}
else if(voto==2){
    gol+=1
    console.log('Você está votando no Gol.')
}
