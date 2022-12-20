//Objeto Postagem de Blog 
//Crie um objeto de postagem de blog que vai conter seguintes propriedades
//postagem
/*
titulo
mensagem
autor
visualizações
comentarios
    (autor, mensagem)
estaAoVivo
*/

let postagem = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'c',
    visualizacoes: 10,
    comentarios: [
        {autor: 'a', mensagem: 'b'},
        {autor: 'a', mensagem: 'b'}
    ],
    estaAoVivo: true
}

console.log(postagem);