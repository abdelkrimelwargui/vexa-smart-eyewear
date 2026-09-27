import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductSection from './components/ProductSection';
import TechSection from './components/TechSection';
import LifestyleSection from './components/LifestyleSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import AiDemoModal from './components/AiDemoModal';
import AudioDemoModal from './components/AudioDemoModal';
import SearchModal from './components/SearchModal';
import AuthModal from './components/AuthModal';

export default function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: 'vexa-one-default',
      name: 'VEXA ONE',
      price: 299,
      color: 'Noir Mat (Onyx)',
      lens: 'Solaire (Polarisés)',
      img: '/assets/product_sunglasses.jpg',
      quantity: 1
    }
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAiDemoOpen, setIsAiDemoOpen] = useState(false);
  const [isAudioDemoOpen, setIsAudioDemoOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle Ctrl+K shortcut for search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Smooth scroll helper
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Cart operations
  const handleAddToCart = (newItem) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === newItem.id);
      if (existing) {
        return prev.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...newItem, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQty = (itemId, newQty) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="vexa-app-root">
      {/* Navigation Header */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content with the 4 core sections from the reference image */}
      <main>
        {/* Quadrant 1: Hero & Brand */}
        <HeroSection
          onDiscover={() => scrollToSection('boutique')}
          onOpenAiDemo={() => setIsAiDemoOpen(true)}
          onOpenAudioDemo={() => setIsAudioDemoOpen(true)}
        />

        {/* Quadrant 2: Product Configurator (VEXA ONE) */}
        <ProductSection onAddToCart={handleAddToCart} />

        {/* Quadrant 3: Technology HUD Breakdown */}
        <TechSection
          onOpenAiDemo={() => setIsAiDemoOpen(true)}
          onOpenAudioDemo={() => setIsAudioDemoOpen(true)}
        />

        {/* Quadrant 4: Lifestyle, Bento & CTA */}
        <LifestyleSection
          onBuyNow={() => scrollToSection('boutique')}
          onDiscover={() => scrollToSection('boutique')}
        />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Modals & Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <AiDemoModal
        isOpen={isAiDemoOpen}
        onClose={() => setIsAiDemoOpen(false)}
      />

      <AudioDemoModal
        isOpen={isAudioDemoOpen}
        onClose={() => setIsAudioDemoOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={(anchor) => scrollToSection(anchor)}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />
    </div>
  );
}
