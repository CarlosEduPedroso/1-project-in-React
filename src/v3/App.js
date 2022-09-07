import React from 'react';
import ReactDOM from 'react-dom/client';
 export class App extends React.Component{
  state = {nome:"t2", nota:3}
  enviarForm = () =>{
    this.setState({nome:this.state.nome,nota:this.state.nota+1})
  }
  render(){
    const {nome, nota} = this.state;
  return (
    <div className="App">
      <form>
        <label>Nome:</label>
        <input name="nome" value={nome}/>
        <label>Email:</label>
        <input name="email" value={nota}/>
        <input type="button" value="Enviar"onClick={this.enviarForm}/>
      </form>
    </div>
  )
    
       
  
 }
}

export default App
