import { useEffect } from "react";

import banner from "../assets/logo.png"


export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-lg border-b border-blue-500/20 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href={`/`}>
          <img src={banner} alt="Logo" class="h-10 w-auto object-contain md:h-12 cursor-pointer" ></img>
          </a>
          <div
            className="w-7 h-5 relative cursor-pointer z-50 md:hidden text-black"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? "✕" : "☰"}
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {["home", "services", "projects", "about", "contact"].map((section) => (
              <a
                key={section}
                href={`${section}`}
                className="text-black-300 relative group"
              >
                <span className="group-hover:text-black transition-colors">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
                <span className="block h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-screen w-1/2 bg-white text-black transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-40 shadow-lg border-l border-blue-500/20`}
      >
        <div className="flex flex-col space-y-6 p-8">
          {["home", "about", "projects", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-black-300 relative group"
              onClick={() => setMenuOpen(false)}
            >
              <span className="group-hover:text-black transition-colors">
              {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
              <span className="block h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-37 transition-transform origin-left duration-300" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};