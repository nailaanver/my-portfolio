import Navbar from "./components/Navbar";
import './App.css'
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
<div className="vertical-socials">
  <div className="line"></div>
  <a href="#">Facebook</a>
  <a href="#">Twitter</a>
  <a href="#">LinkedIn</a>
</div>
    </div>
  );
}

export default App;