import React, { Component } from 'react'
import Navigation from './components/navigation/Navigation'
import Logo from './components/logo/Logo'
import ImageLinkForm from './components/imagelinkform/ImageLinkForm'
import './App.css'
import 'tachyons'
import Particles from 'react-particles-js'

const particlesConfig = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    },
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    },
    interactivity: {
      onhover: {
        enable: false,
        mode: "repulse"
      },
    }
  }
}

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
