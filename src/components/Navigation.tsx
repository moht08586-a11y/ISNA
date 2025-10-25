import { Flower2, Menu, X, Heart, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group relative"
          >
            <Flower2 className="text-rose-500 w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
            <Heart className="absolute -top-1 left-6 w-3 h-3 text-pink-400 opacity-50 animate-pulse" />
            <span className="font-italiana text-2xl text-rose-900">Isna</span>
            <Sparkles className="absolute -top-1 right-0 w-3 h-3 text-rose-400 opacity-50 animate-pulse" />
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-rose-700 hover:text-rose-900 font-medium transition-colors duration-300 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-rose-700 hover:text-rose-900 font-medium transition-colors duration-300 relative group"
            >
              Gallery
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-rose-700 hover:text-rose-900 font-medium transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button className="relative px-6 py-2 bg-rose-500 text-white rounded-full font-medium hover:bg-rose-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 overflow-hidden">
              <Heart className="absolute top-0 right-2 w-3 h-3 opacity-30 animate-pulse" />
              Get Started
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-rose-700 hover:text-rose-900 transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-rose-700 hover:text-rose-900 font-medium transition-colors duration-300 py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left text-rose-700 hover:text-rose-900 font-medium transition-colors duration-300 py-2"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-rose-700 hover:text-rose-900 font-medium transition-colors duration-300 py-2"
            >
              Contact
            </button>
            <button className="w-full px-6 py-2 bg-rose-500 text-white rounded-full font-medium hover:bg-rose-600 transition-all duration-300 shadow-md">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
