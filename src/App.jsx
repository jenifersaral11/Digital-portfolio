import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ResumePreview from './components/ResumePreview';
import Contact from './components/Contact';

function App() {
  return (
    <div className="page-shell">
      <Navbar />
      <Hero />
      <main>
        <About />
        <Skills />
        <Projects />
        <ResumePreview />
        <Contact />
      </main>
    </div>
  );
}

export default App;
