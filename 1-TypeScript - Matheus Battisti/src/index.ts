// string, boolean, number, ...
let x: number = 10;

x = 16

console.log(x);


// inferencia
let y = 12;
// y = "teste"


//annotation
let z: number = 12;


//tipos básicos
let firstName: string = "Higor"
let age: number = 30;
const isAdmin: boolean = true;


//object
const myNumbers: number[] = [1, 2, 3];

console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());


//tuplas 
let myTuples: [number, string, string[]]
myTuples = [5, "higor", ['Laura', 'Higor']];


//objevt literals -> {props: value}
const user: {name: string, age: number} = {
    name: 'Higor',
    age: 25,
};

console.log(user);
console.log(user.name);


//any
let a: any = 0;

a = 'teste';
a = true;
a = [];


//union type
let id: string | number = '10'

id = 300


//type alias
type myIdType = number | string

const userId: myIdType = 10
const productId: myIdType = "0001"
const shirId: myIdType = 123


//enum
//tamanho de roupas (size: Médio, size: Pequeno)
enum Size{
    P = 'Pequeno',
    M = 'Médio',
    G = 'Grande',
}

const camisa = {
    name: "Camisa gola V",
    size: Size.G,
};

console.log(camisa);


//literal types
let teste: 'autenticado' | null;


//teste = 'outroValor'
teste = 'autenticado';
teste = null


//funcoes
function sum(a: number, b: number){
    return a + b;
}

console.log(sum(12, 15));

function sayHelloTo(name: string): string{
    return `Hello ${name}`;
}

console.log(sayHelloTo('Higor'));

function logger(msg: string): void{
    console.log(msg);
}

logger('Teste!');

function greeting(name: string, greet?: string) {
    if(greet){
        console.log(`Olá ${greet} ${name}`);
        return;
    } else {
        console.log(`Olá ${name}`)
    }
}

greeting('Laura');
greeting('Higor', 'Sir');


//interfaces
interface MatfFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: MatfFunctionParams){
    return nums.n1 + nums.n2
}

console.log(sumNumbers({n1: 10, n2: 60}));


function multiplyNumbers(nums: MatfFunctionParams){
    return nums.n1 * nums.n2
}

const someNumbers: MatfFunctionParams = {
    n1: 5,
    n2: 33
}

console.log(multiplyNumbers(someNumbers));


//narrowing
//checagem de tipos
function doSomething(info: number | boolean) {
    if (typeof info === 'number') {
        console.log(`O número é ${info}`)
        return;
    }

    console.log('Não foi passado um número')
}

doSomething(5);
doSomething(true);


//generics
function showArraysItems<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`)
    })
}

const a1 = [1, 2, 3]
const a2 = ['a', 'b', 'c']

showArraysItems(a1);
showArraysItems(a2);

//classes
class User {
    name;
    role;
    isApproved;

    constructor(name: string, role:string, isApproved: boolean) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }

    showUserName(){
        console.log(`O nome do usuário é ${this.name}`);
    }

    showUserRole(canshow: boolean): void {
        if(canshow){
            console.log(`O nível do usuário é: ${this.role}`)
            return
        }
        console.log('Informação restrita');
    }
}

const higor = new User('Higor', 'Admin', true);

console.log(higor);

higor.showUserName();

higor.showUserRole(false);


//interfaces em classes
interface IVehicle {
    brand: string
    showBrand(): void
}

class Car implements IVehicle {

    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand
        this.wheels = wheels
    }

    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`)
    }
}

const punto = new Car('Fiat', 4);

punto.showBrand();



//herança
class SuperCar extends Car{

    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels)
        this.engine = engine
    }
}

const a4 = new SuperCar('Audi', 4, 2.0);

console.log(a4);

a4.showBrand();


//decorators
function BaseParamters(){
    return function <T extends {new (...args: any[]): {}} > (constructor: T) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        };
    };
}

@BaseParamters()

class Person {

    name

    constructor(name: string) {
        this.name = name
    }
}

const sam = new Person('Sam')

console.log(sam);




























