import Hero from './components/Hero.js';
import Navbar from './components/navbar.js';
import ExperienceSection from './components/Experience.js';
import Skills from './components/Skills.js';
import Events from './components/Events.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Socials from './components/socials.js';
import Work from './components/work.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
      </header>
      <br />
      <hr class="hr-1"/>
      <About/>
      <Skills />
      <ExperienceSection/>
      <Work />
      <Projects/>
      <Events />
      <Socials />
    </div>
  );
}

export default App;
