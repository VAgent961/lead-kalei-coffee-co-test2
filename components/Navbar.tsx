'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 backdrop-blur-sm transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif text-ink">Kalei Coffee Co.</Link>
        <button
          className="md:hidden text-ink focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
        </button>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} absolute md:relative top-full left-0 w-full md:w-auto bg-background md:bg-transparent`}>
          <div className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0">
            <Link href="#about" className="text-ink hover:text-primary py-2 md:py-0" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="#coffee" className="text-ink hover:text-primary py-2 md:py-0" onClick={() => setIsOpen(false)}>Coffee</Link>
            <Link href="#visit" className="text-ink hover:text-primary py-2 md:py-0" onClick={() => setIsOpen(false)}>Visit</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
