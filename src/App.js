import React, { Component } from 'react';
import './App.css';
import fire from './config/fire';
import Login from './Login'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Pocetna from './Pocetna'
import {AuthProvider} from './Components/AuthContext'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
      else {
        this.setState({ user: null })
      }
    })
  }

  render() {
    return (
      <AuthProvider>
        <div className="page-container">
          <Navbar user={this.state.user} />
          <div className='fix'>
            {this.state.user ? (<Pocetna />) : (<Login />)}
          </div>
          <Footer />
        </div>
      </AuthProvider>
    );
  }
}

export default App;
