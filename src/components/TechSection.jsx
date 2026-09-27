import React, { useState } from 'react';
import { Camera, Mic, Volume2, Hand, Cpu, ArrowRight } from 'lucide-react';

export default function TechSection({ onOpenAiDemo, onOpenAudioDemo }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState(null);

  const slides = [
    {
      tag: 'BIEN PLUS QUE DES LUNETTES',
      title: 'Une technologie au service de votre quotidien.',
      desc: 'Des capteurs avancés, une intelligence artificielle et un design élégant pour une expérience visuelle et connectée unique.'
    },
    {
      tag: 'INTELLIGENCE ARTIFICIELLE HYBRIDE',
      title: 'Voyez et comprenez le monde instantanément.',
      desc: 'Pointez votre regard vers un monument, un menu ou un texte en langue étrangère : VEXA analyse et traduit en temps réel dans votre oreille.'
    },
    {
      tag: 'ACOUSTIQUE DIRECTIONNELLE AVANCÉE',
      title: 'Une bulle sonore privée sans obstruer vos oreilles.',
      desc: 'Des micro-haut-parleurs à guidage d’ondes projettent le son directement vers votre conduit auditif sans fuite sonore extérieure.'
    }
  ];

  const hotspots = [
    {
      id: 'camera',
      icon: <Camera size={14} />,
      label: 'Caméra 4K',
      desc: 'Photos et vidéos en ultra HD avec stabilisation gyroscopique intégrée.',
      top: '32%',
      left: '32%',
      action: null
    },
    {
      id: 'mic',
      icon: <Mic size={14} />,
      label: 'Microphones',
      desc: 'Réseau de 5 micros à filtrage spatial pour des appels limpides même en milieu venteux.',
      top: '55%',
      left: '30%',
      action: null
    },
    {
      id: 'speaker',
      icon: <Volume2 size={14} />,
      label: 'Haut-parleurs',
      desc: 'Son immersif à oreille libre en toute discrétion, sans boucher le canal auditif.',
      top: '36%',
      left: '68%',
      action: onOpenAudioDemo
    },
    {
      id: 'touch',
      icon: <Hand size={14} />,
      label: 'Contrôle tactile',
      desc: 'Zone tactile capacitive sur la branche : swipe pour le volume, tap pour valider, maintien pour l’IA.',
      top: '48%',
      left: '69%',
      action: null
    },
    {
      id: 'ai',
      icon: <Cpu size={14} />,
      label: 'Assistant IA',
      desc: 'Reconnaissance visuelle, traduction instantanée, navigation piétonne par audio.',
      top: '62%',
      left: '64%',
      action: onOpenAiDemo
    }
  ];

  const currentSlide = slides[activeSlide];

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="technologie" className="tech-section">
      <div className="container">
        <div className="tech-grid">
          {/* Visual with interactive HUD Hotspots */}
          <div className="tech-media-container">
            <img 
              src="/assets/tech_man.jpg" 
              alt="Modèle portant les lunettes connectées VEXA dans une mégapole cyberpunk nocturne" 
              className="tech-man-image"
            />

            {/* HUD Hotspots */}
            <div className="hud-overlay">
              {hotspots.map((spot) => (
                <div 
                  key={spot.id}
                  className={`hud-hotspot ${activeHotspot === spot.id ? 'active' : ''}`}
                  style={{ top: spot.top, left: spot.left }}
                  onMouseEnter={() => setActiveHotspot(spot.id)}
                  onMouseLeave={() => setActiveHotspot(null)}
                  onClick={spot.action || undefined}
                >
                  <div className="hud-pin">
                    <span className="hud-pulse-dot"></span>
                    <span className="hud-label">{spot.label}</span>
                  </div>

                  {/* Popover */}
                  <div className="hud-tooltip">
                    <h5>{spot.label}</h5>
                    <p>{spot.desc}</p>
                    {spot.action && (
                      <span style={{ display: 'block', marginTop: '6px', fontSize: '0.7rem', color: '#d946ef', fontWeight: 600 }}>
                        ▶ Cliquer pour simuler
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Editorial block */}
          <div className="tech-editorial-panel">
            <span className="tech-tag">{currentSlide.tag}</span>
            <h2 className="tech-headline">{currentSlide.title}</h2>
            <p className="tech-description">{currentSlide.desc}</p>

            <div className="tech-actions-row">
              <button className="btn-primary" onClick={onOpenAiDemo}>
                <span>Explorer la technologie</span>
                <ArrowRight size={18} />
              </button>

              <div className="slider-pagination">
                {slides.map((_, idx) => (
                  <span 
                    key={idx} 
                    className={activeSlide === idx ? 'active' : ''}
                    onClick={() => setActiveSlide(idx)}
                    style={{ cursor: 'pointer' }}
                  >
                    0{idx + 1}
                  </span>
                ))}

                <button 
                  className="slider-arrow-btn" 
                  onClick={handleNextSlide}
                  aria-label="Diapositive suivante"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
