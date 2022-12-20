function VerificarEntrada(){
    NomeConvidado = document.getElementById('nome').value;
    ConvidadosHigor = ['Higor', 'Laura', 'Paulo', 'Ada', 'Joao'];
    if (ConvidadosHigor.includes(NomeConvidado)){
        document.getElementById('PermissaoDeEntrada').innerText = 'Você pode Entrar!'
    } else {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você não pode Entrar!'
    }
}