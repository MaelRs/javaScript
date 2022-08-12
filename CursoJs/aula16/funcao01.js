function parimpar(n){
    if(n%2==0){
        return 'Par'
    }else{
        return 'Impar'
    }
}

let res=parimpar(9)
console.log(res)
//O retorno pode ser expresso também por meio do console sem variavel
console.log(parimpar(1962))
