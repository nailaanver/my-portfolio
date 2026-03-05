import Navbar from "./components/Navbar";
import './App.css'
import Hero from "./components/Hero";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
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