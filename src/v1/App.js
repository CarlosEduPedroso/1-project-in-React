import React from 'react';
import ReactDOM from 'react-dom/client';
const G =() => {

  return  <div>também é uma frase</div>

}
 export class App extends React.Component{
  render(){
  return( 
    <>
       <b>Agora vem do App {this.props.valor} </b>
       <p>{this.props.v2}</p>
         <G />
         </>
  )
 }
}

export default App
