import React, {Component} from 'react';
//import Membro from './components/membro';

//  Aula 37
//
// class App extends Component{
//
//   constructor(props){
//     super(props);
//     this.state = {
//       hora: '00:00:00'
//     };
//   }
//
//   componentDidMount(){
//
//     setInterval(() => {
//       this.setState({ hora: new Date().toLocaleTimeString() })
//       },1000);
//
//   }
//
//   // componentDidUpdate(){
//   //   console.log('Atualizou!!!');
//   // }
//
//   render(){
//     return(
//       <div>
//         <h1>Meu Projeto {this.state.hora}</h1>
//       </div>
//     );
//   }
//
//   }

// 

// // Aula 39

// class  App extends Component{

//   render(){
//     return(
//       <div>
//         <Membro nome="Visitante"/>
//       </div>
//     )
//   }

// }

class App extends Component{

  constructor(props){
      super(props);
      this.state = {
          status: false
      };

      this.entrar = this.entrar.bind(this);
      this.sair = this.sair.bind(this);
  }

  entrar(){
    this.setState({status: true});
  }

  sair(){
    this.setState({status: false});
  }

  render(){
      return(
          <div>
              {
                  this.state.status ? 
                  <div>
                    <h2>Bem-vindo ao sistema</h2>
                    <button onClick={this.sair}>Entrar no sistema</button>
                  </div> :
                  <div>
                    <h2>Olá, visitante. Faça o login!</h2>
                    <button onClick={this.entrar}>Sair do sistema</button>
                  </div>
              }
          </div>
      );
  }

}

export default App;