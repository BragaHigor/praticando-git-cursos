const celular = {
    marcaCelular: 'SAMSUNG',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75,
    },
    capacidadeBateria: 5000,
    ligar: function () {
        console.log('Fazendo ligação...')
        
    }
}

//Factory Functions (Função de Fábrica)

function criarCelular (marcaCelular, tamanhoTela, capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log('Fazendo ligação...')
            
        }
    }
}

const celular1 = criarCelular ('Nokia', 5.5, 5000);
console.log(celular1);