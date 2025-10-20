import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import { useSmoothScroll } from "./components/hooks/useSmoothScroll";
//import GlowingCursor from "./components/hooks/GlowCursor";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  useSmoothScroll(); // ✅ enable smooth scroll globally

  return (
    <div lang="en" className="!scroll-smooth">
      {/*<GlowingCursor />*/}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element not found");

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>
);
