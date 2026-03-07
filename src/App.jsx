import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
  <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
  )
}

export default App