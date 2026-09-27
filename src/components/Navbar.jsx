import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingBag } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, onOpenSearch, onOpenAuth, activeSection, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-inner">
          {/* Brand Logo */}
          <a 
            href="#hero" 
            className="navbar-brand"
            onClick={(e) => { e.preventDefault(); onNavigate('hero'); }}
          >
            <svg 
              className="brand-icon" 
              viewBox="0 0 28 28" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6L14 24L24 6H19L14 16L9 6H4Z" fill="currentColor"/>
              <path d="M14 6L18 13.5H10L14 6Z" fill="#d946ef" opacity="0.8"/>
            </svg>
            <span>VEXA</span>
          </a>

          {/* Navigation Links */}
          <nav>
            <ul className="nav-links">
              <li>
                <a 
                  href="#boutique" 
                  className={`nav-link ${activeSection === 'boutique' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); onNavigate('boutique'); }}
                >
                  Boutique
                </a>
              </li>
              <li>
                <a 
                  href="#technologie" 
                  className={`nav-link ${activeSection === 'technologie' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); onNavigate('technologie'); }}
                >
                  Technologie
                </a>
              </li>
              <li>
                <a 
                  href="#vision" 
                  className={`nav-link ${activeSection === 'vision' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); onNavigate('vision'); }}
                >
                  Vision
                </a>
              </li>
              <li>
                <a 
                  href="#support" 
                  className={`nav-link ${activeSection === 'support' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); onNavigate('support'); }}
                >
                  Support
                </a>
              </li>
            </ul>
          </nav>

          {/* Action Icons */}
          <div className="nav-actions">
            <button 
              className="nav-icon-btn" 
              onClick={onOpenSearch}
              title="Recherche (Ctrl+K)"
              aria-label="Recherche"
            >
              <Search size={18} />
            </button>

            <button 
              className="nav-icon-btn" 
              onClick={onOpenAuth}
              title="Mon Compte"
              aria-label="Mon Compte"
            >
              <User size={18} />
            </button>

            <button 
              className="nav-icon-btn" 
              onClick={onOpenCart}
              title="Panier"
              aria-label="Panier"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
