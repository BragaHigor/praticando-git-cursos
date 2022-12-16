function parimpar(n){
    if (n % 2 == 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}

// let res = parimpar(7)
console.log(parimpar(17))


function soma (n1 = 0 , n2 = 0){
    return n1 + n2
}

// console.log(soma(7,3))
console.log(soma(7))