// let nomes =['Matheus', 'Lucas', 'Henrique', 'Maria'];

// console.log(nomes.some(nome => nome === 'Maria'));

let nomes =[
    {nome: 'Matheus', idade:18}, 
    {nome: 'Lucas', idade:25}, 
    {nome: 'Henrique', idade:20}
];

console.log(nomes.every(nome => nome.idade >=18));


if(nomes.every(nome => nome.idade >= 18)){
    console.log('Todos são maiores de 18')
}else{
    console.log('Ops, Alguém é de menor');
}