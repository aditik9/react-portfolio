import Hero from './components/Hero.js';
import NavBar from './components/navbar.js';
//import ExperienceSection from './components/Experience.js';
import Skills from './components/Skills.js';
import Events from './components/Events.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Socials from './components/socials.js';
import Work from './components/work.js';
import Footer from './components/contact.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Hero />
      </header>
      <br />
      <About/>
      <Skills />
      <Work />
      <Projects/>
      <Events />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
