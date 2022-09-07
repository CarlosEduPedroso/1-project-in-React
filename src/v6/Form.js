import React from 'react';
import ReactDOM from 'react-dom/client';
 export class Form extends React.Component{
  state = {nome:"t2", nota:20}
  enviarForm = () =>{
    this.setState({nome:this.state.nome,nota:this.state.nota+1})
  }
  editaCamp = (e) =>{
const {name,value} = e.target;
this.setState({[name]:value});
  }
  render(){
    const {nome, nota} = this.state;
  return (
          <form>
        <label>Nome:</label>
        <input name="nome" value={nome} onChange={this.editaCamp}/>
        <label>Nota:</label>
        <input name="nota" value={nota}onChange={this.editaCamp}/>
        <input type="button" value="Enviar"onClick={this.enviarForm}/>
      </form>
  )
    
       
  
 }
}

export default Form
