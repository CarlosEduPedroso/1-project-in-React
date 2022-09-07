import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './Form'
import Lista from './Lista'

 export class App extends React.Component{
 state = {
  cadastros: [
    {nome: 'Eduardo', nota: 10},
    {nome: 'Maria', nota: 9},
    {nome:'Pedro', nota: 8},
  ]
 }
  render(){
   const {cadastros} = this.state;
  return (
    <div className="App">
      <Form />
      
      <Lista  listaCadastros = {cadastros}/>
    </div>
  )
    
       
  
 }
}

export default App
