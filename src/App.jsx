import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/sections/home";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
  <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />;
  <Home />;
  </>
  )
}

export default App