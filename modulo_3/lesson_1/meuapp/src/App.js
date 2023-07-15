import React, { Component } from "react";

// // Aula 32 
//
// const BemVindo = (props) => {
//   return(
//       <div>
//         <h2>Bem-Vindo(a) { props.nome }</h2>
//       </div>
//   )
// }
//
// export default function App(){
//   return(
//     <div>
//       <h1>Hello World</h1>
//       <BemVindo nome="Filipe"/>
//     </div>
//   )
// }

// // Aula 33
//
// const Equipe = (props) => {
//   return (
//     <div>
//         <Sobre username={props.nome} cargo={props.cargo} 
//                idade={props.idade} />
//         <Social fb={props.facebook}/>
//         <hr/>
//     </div>
//   );
// }

// const Sobre = (props) =>{
//   return(
//     <div>
//         <h2>Olá sou o(a) {props.username} </h2>
//         <h3>cargo: {props.cargo} </h3>
//         <h3>Idade: {props.idade} anos </h3>
//     </div>
//   );
// }

// const Social = (props) => {
//   return(
//       <div>
//           <a href={props.fb}> facebook </a>
//           <a> Linkedin </a>
//           <a> Youtube </a>
//       </div>
//   );
// }

// function App(){
//   return(
//     <div>
//       <h1>Conheça nossa equipe:</h1>
//       <Equipe nome="Matheus" cargo="Programador Front-end" idade="29"
//               facebook="https://google.com"/>
//       <Equipe nome="Lucas" cargo="Designer" idade="29"
//               facebook="https://google.com"/>
//       <Equipe nome="Amanda" cargo="Programador Front-end" idade="29"
//               facebook="https://google.com"/>
//     </div>
//   );
// }

// // Aula 34

// class Equipe extends Component{
//   render() {
//     return (
//       <div>
//         <Sobre nome = {this.props.nome}
//                cargo = {this.props.cargo}
//                idade = {this.props.idade}/>
//         <Social />
//         <hr/>
//       </div>
//     );
//   }
// }

// class Sobre extends Component{
//   render(){
//     return(
//       <div>
//         <h2>Olá, sou o(a) {this.props.nome}</h2>
//         <h3>cargo: {this.props.cargo}</h3>
//         <h3>idade: {this.props.idade}</h3>
//       </div>
//     );
//   }
// }

// const Social = () =>{
//   return(
//       <div>
//         <a>Facebook</a>
//         <a>LinkedIn</a>
//       </div>
//   );
// }

// function App(){
//   return(
//       <div>
//         <h1>Conheça nossa equipe: </h1>
//         <Equipe nome="Filipe"
//                 cargo="Programador"
//                 idade="32"/>
//       </div>
//   );
// }


// export default App

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: 'Matheus',
      contador: 0
    };
    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }

  aumentar(){
    let state = this.state;
    state.contador += 1;
    state.nome = 'Jose';

    this.setState({state})
  }

  diminuir(){
    let state = this.state;
    if(state.contador === 0){
      alert('Opa chegou a zero!');
      return;
    }
    state.contador -= 1;

    this.setState({state})
  }

  render(){
    return(
        <div>
          <h1>Contador</h1>
            {this.state.nome}
          <h3>
            <button onClick={this.diminuir}>-</button>
                {this.state.contador}
            <button onClick={this.aumentar}>+</button>
            </h3>

        </div>
    );
  }
}

export default App;