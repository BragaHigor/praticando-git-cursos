 
 let num = [5, 8, 7, 9, 10, 3, 2]

 
 num.push(1)
 num.sort()
 console.log(num)
 console.log(`O vetor tem ${num.length} posições`)
 console.log(`O primeiro valor do vetor é ${num[0]}`)
 let pos = num.indexOf(13)
 if (pos == -1){
    console.log('O valor não foi encontrado!')
 } else {
    console.log(`O valor está na posição ${pos}`)
 }


/*
let valores = [8,1,3,4,6,2]

for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

*/

/*
let valores = [8,1,3,4,6,2]

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/