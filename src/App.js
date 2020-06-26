import React, { Component } from 'react';
import RegistrationPage from './RegistrationPage';
import LoginPage from './LoginPage';
import './App.css';

class App extends Component{
  render(){
  return (
    <div>
      <RegistrationPage />
      <LoginPage />
    </div>
  );
  }
}

export default App;
