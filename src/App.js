import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import Landing from './Views/Landing/Landing';
import About from './Views/About/About';
import Portfolio from './Views/Portfolio/Portfolio';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Landing/>
        <About/>
        <Portfolio/>
      </div>
    );
  }
}

export default App;
