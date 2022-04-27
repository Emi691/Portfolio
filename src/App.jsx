import './App.scss';
import {useState} from 'react';
import Navigation from './components/navigation/navigation';
import Side from './components/navigation/side';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Intro from './components/intro/intro';
import Works from './components/works/works';

function App() {
  const [sidebar, setSidebar] = useState(true)
  return (
    <div className="App">
      <Navigation active={sidebar} setActive={setSidebar}/>
      <Side/>
      <div className="components">
        <Intro/>
        <About/>
        <Works/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
