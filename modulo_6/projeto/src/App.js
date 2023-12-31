import React, {useState,useEffect,useMemo,useCallback} from 'react';

// ///////////// Aula 48

// function App() {

//   const [tarefas,setTarefas] = useState([
//     'Pagar a conta de luz',
//     'Estudar React Hooks'
//   ]);
//   const [input,setInput] = useState('');

//   function handleAdd(){
//     setTarefas([...tarefas,input])
//     setInput('');
//   }

//   return (
//     <div>
//       <ul>
//       {tarefas.map(tarefa => (
//                             <li key={tarefa}> {tarefa} </li>
//                               )
//                   )
//       }
//       </ul>

//       <input type="text" value={input} onChange={ e => setInput( e.target.value )}></input>
//       <button type="button" onClick={handleAdd}>Adicionar</button>

//     </div>
//   );
// }

// export default App;

//////////// </Aula 48>

// // <Aula 50>

// function App() {

//   const [tarefas,setTarefas] = useState([
//     'Pagar a conta de luz',
//     'Estudar React Hooks'
//   ]);
//   const [input,setInput] = useState('');

//   useEffect(()=>{
//     const tarefasStorage = localStorage.getItem('tarefas');

//     if(tarefasStorage){
//       setTarefas(JSON.parse(tarefasStorage));
//     }

//     //return () => {};

//   }, [])

//   useEffect(() => {
//                     localStorage.setItem('tarefas', JSON.stringify(tarefas))
//                   }, [tarefas]
//             )

//   function handleAdd(){
//     setTarefas([...tarefas,input])
//     setInput('');
//   }

//   return (
//     <div>
//       <ul>
//       {tarefas.map(tarefa => (
//                             <li key={tarefa}> {tarefa} </li>
//                               )
//                   )
//       }
//       </ul>

//       <input type="text" value={input} onChange={ e => setInput( e.target.value )}></input>
//       <button type="button" onClick={handleAdd}>Adicionar</button>

//     </div>
//   );
// }

// export default App;

// // </Aula 50>

// /////////////// <Aula 51>

// function App() {

//     const [tarefas,setTarefas] = useState([
//       'Pagar a conta de luz',
//       'Estudar React Hooks'
//     ]);
//     const [input,setInput] = useState('');
  
//     useEffect(()=>{
//       const tarefasStorage = localStorage.getItem('tarefas');
  
//       if(tarefasStorage){
//         setTarefas(JSON.parse(tarefasStorage));
//       }
  
//       //return () => {};
  
//     }, [])
  
//     useEffect(() => {
//                       localStorage.setItem('tarefas', JSON.stringify(tarefas))
//                     }, [tarefas]
//               )
  
//     function handleAdd(){
//       setTarefas([...tarefas,input])
//       setInput('');
//     }
    
//     const totalTarefas = useMemo(() => tarefas.length, [tarefas]);

//     return (
//       <div>
//         <ul>
//         {tarefas.map(tarefa => (
//                               <li key={tarefa}> {tarefa} </li>
//                                 )
//                     )
//         }
//         </ul>
        
//         <br/>
//         <strong>Você tem {totalTarefas} tarefas</strong>
//         <br/>
//         <input type="text" value={input} onChange={ e => setInput( e.target.value )}></input>
//         <button type="button" onClick={handleAdd}>Adicionar</button>
  
//       </div>
//     );
//   }
  
// export default App;

// //////////////  </Aula 51>

function App() {

  const [tarefas,setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React Hooks'
  ]);
  const [input,setInput] = useState('');

  useEffect(()=>{
    const tarefasStorage = localStorage.getItem('tarefas');

    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage));
    }

    //return () => {};

  }, [])

  useEffect(() => {
                    localStorage.setItem('tarefas', JSON.stringify(tarefas))
                  }, [tarefas]
            )

  const handleAdd = useCallback(() => {
    setTarefas([...tarefas,input]);
    setInput('');
  }, [input, tarefas]);
  
  const totalTarefas = useMemo(() => tarefas.length, [tarefas]);

  return (
    <div>
      <ul>
      {tarefas.map(tarefa => (
                            <li key={tarefa}> {tarefa} </li>
                              )
                  )
      }
      </ul>
      
      <br/>
      <strong>Você tem {totalTarefas} tarefas</strong>
      <br/>
      <input type="text" value={input} onChange={ e => setInput( e.target.value )}></input>
      <button type="button" onClick={handleAdd}>Adicionar</button>

    </div>
  );
}

export default App;