import React from 'react';
import './App.scss';
import Nav from './Components/Nav/Nav';
import Landing from './Views/Landing/Landing';
import About from './Views/About/About';
import Portfolio from './Views/Portfolio/Portfolio';
import ParallaxBg from './Components/ParallaxBg/ParallaxBg';
import ScrollTop from './Components/ScrollTop/ScrollTop';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <ParallaxBg />
        <ScrollTop/>
        <Landing/>
        <About/>
        <Portfolio/>
      </div>
    );
  }
}

export default App;
