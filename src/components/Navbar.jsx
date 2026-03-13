import { useEffect } from "react";
import banner from "../assets/logo.png";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const navItems = ["home", "services", "about", "contact"];
  const homeBase = import.meta.env.BASE_URL;

  return (
    <nav className="fixed top-0 z-40 w-full border-b border-blue-500/20 bg-white/80 shadow-lg backdrop-blur-lg">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid h-16 grid-cols-3 items-center">
          {/* Left */}
          <div className="flex items-center justify-start">
            <a href={`${homeBase}#home`} className="hidden md:block">
              <img
                src={banner}
                alt="Malcom Digital logo"
                className="h-16 w-auto cursor-pointer object-contain"
              />
            </a>

            <button
              className="relative z-50 text-2xl text-black md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Center */}
          <div className="hidden md:flex items-center justify-center gap-8">
            {navItems.map((section) => (
              <a
                key={section}
                href={`${homeBase}#${section}`}
                className="group relative text-black"
              >
                <span className="text-base transition-colors group-hover:text-blue-600">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
                <span className="block h-0.5 origin-center scale-x-0 bg-blue-500 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          {/* Right */}
          <div className="hidden md:flex items-center justify-end">
            <a
              href={`${homeBase}#services`}
              className="rounded-sm bg-blue-600 px-3 py-1.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_0_15px_rgba(38,38,220,0.4)]"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 z-40 h-screen w-1/2 transform border-l border-blue-500/20 bg-white text-black shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-6 p-8 pt-20">
          {["home", "services", "about", "contact"].map((section) => (
            <a
              key={section}
              href={`${homeBase}#${section}`}
              className="group relative"
              onClick={() => setMenuOpen(false)}
            >
              <span className="transition-colors group-hover:text-blue-600">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
              <span className="block h-0.5 origin-left scale-x-0 bg-blue-500 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};