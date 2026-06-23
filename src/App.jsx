import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Achievements from './components/sections/Achievements';
import Experience from './components/sections/Experience';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';

// Home component that composes all sections for the single-page layout
const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Achievements />
      <Services />
      <Contact />
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        {/* If we wanted multi-page in the future, we could add routes here */}
      </Route>
    </Routes>
  );
}

export default App;
