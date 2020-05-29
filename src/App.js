import React, { Component } from 'react';
import logo from './logo.svg';

import Header from './components/Header';
import "./styles.css"; //Importação do arquivo da raiz da pasta SRC
import Main from './pages/main';

class App extends Component {
  render(){
    return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Main/>
      </header>
    </div>
    );
  }
}

export default App;
