import React, { useState } from 'react';
import { Code2, Menu, X, Search, ArrowUpDown, List, GitBranch, Home } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { to: '/home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { to: '/search', label: 'Search', icon: <Search className="w-4 h-4" /> },
    { to: '/sort', label: 'Sort', icon: <ArrowUpDown className="w-4 h-4" /> },
    { to: '/queue', label: 'Queue', icon: <List className="w-4 h-4" /> },
    { to: '/binaryTree', label: 'Binary Tree', icon: <GitBranch className="w-4 h-4" /> }
  ];

  // For demonstration purposes - replace with actual Link component
  const Link = ({ to, children, onClick, className }) => (
    <a href={to} onClick={onClick} className={className}>
      {children}
    </a>
  );

  return (
    <div className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-lg shadow-slate-900/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link to="/home" className="flex items-center space-x-3 group">
            <div className="relative">
              <Code2 className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 group-hover:rotate-12 transform" />
              <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
              DSA Algorithm Manager
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-1">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.to}
                    className="group relative flex items-center space-x-2 px-4 py-2 rounded-lg text-slate-300 hover:text-white transition-all duration-300 hover:bg-white/5"
                  >
                    {/* Icon */}
                    <span className="text-slate-400 group-hover:text-cyan-400 transition-colors duration-300">
                      {item.icon}
                    </span>
                    
                    {/* Text */}
                    <span className="font-medium">{item.label}</span>
                    
                    {/* Hover effect background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    
                    {/* Active indicator */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 pb-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav>
            <ul className="space-y-2 pt-4 border-t border-slate-700/50">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex items-center space-x-3 px-4 py-3 rounded-lg text-slate-300 hover:text-white transition-all duration-300 hover:bg-white/5"
                  >
                    {/* Icon */}
                    <span className="text-slate-400 group-hover:text-cyan-400 transition-colors duration-300">
                      {item.icon}
                    </span>
                    
                    {/* Text */}
                    <span className="font-medium">{item.label}</span>
                    
                    {/* Mobile hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Animated border gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
    </div>
  );
}

export default Navbar;