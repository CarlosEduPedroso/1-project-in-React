import React from 'react';
import ReactDOM from 'react-dom/client';

 export const Lista = (props) => { 
    const listaElementos = props.listaCadastros.map((elemento,i) => <li>
        {elemento.nome} - {elemento.nota} - 
    <button onClick={()=> props.removeCadastro(i)}> Remover {i}
    </button>
    </li>)
    return  <ul>{listaElementos}</ul> };

   

export default Lista

