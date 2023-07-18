import React, {Component} from 'react';
//import Membro from './components/membro';
//import Feed from './components/feed'; // Aula 40
import './estilo.css'

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

// // <Aula 40>

// class App extends Component{

//   constructor(props){
//       super(props);
//       this.state = {
//           status: false
//       };

//       this.entrar = this.entrar.bind(this);
//       this.sair = this.sair.bind(this);
//   }

//   entrar(){
//     this.setState({status: true});
//   }

//   sair(){
//     this.setState({status: false});
//   }

//   render(){
//       return(
//           <div>
//               {
//                   this.state.status ? 
//                   <div>
//                     <h2>Bem-vindo ao sistema</h2>
//                     <button onClick={this.sair}>Entrar no sistema</button>
//                   </div> :
//                   <div>
//                     <h2>Olá, visitante. Faça o login!</h2>
//                     <button onClick={this.entrar}>Sair do sistema</button>
//                   </div>
//               }
//           </div>
//       );
//   }

// }

// export default App;

// // ////////////// <Aula 40/>

// class App extends Component{

//   constructor(props){
//       super(props);
//       this.state = {
//           feed:[
//             {id: 1, username: 'Matheus', curtidas:10, comentarios:2},
//             {id: 2, username: 'Lucas', curtidas: 120, comentarios:24},
//             {id: 3, username: 'Amanda', curtidas: 30, comentarios:12},
//             {id: 4, username: 'Filipe', curtidas: 1, comentarios:1}
//           ]
//       };

//   }

//   render(){
//       return(
//           <div>
//             {this.state.feed.map((item)=>{
//               return(
//                 <Feed id={item.id} 
//                       username={item.username}
//                       curtidas={item.curtidas}
//                       comentarios={item.comentarios}/>
//               );
//             })}
//           </div>
//       );
//   }

// }

// export default App;


// ////////////////////// <Aula 42>

// class App extends Component{

//   constructor(props){
//     super(props);
//     this.state = {
//       email: '',
//       senha: ''
//     }

//     this.trocaEmail = this.trocaEmail.bind(this)
//     this.trocaSexo = this.trocaSexo.bind(this)
//   }

//   trocaEmail(e){
//     let valorDigitado = e.target.value
//     this.setState({email: valorDigitado});
//   }

//   trocaSexo(e){
//     let valorDigitado = e.target.value
//     this.setState({sexo: valorDigitado});
//   }

//   render(){
//     return(
//         <div>
//           <h2>Login</h2>
//             Email:
//             <input type="email" 
//                   name="email"
//                   value={this.state.email}
//                   onChange={this.trocaEmail}></input>
//             <br/>
//             Senha:
//             <input type="password" 
//                   name="senha"
//                   value={this.state.senha}
//                   onChange={(e) => this.setState({senha: e.target.value})}
//             ></input>
//             <br/>
//             <select name="sexo" value={this.state.sexo} onChange={this.trocaSexo}>
//                   <option value="masculino">Masculino</option>
//                   <option value="feminino">Feminino</option>
//             </select>
//         </div>
//     )
//   }

// }

// export default App;

// ///////////////// </Aula 42>

// ////////////////////// <Aula 43>

// class App extends Component{

//   constructor(props){
//     super(props);
//     this.state = {
//                   form:{
//                         nome: '',
//                         email: '',
//                         senha: '',
//                         sexo: ''
//                   }
//     }

//     this.dadosForm = this.dadosForm.bind(this);

//   }

//   dadosForm(e){
//     let form = this.state.form;
//     form[e.target.name] = e.target.value;
//     this.setState({form: form});

//   }

//   render(){
//     return(
//         <div>
//           <h2>Login</h2>
//             Nome:
//             <input type = "text" 
//                    name = "nome" 
//                    value = {this.state.form.nome}
//                    onChange = {this.dadosForm}/>
//             <br/>

//             Email:
//             <input type = "email" 
//                    name = "email"
//                    value = {this.state.form.email}
//                    onChange = {this.dadosForm}></input>
//             <br/>

//             Senha:
//             <input type = "password" 
//                    name = "senha"
//                    value = {this.state.form.senha}
//                    onChange = {this.dadosForm}
//             ></input> 
//             <br/>

//             Sexo:
//             <select name = "sexo" value={this.state.form.sexo} onChange={this.dadosForm}>
//                   <option value = "masculino">Masculino</option>
//                   <option value = "feminino">Feminino</option>
//             </select>

//             <div>
//               <h3>{this.state.form.email}</h3>
//               <h3>{this.state.form.senha}</h3>
//               <h3>{this.state.form.sexo}</h3>
//             </div>

//         </div>
//     )
//   }

// }

// export default App;

// ////////////////////// </Aula 43>

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = ['Siga os bons e aprenda com eles.', 
                   'O bom-senso vale mais do que muito conhecimento.', 
                   'O riso é a menor distância entre duas pessoas.', 
                   'Deixe de lado as preocupações e seja feliz.',
                   'Realize o óbvio, pense no improvável e conquiste o impossível.',
                   'Acredite em milagres, mas não dependa deles.',
                   'A maior barreira para o sucesso é o medo do fracasso.']
  }

  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = this.frases[numeroAleatorio];
    this.setState(state);
  }

  render(){
    return(
      <div className="container">
        <img src={require('./assets/biscoito.png')} alt='biscoito-da-sorte' className='img'/>
        <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    );
  }
}

class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    )
  }
}

export default App;