//Criar um método para ler propriedades de um objeto e
//exibir somente as proprieades do tipo string que estão nesse objeto

const filme = {
    titulo: 'Vindagores',
    ano: 2018,
    diretor: 'Higor',
    personagem: 'Homem-Aranha'
}

exibirPropriedades(filme);
function exibirPropriedades(objeto){

    for (prop in objeto){
        if (typeof objeto[prop] === 'string'){
            console.log(prop, objeto[prop])
        }
    }

}