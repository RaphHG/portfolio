import { Menu, X, Terminal, Network, Shield } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-slate-900 text-white z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Terminal className="h-6 w-6" />
            <span className="text-xl font-bold">Portfolio SISR</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#accueil" className="hover:text-blue-400 transition">Accueil</a>
            <a href="#competences" className="hover:text-blue-400 transition">Compétences</a>
            <a href="#projets" className="hover:text-blue-400 transition">Projets</a>
            <a href="#veille" className="hover:text-blue-400 transition">Veille</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3">
            <div className="flex flex-col space-y-3">
              <a href="#accueil" className="hover:text-blue-400 transition">Accueil</a>
              <a href="#competences" className="hover:text-blue-400 transition">Compétences</a>
              <a href="#projets" className="hover:text-blue-400 transition">Projets</a>
              <a href="#veille" className="hover:text-blue-400 transition">Veille</a>
              <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}