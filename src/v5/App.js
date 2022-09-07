import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './Form'
import Lista from './Lista'

 export class App extends React.Component{
 
  render(){
   
  return (
    <div className="App">
      <Form />
      
      <Lista />
    </div>
  )
    
       
  
 }
}

export default App
