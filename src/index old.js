import React from 'react';
import ReactDOM from 'react-dom/client';
const G =() => {

  return  <div>também é uma frase</div>

}
class F extends React.Component{
  render(){
  return( 
    <>
       <b>Agora é uma classe: {this.props.valor} </b>
       <p>{this.props.v2}</p>
         <G />
         </>
)
}
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1> <F v2 ="parametro" valor="um parâmetro"/> </h1>
    <p>criar outro elemento</p>
    <p><F/></p>
    <p><F valor="outro parâmetro"/></p>
  </React.StrictMode>
);


