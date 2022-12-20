let permissao; //usuario comum, usuario gerente, usuario diretor

permissao = 'gerente'

switch (permissao){
    case 'comum':
    console.log('usuario comum');
    break;

    case 'gerente':
    console.log('usuario gerente');
    break;

    case 'diretor':
    console.log('usuario diretor');
    break;

    default:
    console.log('Usuário não reconhecido!');
}