import React, { Component } from 'react';
import NavBar from './components/NavBar';
// import ModalExample from './components/registerModal';
import * as axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {

  state = {
    isauthenticated: false,
    errors: {},
    user: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  changeUser = (event) => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    console.log('change user', user);
    this.setState({
      user
    });
  }

  newUser = () => {
    console.log('posting...')
    const user = this.state.user;
    axios.post('/users/register', user)
      .then(res => {
        console.log(res);
        console.log('posted', res.data);    
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
      <NavBar 
        auth={this.state.isauthenticated} 
        user={this.state.user} 
        onChange={this.changeUser} 
        newUser={this.newUser} 
        />
      {/* <ModalExample auth={this.state.isauthenticated}/> */}
       <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
