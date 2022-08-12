let amigo={nome:'José',
sexo:'M',
peso:84.4,
engordar(p=0){
    console.log('Egordou')
    this.peso+=p
}}
amigo.engordar(9)
console.log(`${amigo.nome} pesa ${amigo.peso} kilos.`)