import './App.scss';
import {useState} from 'react';
import Navigation from './components/navigation/navigation';
import Side from './components/navigation/side';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Intro from './components/intro/intro';
import Works from './components/works/works';

function App() {
  const [active, setActive] = useState(true)
  return (
    <div className="App">
      <Navigation active={active} setActive={setActive}/>
      <Side active={active} setActive={setActive}/>
      <div className={`components + ${active === true ? 'active' : ''}`}>
        <Intro/>
        <About/>
        <Works/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
