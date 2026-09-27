import React from 'react';
import { Camera, Volume2, Bot, BatteryCharging, Glasses, ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection({ onDiscover, onOpenAiDemo, onOpenAudioDemo }) {
  const pillars = [
    {
      icon: <Camera size={20} />,
      title: 'Caméra 4K',
      desc: 'Capturez votre monde',
      action: null
    },
    {
      icon: <Volume2 size={20} />,
      title: 'Audio ouvert',
      desc: 'Écoutez sans limites',
      action: onOpenAudioDemo
    },
    {
      icon: <Bot size={20} />,
      title: 'IA Assistant',
      desc: 'Votre co-pilote au quotidien',
      action: onOpenAiDemo
    },
    {
      icon: <BatteryCharging size={20} />,
      title: 'Autonomie longue durée',
      desc: "Jusqu'à 8 heures",
      action: null
    },
    {
      icon: <Glasses size={20} />,
      title: 'Lunettes solaires & vue',
      desc: 'Un style pour chaque moment',
      action: null
    }
  ];

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-main-grid">
          {/* Left Editorial Content */}
          <div className="hero-content">
            <span className="hero-tag">SMART EYEWEAR</span>
            
            <h1 className="hero-headline">
              <span className="line-1">VOYEZ PLUS.</span>
              <span className="line-2">FAITES PLUS.</span>
            </h1>

            <p className="hero-description">
              Des lunettes solaires et de vue intelligentes, avec caméra, audio et IA intégrée. 
              Votre quotidien, en meilleure définition.
            </p>

            <div className="hero-cta-group">
              <button className="btn-primary" onClick={onDiscover}>
                <span>Découvrir la collection</span>
                <ArrowRight size={18} />
              </button>

              <button className="btn-ghost-dark" onClick={onOpenAiDemo}>
                <Sparkles size={16} color="#d946ef" />
                <span>Tester l'Assistant IA</span>
              </button>
            </div>
          </div>

          {/* Right Hero Product Image */}
          <div className="hero-media-wrapper">
            <div className="hero-ambient-glow"></div>
            <div className="hero-image-frame">
              <img 
                src="/assets/hero_glasses.jpg" 
                alt="Lunettes VEXA Smart Eyewear avec bandeau LED violet sur roche volcanique" 
                className="hero-image"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Bottom 5 Pillars Bar */}
        <div className="hero-pillars-bar">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="pillar-item"
              style={{ cursor: pillar.action ? 'pointer' : 'default' }}
              onClick={pillar.action || undefined}
              title={pillar.action ? 'Cliquer pour tester' : undefined}
            >
              <div className="pillar-icon-box">
                {pillar.icon}
              </div>
              <div className="pillar-content">
                <h4>{pillar.title}</h4>
                <p>{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
