import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--surface)', color: 'var(--text-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <h3 className="text-xl font-bold" style={{ color: 'var(--primary)' }}>Rquet</h3>
            </div>
            <p className="body max-w-md" style={{ color: 'var(--text-secondary)' }}>
              Discover and join exciting racquet sports tournaments across Bangalore. 
              From badminton to squash, find your next competition here.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="transition-colors hover:text-white" style={{ color: 'var(--text-secondary)' }}>
                <Facebook size={20} />
              </a>
              <a href="#" className="transition-colors hover:text-white" style={{ color: 'var(--text-secondary)' }}>
                <Instagram size={20} />
              </a>
              <a href="#" className="transition-colors hover:text-white" style={{ color: 'var(--text-secondary)' }}>
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="h4 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="body transition-colors hover:text-white" style={{ color: 'var(--text-secondary)' }}>Home</Link></li>
              <li><Link href="/tournaments" className="body transition-colors hover:text-white" style={{ color: 'var(--text-secondary)' }}>Tournaments</Link></li>
              <li><Link href="/about" className="body transition-colors hover:text-white" style={{ color: 'var(--text-secondary)' }}>About</Link></li>
              <li><Link href="/contact" className="body transition-colors hover:text-white" style={{ color: 'var(--text-secondary)' }}>Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="h4 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="body transition-colors hover:text-white" style={{ color: 'var(--text-secondary)' }}>Privacy Policy</Link></li>
              <li><Link href="/terms" className="body transition-colors hover:text-white" style={{ color: 'var(--text-secondary)' }}>Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center" style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
          <p className="body">&copy; 2024 Rquet. All rights reserved. Made with ❤️ in Bangalore.</p>
        </div>
      </div>
    </footer>
  );
}