import './App.css';
import About from './components/about/about'
import Contact from './components/contact/contact'
import Intro from './components/intro/intro'
import Works from './components/works/works'

function App() {
  return (
    <div className="App">
      hello world
      <Intro/>
      <About/>
      <Works/>
      <Contact/>
    </div>
  );
}

export default App;
