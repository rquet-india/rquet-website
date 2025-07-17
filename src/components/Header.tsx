'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Github } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center relative" style={{ padding: 'var(--space-md) 0' }}>
          <Link href="/" className="font-bold text-xl hover:opacity-80 transition-opacity" style={{ color: 'var(--primary)' }}>
            Rquet
          </Link>

          {/* Desktop Navigation */}
          <div className="absolute right-0 flex items-center" style={{ gap: 'var(--space-xl)' }}>
            <nav className="hidden md:flex" style={{ gap: 'var(--space-xl)' }}>
              <Link href="/" className="font-medium transition-colors hover:text-white" style={{ color: 'var(--text-secondary)' }}>
                Home
              </Link>
              <Link href="/tournaments" className="font-medium transition-colors hover:text-white" style={{ color: 'var(--text-secondary)' }}>
                Tournaments
              </Link>
              <Link href="/about" className="font-medium transition-colors hover:text-white" style={{ color: 'var(--text-secondary)' }}>
                About
              </Link>
              <Link href="/contact" className="font-medium transition-colors hover:text-white" style={{ color: 'var(--text-secondary)' }}>
                Contact
              </Link>
            </nav>

            <div className="flex items-center" style={{ gap: 'var(--space-md)' }}>
              {/* GitHub Link */}
              <a
                href="https://github.com/rquet-india/rquet-website"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost p-2 rounded-lg"
                title="Edit this website on GitHub"
              >
                <Github size={20} />
              </a>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="btn btn-ghost p-2 rounded-lg"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-4 pb-3 space-y-2 sm:px-3 backdrop-blur-sm border-t" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}>
              <Link href="/" className="block px-4 py-3 rounded-lg transition-all hover:bg-gray-800" style={{ color: 'var(--text-secondary)' }}>
                Home
              </Link>
              <Link href="/tournaments" className="block px-4 py-3 rounded-lg transition-all hover:bg-gray-800" style={{ color: 'var(--text-secondary)' }}>
                Tournaments
              </Link>
              <Link href="/about" className="block px-4 py-3 rounded-lg transition-all hover:bg-gray-800" style={{ color: 'var(--text-secondary)' }}>
                About
              </Link>
              <Link href="/contact" className="block px-4 py-3 rounded-lg transition-all hover:bg-gray-800" style={{ color: 'var(--text-secondary)' }}>
                Contact
              </Link>
              <a
                href="https://github.com/rquet-india/rquet-website"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-3 rounded-lg transition-all hover:bg-gray-800"
                style={{ color: 'var(--text-secondary)' }}
              >
                <Github size={18} />
                <span>Edit on GitHub</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}