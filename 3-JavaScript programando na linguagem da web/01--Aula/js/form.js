var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();
    
    var form = document.querySelector('#form-adiciona');
    // Extraindo informacoes do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    //cria a tr a td do paciente
    var pacienteTr = montaTr(paciente);

    var erro = validaPaciente(paciente);

    if (erro.length > 0){
        exibeMensagemDeErro(erro);
        return;
    }

    //Adicionando paciente na tabela
    var tabela = document.querySelector('#tabela-pacientes')

    tabela.appendChild(pacienteTr);

    form.reset();
    var mensagemErro = document.querySelector('#mensagem-erro');
    mensagemErro.innerHTML = ""
    
});

function exibeMensagemDeErro(erros){
    var ul = document.querySelector('#mensagem-erro');
    ul.innerHTML = ""

    erros.forEach(function(erro){
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente){

    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    return pacienteTr
}

function montaTd(dado, classe){
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe)

    return td;
}

function validaPaciente (paciente){

    var erros = [];

    if (paciente.nome.length == 0){
        erros.push('O campo "Nome" do paciente não pode ser em branco');
    }

    if (!validaPeso(paciente.peso)) {
        erros.push('Peso é inválido!');
    }

    if (!validaAltura(paciente.altura)) {
        erros.push('Altura é inválida!'); 
    }

    if (paciente.gordura.length == 0){
        erros.push('O campo "Gordura" do paciente não pode ser em branco');
    }

    if (paciente.peso.length == 0){
        erros.push('O campo "Peso" do paciente não pode ser em branco');
    }

    if (paciente.altura.length == 0){
        erros.push('O campo "Altura" do paciente não pode ser em branco')
    }

    return erros;

}