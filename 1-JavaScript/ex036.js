//Operador Spread

const primeiro = [1, 2, 3];
const segundo = [4, 5, 6];

//spread [...primeiro, ...segundo];

// const combinado = primeiro.concat(segundo);
const combinado = [...primeiro, 'a', ...segundo, '$'];
console.log(combinado);

// const cortado = combinado.slice(1, 3);
const clonado = [...combinado];
console.log(clonado)

