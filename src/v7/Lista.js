import React from 'react';
import ReactDOM from 'react-dom/client';

 export const Lista = (props) => { 
    const listaElementos = props.listaCadastros.map((elemento) => <li>{elemento.nome}</li>)
    return  <ul>{listaElementos}</ul> };

   

export default Lista

