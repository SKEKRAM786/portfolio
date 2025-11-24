import { Hero } from './components/hero';
import { About } from './components/about';
import { Projects } from './components/projects';
import { Skills } from './components/skills';
import { Education } from './components/education';
import { Contact } from './components/contact';
import { Navigation } from './components/navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}