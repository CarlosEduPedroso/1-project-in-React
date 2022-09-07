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

 };
 insereCadastro = (cadastro) => {this.setState({cadastros:[...this.state.cadastros,cadastro]})}
 removeCadastro = (indice) => {
  let {cadastros} = this.state;
  this.setState({cadastros:cadastros.filter((cadastros, i) => {return i !== indice} )});
 }
 render(){
   const {cadastros} = this.state;
  return (
    <div className="App">
      <Form insereCadastro = {this.insereCadastro} />
      
      <Lista  listaCadastros = {cadastros} removeCadastro = {this.removeCadastro}/>
    </div>
  )
    
       
  
 }
}

export default App
