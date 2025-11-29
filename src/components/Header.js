import React from 'react';
import logo from '../assets/cloudk8s-logo-transparent.webp';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-sm border-b border-indigo-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="CloudK8s" className="w-28 h-auto" />
        </div>
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <a href="#services" className="text-indigo-700 hover:text-purple-600 font-medium transition">Services</a>
            </li>
            <li>
              <a href="#contact" className="inline-block px-4 py-2 border-2 border-purple-600 text-purple-600 rounded-md hover:bg-purple-600 hover:text-white transition duration-300 font-semibold">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
