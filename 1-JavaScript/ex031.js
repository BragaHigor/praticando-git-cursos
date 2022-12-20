//Encontrando elementos (tipos de referencia)

const marcas = [
    {id: 1, nome: 'a'},
    {id: 1, nome: 'b'}
];

const marca = marcas.find(function(marca){
    return marca.nome === 'a';
});

console.log(marca);