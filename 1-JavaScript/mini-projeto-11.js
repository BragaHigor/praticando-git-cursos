//Objeto Endereço

//Criar um objeto endereço que contem:
//Rua
//Cidade
//CEP
//exirEndereco(endereco)

let endereco = {
    rua: 'a',
    cidade: 'b',
    cep: 'c',
};

function exirEndereco(endereco){
    for (let chave in endereco){
        console.log(chave, endereco[chave]);
    }
}

exirEndereco(endereco);