import React, {Component} from 'react';
import ScrollUpButton from "react-scroll-up-button"; 
/*import logo from './logo.svg';*/
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Home from './components/Home';
import About from './components/About';
//import Top from './components/Top';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';



class App extends Component{     
      render() {
  return (
  <div>
    
    <Home/>
    <Body/>
    <Header/>
    <About/>
    <ScrollUpButton style={{width: 50}} />
    <Skills/>
    <Experience/>
    <Contact/>
  </div>
  );
  }
}

export default App;
