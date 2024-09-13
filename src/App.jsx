import { useEffect, useState } from 'react';
import './App.css'
import Home from './components/Home';
import AbouteMe from './components/AbouteMe';
import Cantact from './components/Cantact';
import Projects from './components/Projects';
import Lenis from 'lenis';
import Navbar from './components/Navbar';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const lenis = new Lenis();

    function ref(time) {
      lenis.raf(time);
      requestAnimationFrame(ref);
    }
    requestAnimationFrame(ref);
  }, []);

  return (
    <>
    <Navbar isDark={isDark} />
      <Home isDark={isDark} setIsDark={setIsDark}/>
      <AbouteMe isDark={isDark} />
      <Projects isDark={isDark} />
      <Cantact isDark={isDark} />
    </>
  )
}

export default App;
