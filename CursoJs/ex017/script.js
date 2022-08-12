function calcular(){
    let num=document.getElementById('txtnum')
    if (num.value.length==0){
        window.alert('[ERRO] Favor digitar um número.')
    }
    res.innerHTML=''
    for(let c=1;c<=10;c++){
        let n= Number(num.value)
        let v=n*c
        res.innerHTML+= `${n} * ${c} = ${v} <br> `
    }
}