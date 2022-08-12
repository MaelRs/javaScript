let agora=new Date()
let hora=agora.getHours()
console.log('Agora são exatamente '+hora+' horas')
if(hora<=6){
    console.log('Boa Madrugada!')
}else if (hora<12){
    console.log('Bom dia!')
}else if(hora<=18){
    console.log('Boa tarde!')
}else if(hora<=23) {
    console.log('Boa noite!')
}else{
    console.log('Durma bem!')
}