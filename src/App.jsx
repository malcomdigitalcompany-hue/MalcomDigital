import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/sections/home";
import { Services } from "./components/sections/services";
import { About } from "./components/sections/about";
import { Contact } from "./components/sections/contact";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
  <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />;
  <Home />;
  <Services />;
  <About />;
  <Contact />;
  </>
  )
}

export default App