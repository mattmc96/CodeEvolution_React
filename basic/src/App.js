import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      {/* <Greet name= "Vaibhav" heroName = "Batman">
        <p>these are children props</p>
      </Greet>
      <Greet name= "Clark" heroName = "Bruce">
        <button>Bruce</button>  
      </Greet>
      <Greet name= "Diana" heroName = "Wonder Woman"/>

      <Welcome name= "Diana" heroName = "Wonder Woman"/> */}
      <Message/>

    </div>
  );
}

export default App;
