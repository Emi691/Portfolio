import './App.scss';
import Navigation from './components/navigation/navigation';
import About from './components/about/about'
import Contact from './components/contact/contact'
import Intro from './components/intro/intro'
import Works from './components/works/works'

function App() {
  return (
    <div className="App">
      <Navigation/>
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
