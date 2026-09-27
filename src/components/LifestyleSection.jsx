import React from 'react';
import { Camera, Volume2, Sparkles, Shield, ArrowRight } from 'lucide-react';

export default function LifestyleSection({ onBuyNow, onDiscover }) {
  const bentoCards = [
    {
      icon: <Camera size={24} />,
      title: 'Capturez',
      text: 'Photos et vidéos en haute qualité, mains libres.'
    },
    {
      icon: <Volume2 size={24} />,
      title: 'Écoutez',
      text: 'Votre musique, appels et assistants vocaux.'
    },
    {
      icon: <Sparkles size={24} />,
      title: "Demandez à l'IA",
      text: 'Infos, traduction, navigation et plus encore.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Protégez vos yeux',
      text: 'Verres polarisés 100% UVA/UVB.'
    }
  ];

  return (
    <section id="vision" className="lifestyle-section">
      <div className="container">
        {/* Header */}
        <div className="lifestyle-header">
          <span className="lifestyle-tag">Plus qu'une paire de lunettes.</span>
          <h2 className="lifestyle-title">
            Votre compagnon <span>du quotidien.</span>
          </h2>
          <p className="lifestyle-text">
            Style, légèreté et technologies embarquées. Conçu pour vous accompagner partout, à chaque instant.
          </p>
          <div style={{ marginTop: '24px' }}>
            <button className="btn-primary" onClick={onBuyNow}>
              <span>Acheter maintenant</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Dual Cards Grid */}
        <div className="lifestyle-dual-grid">
          {/* Card 1: Case and Glasses */}
          <div className="lifestyle-card-case">
            <img 
              src="/assets/case_glasses.jpg" 
              alt="Étui de recharge sans fil et lunettes VEXA posés sur pierre naturelle" 
            />
          </div>

          {/* Card 2: Lifestyle Woman */}
          <div className="lifestyle-card-woman">
            <img 
              src="/assets/lifestyle_woman.jpg" 
              alt="Femme élégante portant les lunettes VEXA en extérieur ensoleillé" 
            />
            <div className="woman-card-overlay">
              <h4>Style & technologie</h4>
              <p>en parfaite harmonie.</p>
            </div>
          </div>
        </div>

        {/* 4 Bento Feature Cards */}
        <div className="bento-features-grid">
          {bentoCards.map((card, idx) => (
            <div key={idx} className="bento-feature-card">
              <div className="bento-feature-icon">
                {card.icon}
              </div>
              <h4>{card.title}</h4>
              <p>{card.text}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="bottom-cta-banner">
          <div className="bottom-cta-text">
            <h3>Passez à la nouvelle génération de lunettes intelligentes.</h3>
            <p>
              Découvrez une vision plus claire, un son plus riche et une intelligence artificielle toujours à vos côtés.
            </p>
          </div>
          <button className="btn-primary" onClick={onDiscover}>
            <span>Découvrir la collection</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
