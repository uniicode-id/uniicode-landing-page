import { useState } from 'react';
import { Link, Outlet } from 'react-router';
import Button from "@components/Button.jsx";
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/merch", label: "Merch", disabled: true },
    { to: "/events", label: "Events" },
    { to: "/projects", label: "Projects", disabled: true }
  ];
  
  return (
    <>
      <nav className="bg-brand-dark py-4 md:py-10 font-pixel relative">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden absolute right-4 top-4 p-2"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center items-center gap-12">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.disabled ? (
                <Button disabled>{item.label}</Button>
              ) : (
                <Link to={item.to}>
                  <Button>{item.label}</Button>
                </Link>
              )}
            </li>
          ))}
        </ul>
        
        {/* Mobile Menu */}
        <ul
          className={`
            md:hidden
            flex flex-col items-center gap-4
            transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'}
          `}
        >
          {navItems.map((item) => (
            <li key={item.label}>
              {item.disabled ? (
                <Button disabled>{item.label}</Button>
              ) : (
                <Link to={item.to} onClick={() => setIsMenuOpen(false)}>
                  <Button>{item.label}</Button>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      
      <main className="min-h-screen">
        <Outlet />
      </main>
    </>
  );
}

export default Navbar;