
function cadastrar(usuarios,...novosUsuarios){

    let totalusuarios = [
        ...usuarios,
        ...novosUsuarios
    ];

    return console.log(totalusuarios);
}

let usuarios = ["Matheus","Joao"];

let novosUsuarios = cadastrar(usuarios, "Henrique", "Lucas");