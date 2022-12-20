const celular = {
    marcaCelular: 'SAMSUNG',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75,
    },
    ligar: function () {
        console.log('Fazendo ligação...')
        
    }
}

const novoObjeto = Object.assign({
    bateria: 5000,
}, celular);
console.log(novoObjeto);

const objeto2 = {...novoObjeto};
console.log(objeto2);