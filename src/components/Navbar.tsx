import React from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-primary text-white shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <h1 className="text-xl font-bold">JS Minifier Tool</h1>
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
        <ul
          className={`lg:flex lg:gap-6 lg:static absolute left-0 w-full bg-primary lg:bg-transparent transition-transform ${
            isOpen ? "top-16" : "-top-96"
          }`}
        >
          <li><a href="#about" className="block py-2 text-center lg:inline">About</a></li>
          <li><a href="#features" className="block py-2 text-center lg:inline">Features</a></li>
          <li><a href="#use-cases" className="block py-2 text-center lg:inline">Use Cases</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
