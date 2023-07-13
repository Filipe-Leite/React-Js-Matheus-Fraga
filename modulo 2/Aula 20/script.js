

function cadastroPessoa(info){
    let novosDados = {
        ...info,
        cargo: 'Programador',
        status: 1,
        codigo: '123456789'
    }

    return novosDados;
}

pessoa = {nome: 'Matheus', sobrenome: 'Fraga', anoInicio: 2045};

console.log(cadastroPessoa(pessoa));