import React, { Component } from 'react';
import NavBar from './components/NavBar';
import ModalExample from './components/registerModal';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {

  state = {
    isauthenticated: false
  }

  render() {
    return (
      <div className="App">
      <NavBar auth={this.state.isauthenticated}/>
      <ModalExample/>
       <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
