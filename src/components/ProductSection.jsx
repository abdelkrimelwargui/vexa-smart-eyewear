import React, { useState } from 'react';
import { 
  ShoppingBag, 
  RotateCw, 
  Star, 
  Camera, 
  Headphones, 
  Zap, 
  ShieldCheck, 
  BatteryMedium, 
  Feather, 
  Droplets,
  Check
} from 'lucide-react';

export default function ProductSection({ onAddToCart }) {
  // Gallery states
  const [selectedAngle, setSelectedAngle] = useState(0);
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedLens, setSelectedLens] = useState('solaire');
  const [addedNotice, setAddedNotice] = useState(false);

  const colors = [
    { id: 'black', name: 'Noir Mat (Onyx)', hex: '#111318' },
    { id: 'navy', name: 'Bleu Nuit (Deep Navy)', hex: '#1e293b' },
    { id: 'forest', name: 'Vert Canopée', hex: '#14362b' },
    { id: 'amber', name: 'Écaille Ambrée', hex: '#6b4f2c' },
  ];

  const lensTypes = [
    { id: 'solaire', label: 'Solaire (Polarisés)', priceDelta: 0 },
    { id: 'clair', label: 'Correction (Clair)', priceDelta: 0 },
    { id: 'teinte', label: 'Prescription (Teinté)', priceDelta: 40 },
  ];

  const views = [
    {
      id: 0,
      label: 'Face 3/4',
      img: selectedLens === 'clair' ? '/assets/product_clear.jpg' : '/assets/product_sunglasses.jpg',
      alt: 'VEXA ONE vue perspective 3/4'
    },
    {
      id: 1,
      label: 'Verres Clairs',
      img: '/assets/product_clear.jpg',
      alt: 'VEXA ONE verres de vue clairs'
    },
    {
      id: 2,
      label: 'Étui de Charge',
      img: '/assets/case_glasses.jpg',
      alt: 'VEXA ONE et son boitier de recharge sans fil'
    },
    {
      id: 3,
      label: 'Porté (Lifestyle)',
      img: '/assets/lifestyle_woman.jpg',
      alt: 'VEXA ONE porté par un modèle'
    }
  ];

  const currentView = views[selectedAngle] || views[0];
  const basePrice = 299;
  const currentLensObj = lensTypes.find(l => l.id === selectedLens) || lensTypes[0];
  const totalPrice = basePrice + currentLensObj.priceDelta;

  const handleAddToCart = () => {
    onAddToCart({
      id: `vexa-one-${selectedColor}-${selectedLens}`,
      name: 'VEXA ONE',
      price: totalPrice,
      color: colors.find(c => c.id === selectedColor)?.name,
      colorHex: colors.find(c => c.id === selectedColor)?.hex,
      lens: currentLensObj.label,
      img: currentView.img
    });

    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2200);
  };

  return (
    <section id="boutique" className="product-section">
      <div className="container">
        <div className="product-grid">
          {/* Left: Gallery & 360 viewer */}
          <div className="gallery-wrapper">
            <div className="thumbnails-strip">
              {views.map((v, idx) => (
                <button
                  key={v.id}
                  className={`thumb-btn ${selectedAngle === idx ? 'active' : ''}`}
                  onClick={() => setSelectedAngle(idx)}
                  title={v.label}
                >
                  <img src={v.img} alt={v.alt} />
                </button>
              ))}
            </div>

            <div className="main-viewer-card">
              <div className="main-image-box">
                <img 
                  src={currentView.img} 
                  alt={currentView.alt}
                  style={{
                    filter: selectedColor === 'navy' 
                      ? 'hue-rotate(200deg) brightness(0.95)' 
                      : selectedColor === 'forest' 
                      ? 'hue-rotate(100deg) brightness(0.9)'
                      : selectedColor === 'amber'
                      ? 'sepia(0.5) contrast(1.1)'
                      : 'none'
                  }}
                />
              </div>

              {/* 360 Rotation indicator badge */}
              <div className="viewer-360-badge">
                <RotateCw size={14} className="spin-slow" />
                <span>360° INTEL</span>
              </div>

              {/* Angle Selector Bar */}
              <div className="angles-selector-bar">
                {views.map((v, idx) => (
                  <button
                    key={v.id}
                    className={`angle-pill ${selectedAngle === idx ? 'active' : ''}`}
                    onClick={() => setSelectedAngle(idx)}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Product Info & Configurator */}
          <div className="product-info-panel">
            <span className="product-category-tag">LUNETTES CONNECTÉES</span>
            <h2 className="product-title">VEXA ONE</h2>
            <p className="product-subtitle">Vision. Audio. IA. Tout en un.</p>

            <div className="product-price-row">
              <div className="product-price">{totalPrice}€</div>
              <div className="product-reviews">
                <div className="stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="reviews-count">4.8 (124 avis)</span>
              </div>
            </div>

            {/* Colors Swatches */}
            <div className="option-group">
              <div className="option-label">
                <span>Couleur de monture</span>
                <span>{colors.find(c => c.id === selectedColor)?.name}</span>
              </div>
              <div className="color-swatches-row">
                {colors.map((c) => (
                  <button
                    key={c.id}
                    className={`color-swatch-btn ${selectedColor === c.id ? 'active' : ''}`}
                    style={{ backgroundColor: c.hex }}
                    onClick={() => setSelectedColor(c.id)}
                    title={c.name}
                    aria-label={c.name}
                  />
                ))}
              </div>
            </div>

            {/* Lens Type Selector */}
            <div className="option-group">
              <div className="option-label">
                <span>Type de verres</span>
                <span>{currentLensObj.label}</span>
              </div>
              <div className="lens-types-row">
                {lensTypes.map((lens) => (
                  <button
                    key={lens.id}
                    className={`lens-type-pill ${selectedLens === lens.id ? 'active' : ''}`}
                    onClick={() => setSelectedLens(lens.id)}
                  >
                    {lens.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart CTA */}
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              {addedNotice ? (
                <>
                  <Check size={20} />
                  <span>Ajouté au panier !</span>
                </>
              ) : (
                <>
                  <ShoppingBag size={20} />
                  <span>Ajouter au panier</span>
                </>
              )}
            </button>

            {/* Key Specs Quad Grid */}
            <div className="specs-quad-grid">
              <div className="spec-mini-card">
                <Camera size={20} className="spec-mini-icon" />
                <h5>Caméra 4K</h5>
                <p>Vidéo 1080p - photos</p>
              </div>

              <div className="spec-mini-card">
                <Headphones size={20} className="spec-mini-icon" />
                <h5>Audio ouvert</h5>
                <p>Clair, immersif</p>
              </div>

              <div className="spec-mini-card">
                <Zap size={20} className="spec-mini-icon" />
                <h5>IA Assistant</h5>
                <p>Voix & gestes</p>
              </div>

              <div className="spec-mini-card">
                <ShieldCheck size={20} className="spec-mini-icon" />
                <h5>Protection UV</h5>
                <p>100% UVA/UVB</p>
              </div>
            </div>

            {/* Secondary Specs List */}
            <div className="secondary-specs-row">
              <div className="secondary-spec-item">
                <BatteryMedium size={22} className="secondary-spec-icon" />
                <div className="secondary-spec-text">
                  <h6>Batterie longue durée</h6>
                  <p>Jusqu'à 8h d'autonomie</p>
                </div>
              </div>

              <div className="secondary-spec-item">
                <Feather size={22} className="secondary-spec-icon" />
                <div className="secondary-spec-text">
                  <h6>Léger & confortable</h6>
                  <p>Seulement 45 g</p>
                </div>
              </div>

              <div className="secondary-spec-item">
                <Droplets size={22} className="secondary-spec-icon" />
                <div className="secondary-spec-text">
                  <h6>Résistant à l'eau</h6>
                  <p>Norme IPX4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
