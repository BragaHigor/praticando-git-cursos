//Velocidade máxima de até 70km/h
//a cada 5km/h acima do limite você ganha 1 ponto
//Math.Floor()
//caso pontos maior que 12 -> "Carteira Suspendida"

verificarVelocidade(210);

function verificarVelocidade(velocidade){

    const velocidadeMaxima = 70;
    const pontosPerdidos = 5;
    const carteiraSuspensa = 12;

    if (velocidade <= velocidadeMaxima){
        console.log('Velocidade Permitida!');
    } else {
         const pontos = Math.floor(((velocidade - velocidadeMaxima) / pontosPerdidos));

         if (pontos >= carteiraSuspensa){
            console.log('Sua Carteira foi Suspensa');
         } else {
            console.log(pontos, 'Pontos');
         }
    }
        
}