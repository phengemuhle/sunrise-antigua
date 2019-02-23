import React, { Component } from 'react';
import './App.scss';
import { Link } from "react-router-dom"
import { Route } from "react-router-dom"
import Header from "./components/Header"
import logo from './components/sunriseLogo.png';
import HomePage from "./components/HomePage"
import Footer from './components/Footer';

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
        <img className="sunriseLogo" src={logo}></img> 
        <div>
          <Route path="/" exact render={() => <HomePage/>}/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
