// // ----------------------------- Aula 13
//
// document.write("</br> Escolha seu pedido: </br>");
// document.write("</br> 0 - Sorvete / 1 - Suco </br>");
// document.write("</br> 2 - Coca Cola / 3 - Água gelada </br></br>");

// function pedir(){

//     x = prompt("O que deseja pedir?");

//     switch(x){

//         case "0":
//             alert("Você pediu um sorvete");
//             break;
//         case "1":
//             alert("Você pediu um suco");
//             break;
//         case "2":
//             alert("Você pediu uma coca gelada");
//             break;
//         case "2":
//             alert("Você pediu uma Água Natural");
//             break;
//         default:
//             alert("Ops nao temos essa opcao!");
//             break
//     }
// }

// // -------------------------------- Aula 14

// // Executa de tempo em tempo
function acao(){
    document.write("Executando...<br/>");
}

// // Executa de tempo em tempo
// setInterval(acao, 1000);

// Espera o tempo passado por parametro para executar
setTimeout(acao, 3000);