import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/sections/home";
import { Services } from "./components/sections/services";
import { About } from "./components/sections/about";
import { Contact } from "./components/sections/contact";
import { MockupRequest } from "./pages/MockupRequest";

function MainSite() {
  return (
    <>
      <Home />
      <Services />
      <About />
      <Contact />
    </>
  );
}

function AppLayout({ menuOpen, setMenuOpen, children }) {
  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {children}
    </>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter basename="/MalcomDigital">
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
              <MainSite />
            </AppLayout>
          }
        />
        <Route
          path="/mockup-request"
          element={
            <AppLayout menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
              <MockupRequest />
            </AppLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;