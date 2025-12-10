import React, { useState } from 'react';
import { Menu as MenuIcon, X, Phone, ShoppingBag } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Story', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b border-clay-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#home" 
              onClick={(e) => handleScroll(e, '#home')}
              className="flex items-center gap-3 group"
            >
              <div className="w-14 h-14 text-clay-700 transition-transform transform group-hover:scale-110 duration-300">
                <Logo />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl text-clay-700 leading-tight">Meen Satti</span>
                <span className="text-xs text-stone-500 uppercase tracking-wider">Seafood Restaurant</span>
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`text-sm font-medium transition-colors duration-200 border-b-2 ${
                  activeSection === link.href.substring(1)
                    ? 'text-clay-700 border-clay-600'
                    : 'text-stone-600 border-transparent hover:text-clay-600 hover:border-clay-200'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
             <a 
              href="tel:09342951596"
              className="flex items-center gap-2 text-clay-700 font-semibold hover:text-clay-900"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
            <a 
              href="#menu"
              onClick={(e) => handleScroll(e, '#menu')}
              className="bg-clay-700 hover:bg-clay-800 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-clay-200 flex items-center gap-2 transition-transform transform hover:scale-105 cursor-pointer"
            >
              <ShoppingBag size={18} />
              Order Online
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-clay-700 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block px-3 py-4 text-base font-medium text-stone-700 hover:text-clay-700 hover:bg-clay-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 pb-4 px-3 flex flex-col gap-3">
               <a 
                href="tel:09342951596"
                className="w-full flex justify-center items-center gap-2 border border-clay-700 text-clay-700 px-4 py-3 rounded-lg font-bold"
              >
                <Phone size={18} /> Call 093429 51596
              </a>
              <a 
                href="#menu"
                onClick={(e) => handleScroll(e, '#menu')}
                className="w-full flex justify-center items-center gap-2 bg-clay-700 text-white px-4 py-3 rounded-lg font-bold"
              >
                <ShoppingBag size={18} /> Order Online
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;