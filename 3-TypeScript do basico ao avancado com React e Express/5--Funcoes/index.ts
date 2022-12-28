// 1 - void
function withoutReturn():void {
    console.log("Esta função não tem retorno!")
    // return 1
}

withoutReturn()


// 2 - callback com argumento
function greeting(name: string):string {
    return `Olá ${name}`
}

function preGreeting(f: (name: string) => string, userName: string){
    
    console.log('Preparando a função!')

    const greet = f(userName)

    console.log(greet)
}

preGreeting(greeting, "Higor")
preGreeting(greeting, 'Braga')


// 3 - generic functions
function firstElement<T>(arr: T[]): T {
    return arr[0]
}

console.log(firstElement([1,2, 3]))
console.log(firstElement(["a", 'b', 'c']))

function mergeObjects<U, T>(objt1: U, objt2: T) {
    return {
        ...objt1,
        ...objt2
    }
}

const newObject = mergeObjects({name: "Higor"}, {age: 25, job: "Programmer"})

console.log(newObject)


// 4 - constraints
function biggestNumber<T extends number | string>(a: T, b: T): T {
    let biggest: T

    if(+a > +b){
        biggest = a
    } else {
        biggest = b
    }

    return biggest
}

console.log(biggestNumber(5,3))
console.log(biggestNumber('12', "5"))
// console.log(biggestNumber("12", 5))


// 5 - especificar tipo de argumento
function mergeArrays<T>(arr1: T[], arr2: T[]){
    return arr1.concat(arr2)
}

console.log(mergeArrays([1,2,3], [4,6]))
console.log(mergeArrays<number | string>([1,2,3], ['teste', "testando"]))


// 6 - parâmetros opcionais
function modernGreeting(name: string, greet?: string){

    if(greet){
    return `Olá ${greet} ${name}, tudo bem?`
    }

    return `Olá ${name}, tudo bem?`
}

console.log(modernGreeting('Higor'))

console.log(modernGreeting('Higor', "Dr."))


// 7 - parametro default
function somaDefault(n: number, m = 10): number {
    return n + m
}

console.log(somaDefault(10))
console.log(somaDefault(15,12))


// 8 - unknom
function doSomething(x: unknown){
    if(Array.isArray(x)){
        console.log(x[0])
    }else if (typeof x === 'number'){
        console.log('X é um número')
    }
}

doSomething([1,2,3])
doSomething(5)