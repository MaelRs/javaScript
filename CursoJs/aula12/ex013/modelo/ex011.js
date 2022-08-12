let idade=21
let sexo='F'
if (idade<16) {
    console.log('Não Vota')
}else if(idade>=16 && idade<18 || idade>65 ) {
    console.log('Voto facultativo')
}else {
    console.log('Voto Obrigatório')
}
if (sexo=='M' && idade==18){
    console.log('Você está na idade do Alistamento militar Obrigatório.')
}else if(sexo=='M' && idade>18){
    let tempo=idade-18
    console.log('Você já passou '+ tempo+' anos do tempo de Alistamento Obrigatório.')
}else if(sexo=='M' && idade<18){
    let tempo= 18-idade
    console.log('Falta '+tempo+ ' anos para o Alistamento Obrigatório!')
}else{
    console.log('Você não é obrigada ao alistamento Militar!')
}