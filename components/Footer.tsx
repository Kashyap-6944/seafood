import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Logo } from './Logo';

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-16 h-16 text-clay-500">
                 <Logo />
               </div>
               <div>
                  <h3 className="text-2xl font-serif font-bold text-white leading-none">Meen Satti</h3>
                  <span className="text-xs text-stone-500 uppercase tracking-widest">Seafood Restaurant</span>
               </div>
            </div>
            
            <p className="mb-6 max-w-sm">
              The ultimate seafood experience. Authentic flavors, home-style cooking, and the freshest catch in Chennai.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/explore/tags/meensatti/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-clay-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/search/top?q=Meen%20Satti%20Seafood%20Restaurant" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-clay-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com/search?q=Meen%20Satti" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-clay-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="hover:text-clay-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#menu" onClick={(e) => handleScroll(e, '#menu')} className="hover:text-clay-400 transition-colors">Menu</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="hover:text-clay-400 transition-colors">Our Story</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="hover:text-clay-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Services</h4>
             <ul className="space-y-2">
              <li>Dine-in</li>
              <li>Kerbside Pickup</li>
              <li>No-contact Delivery</li>
              <li>Outdoor Catering</li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Meen Satti Restaurant. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with ❤️ for Seafood Lovers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;