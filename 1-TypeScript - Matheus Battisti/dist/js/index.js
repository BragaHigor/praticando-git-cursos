"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// string, boolean, number, ...
let x = 10;
x = 16;
console.log(x);
// inferencia
let y = 12;
// y = "teste"
//annotation
let z = 12;
//tipos básicos
let firstName = "Higor";
let age = 30;
const isAdmin = true;
//object
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
//tuplas 
let myTuples;
myTuples = [5, "higor", ['Laura', 'Higor']];
//objevt literals -> {props: value}
const user = {
    name: 'Higor',
    age: 25,
};
console.log(user);
console.log(user.name);
//any
let a = 0;
a = 'teste';
a = true;
a = [];
//union type
let id = '10';
id = 300;
const userId = 10;
const productId = "0001";
const shirId = 123;
//enum
//tamanho de roupas (size: Médio, size: Pequeno)
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.G,
};
console.log(camisa);
//literal types
let teste;
//teste = 'outroValor'
teste = 'autenticado';
teste = null;
//funcoes
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 15));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo('Higor'));
function logger(msg) {
    console.log(msg);
}
logger('Teste!');
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    else {
        console.log(`Olá ${name}`);
    }
}
greeting('Laura');
greeting('Higor', 'Sir');
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 10, n2: 60 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 33
};
console.log(multiplyNumbers(someNumbers));
//narrowing
//checagem de tipos
function doSomething(info) {
    if (typeof info === 'number') {
        console.log(`O número é ${info}`);
        return;
    }
    console.log('Não foi passado um número');
}
doSomething(5);
doSomething(true);
//generics
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ['a', 'b', 'c'];
showArraysItems(a1);
showArraysItems(a2);
//classes
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canshow) {
        if (canshow) {
            console.log(`O nível do usuário é: ${this.role}`);
            return;
        }
        console.log('Informação restrita');
    }
}
const higor = new User('Higor', 'Admin', true);
console.log(higor);
higor.showUserName();
higor.showUserRole(false);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}
const punto = new Car('Fiat', 4);
punto.showBrand();
//herança
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar('Audi', 4, 2.0);
console.log(a4);
a4.showBrand();
//decorators
function BaseParamters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParamters()
], Person);
const sam = new Person('Sam');
console.log(sam);
