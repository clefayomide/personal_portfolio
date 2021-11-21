import { createContext, useState } from "react";
import SoundPlayer from "./Components/SoundPlayer";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";

export const Context = createContext();

function App() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <Context.Provider value={{ isPlaying, setIsPlaying }}>
      <div className="App">
        <SoundPlayer />
        <header className="header">
          <Header />
        </header>
        <main className="main">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/experience" element={<Experience />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </main>
        {/* <footer className="footer">
          <div className="footer-text-container">
            <p className="accolades">
              Designed by{" "}
              <a
                href="https://www.behance.net/Ibrahim_Shamss"
                className="designer"
              >
                Ibrahim Shamss.
              </a>{" "}
              Coded by{" "}
              <a
                href="https://www.linkedin.com/in/victor-olorunfemi-94a63a142/"
                className="coder"
              >
                Olorunfemi Victor
              </a>
            </p>
          </div>
        </footer> */}
      </div>
    </Context.Provider>
  );
}

export default App;
