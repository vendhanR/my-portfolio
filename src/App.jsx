import { useState } from 'react'
import './App.css'
import Home from './container/Home'
import AboutMe from './container/AboutMe';
import Projects from './container/Projects';
import Contact from './container/Contact';

function App() {

  return (
    <>
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  )
}

export default App;
