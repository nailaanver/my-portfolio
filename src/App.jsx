import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

import AllProjects from "./pages/AllProjects";

import "./App.css";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />
              <Skills></Skills>
              <Contact></Contact>
              

              <div className="vertical-socials">
                <div className="line"></div>
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
                <div className="line"></div>
              </div>
            </>
          }
        />

        <Route path="/projects" element={<AllProjects />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;