async function buscaEndereco(cep) {

    let mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existente!');
        }
        let cidade = document.getElementById('cidade');
        let logradouro = document.getElementById('endereco');
        let estado = document.getElementById('estado');
        let bairro = document.getElementById('bairro');

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;
        bairro.value = consultaCEPConvertida.bairro;



        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro) {
        mensagemErro.innerHTML = `<p> CEP inválido. Tente novamente! </p>`
        console.log(erro);
    }
}

var cep = document.getElementById('cep');
cep.addEventListener('blur',() => buscaEndereco(cep.value));



// let ceps = ['01001000', '01001001'];
// let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
// console.log(conjuntoCeps);
// Promise.all(conjuntoCeps).then(respostas => console.log(respostas));

