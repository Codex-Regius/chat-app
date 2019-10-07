import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">

      <Contact
       name="Anita Sutton" 
       avatar="https://media.istockphoto.com/photos/fashion-portrait-of-a-modern-girl-picture-id507838634" 
       online
      /> 
      
      <Contact
      name="Clara Sutton" 
      avatar="https://media.istockphoto.com/photos/fashion-portrait-of-a-modern-girl-picture-id507838634" 
      
     /> 

      <Contact
       name="Françoise Sutton" 
       avatar="https://media.istockphoto.com/photos/fashion-portrait-of-a-modern-girl-picture-id507838634" 
       online
      /> 
    </div>
  );
}

export default App;
