import React from 'react';
import ReactDOM from 'react-dom/client';
 export class App extends React.Component{
  state = {nome:"teste", nota:1}
  render(){
    const {nome, nota} = this.state;
  return (
    <div className="App">
      <form>
        <label>Nome:</label>
        <input name="nome" value={nome}/>
        <label>Email:</label>
        <input name="email" value={nota}/>
        <input type="submit" value="Enviar"/>
      </form>
    </div>
  )
    
       
  
 }
}

export default App
