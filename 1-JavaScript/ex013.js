//If..Else

//Se a hora estiver entre 6h até 12h : Bom dia!
//Se estiver entre 12h até 18h : Boa tarde!
//Caso contrario : Boa noite!

let hora = 19;

if (hora > 6 && hora < 12){
    console.log('Bom dia!');

} else if (hora > 12 && hora < 18){
    console.log('Boa tarde!');

} else {
    console.log('Boa noite!');
}