//for-in

const pessoa = {
    nome: 'Higor',
    idade: 25,
};

for(let chave in pessoa){
    console.log(chave,pessoa.nome);
}

const cores = ['vermelho', 'verde', 'azul'];

for (let indice in cores){
    console.log(indice, cores[indice])
}
