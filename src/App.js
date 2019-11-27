import React, { Component } from 'react'
import Navigation from './components/navigation/Navigation'
import Logo from './components/logo/Logo'
import ImageLinkForm from './components/imagelinkform/ImageLinkForm'
import './App.css'
import 'tachyons'
import Particles from 'react-particles-js'
import particlesConfig from './particles/particlesConfig.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Particles params={particlesConfig} className='particles' />
        <Navigation />
        <Logo />
        <ImageLinkForm />
      </div>
    );
  }
}

export default App;
