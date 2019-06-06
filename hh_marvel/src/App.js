import React from 'react';
import './App.css';
import LoginForm from './login/loginForm'
import { Provider } from 'react-redux';
import Store from './store/store';

function App() {
  return (
    <Provider store={Store}>
      <div className="App" >

        <LoginForm />
      </div> 
    </Provider>
  );
}

export default App;
