import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Social from "./components/Social";

function App() {
  return (
    <div >
      <NavBar/>
      <Home/>
      <About/>
      <Social/>
      <Project/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
