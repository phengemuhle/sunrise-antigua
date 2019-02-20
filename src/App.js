import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route } from 'react-router-dom'
import Header from "./componants/Header"
import HomePage from "./componants/HomePage"



class App extends Component {
  constructor(props){
    super();
    this.state ={

    }
  }



  render() {
    return (
      <div className="App">
        <Header/>
        <div>
          <Route path="/" exact render={() => <HomePage/>}/>
        </div>
      </div>
    );
  }
}

export default App;
