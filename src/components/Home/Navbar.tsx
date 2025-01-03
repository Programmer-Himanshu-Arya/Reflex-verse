import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import classNames from "classnames";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const handleNavigation = (path: string) => {
    closeMenu();
    window.location.href = path;
  };

  return (
    <nav className="bg-forest-light shadow-lg fixed w-full top-[-1px] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img src="/logo.png" className="w-56" alt="Brand Logo" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {["How it works", "Portfolio"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              className="text-mint/80 hover:text-mint-dark transition-colors"
            >
              {item}
            </a>
          ))}
          <button
            className="bg-mint-dark text-forest-light px-6 py-2 rounded-lg hover:bg-mint transition-all duration-300 font-medium"
            onClick={() => handleNavigation("/form")}
          >
            Start Your Project
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden inline-flex items-center p-2 rounded-md text-emerald-100 hover:text-white hover:bg-emerald-700 focus:ring-2 focus:ring-inset focus:ring-white transition-colors"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Toggle Menu</span>
          {isOpen ? <X size={24} /> : <Menu size={24} color="#7AE695" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={classNames(
          "fixed inset-0 bg-black bg-opacity-50 transition-opacity md:hidden",
          { "opacity-100": isOpen, "opacity-0 pointer-events-none": !isOpen }
        )}
        onClick={closeMenu}
      />

      {/* Mobile Menu Panel */}
      <div
        className={classNames(
          "fixed top-0 right-0 w-full h-full bg-forest-light transform transition-transform md:hidden",
          { "translate-x-0": isOpen, "translate-x-full": !isOpen }
        )}
      >
        <div className="absolute top-0 right-0 p-4">
          <button
            onClick={closeMenu}
            className="inline-flex items-center p-2 rounded-md text-emerald-100 hover:text-white hover:bg-emerald-700 focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span className="sr-only">Close Menu</span>
            <X size={32} />
          </button>
        </div>
        <ul className="flex flex-col gap-10 text-center text-6xl mt-20">
          {["How it works", "Services", "Portfolio", "Testimonials", "Contact Us"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-mint/80 hover:underline transition-colors"
                onClick={closeMenu}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="bg-mint-dark text-3xl w-full py-4 text-forest-light rounded-lg hover:bg-mint transition-all duration-300 font-medium mt-12"
          onClick={() => handleNavigation("/form")}
        >
          Start Your Project
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
