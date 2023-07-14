import React from "react";

const BemVindo = (props) => {
  return(
      <div>
        <h2>Bem-Vindo(a) { props.nome }</h2>
      </div>
  )
}

export default function App(){
  return(
    <div>
      <h1>Hello World</h1>
      <BemVindo nome="Raquel"/>
    </div>
  )
}