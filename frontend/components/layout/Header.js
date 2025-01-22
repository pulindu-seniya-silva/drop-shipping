'use client'; // This marks the file as a client component

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between font-semibold p-1 bg-white shadow-md">
      {/* Logo */}
      <Link className="text-primary font-semibold text-2xl" href="">
        ClickShop Express
      </Link>

      {/* Navigation Links (Desktop) */}
      <nav className="hidden md:flex items-center gap-8 text-gray-500 font-semibold">
        <Link href={''}>Home</Link>
        <Link href={''}>Product Menu</Link>
        <Link href={''}>About</Link>
        <Link href={''}>Contact</Link>
        <Link href={''} className="bg-primary rounded-full text-white px-8 py-2">
          Login
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation (Hidden by default, shown when toggled) */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-white shadow-md py-4 px-6 space-y-4 ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        {/* Close button for mobile menu */}
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-gray-500">Menu</h2>
          <button
            onClick={toggleMenu}
            className="text-gray-500 focus:outline-none"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu links */}
        <Link href={''} className="block text-gray-500 hover:text-primary">
          Home
        </Link>
        <Link href={''} className="block text-gray-500 hover:text-primary">
          Product Menu
        </Link>
        <Link href={''} className="block text-gray-500 hover:text-primary">
          About
        </Link>
        <Link href={''} className="block text-gray-500 hover:text-primary">
          Contact
        </Link>
        <Link
          href={''}
          className="block bg-primary rounded-full text-white px-8 py-2 text-center"
        >
          Login
        </Link>
      </div>
    </header>
  );
}
