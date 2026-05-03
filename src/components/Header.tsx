/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header 
      data-aos="fade-down"
      className="bg-primary-container text-white shadow-lg sticky top-0 z-50 h-20 w-full flex justify-between items-center px-4 md:px-12"
    >
      <img src="/assets/agro limk logo png3.png" alt="AgroLink Logo" className="h-14 w-auto" />
      
      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-8 font-inter text-sm tracking-tight">
        <Link className="text-secondary-container font-semibold border-b-2 border-secondary-container pb-1" to="/">Home</Link>
        <Link className="text-white/80 hover:text-white transition-all hover:bg-white/10 rounded-full px-3 py-1" to="/products">Products</Link>
        <a className="text-white/80 hover:text-white transition-all hover:bg-white/10 rounded-full px-3 py-1" href="/#about">About</a>
        <a className="text-white/80 hover:text-white transition-all hover:bg-white/10 rounded-full px-3 py-1" href="/#why">Why us</a>
      </nav>
      
      <a href="https://wa.me/61459771636" className="hidden md:block bg-secondary-container text-primary-container font-semibold px-6 py-2.5 rounded-full hover:scale-95 active:scale-100 duration-200 transition-all text-sm">
        DM Whatsapp
      </a>

      {/* Hamburger Button */}
      <button className="md:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="absolute top-20 left-0 w-full bg-primary-container text-white flex flex-col items-center gap-6 py-8 md:hidden">
          <Link className="text-secondary-container font-semibold" to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link className="text-white/80" to="/products" onClick={() => setIsOpen(false)}>Products</Link>
          <a className="text-white/80" href="/#about" onClick={() => setIsOpen(false)}>About</a>
          <a className="text-white/80" href="/#why" onClick={() => setIsOpen(false)}>Why us</a>
          <a href="https://wa.me/61459771636" className="bg-secondary-container text-primary-container font-semibold px-6 py-2.5 rounded-full text-sm">
            DM Whatsapp
          </a>
        </nav>
      )}
    </header>
  );
}
