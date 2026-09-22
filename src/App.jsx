import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer>
        <p>© 2026 Sania Tagheja. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
