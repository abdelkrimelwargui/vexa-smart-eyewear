import React, { useState } from 'react';
import { X, Bot, Sparkles, Languages, Eye, Mic, ArrowRight, Check } from 'lucide-react';

export default function AiDemoModal({ isOpen, onClose }) {
  const [selectedFeature, setSelectedFeature] = useState('translate');
  const [simulating, setSimulating] = useState(false);
  const [resultReady, setResultReady] = useState(false);

  if (!isOpen) return null;

  const features = [
    {
      id: 'translate',
      icon: <Languages size={18} />,
      label: 'Traduction Visuelle',
      query: "Panneau de métro à Tokyo : '地下鉄出口'",
      response: "Traduction audio instantanée : 'Sortie Métro Ligne Ginza (à 50m tout droit)'"
    },
    {
      id: 'vision',
      icon: <Eye size={18} />,
      label: 'Reconnaissance Visuelle',
      query: 'Objet scanné : Montre ancienne en vitrine',
      response: 'Identification : Chronographe vintage 1968, mouvement automatique 17 rubis.'
    },
    {
      id: 'voice',
      icon: <Mic size={18} />,
      label: 'Assistant Vocal Proactif',
      query: "'Hey VEXA, quel est mon prochain vol ?'",
      response: "Vol AF1428 pour Berlin à 14h20. Embarquement à la porte B12 dans 45 minutes."
    }
  ];

  const current = features.find(f => f.id === selectedFeature) || features[0];

  const handleRunSimulation = () => {
    setSimulating(true);
    setResultReady(false);
    setTimeout(() => {
      setSimulating(false);
      setResultReady(true);
    }, 1200);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(168, 85, 247, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d946ef' }}>
              <Bot size={18} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Simulateur Assistant IA VEXA</h3>
          </div>
          <button className="close-btn" onClick={onClose} style={{ background: 'rgba(255,255,255,0.08)', color: '#ffffff' }}>
            <X size={16} />
          </button>
        </div>

        <div className="modal-body">
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '20px' }}>
            Découvrez la puissance du processeur neuronal embarqué dans les branches de vos <strong>VEXA ONE</strong>. Sélectionnez un scénario d'utilisation :
          </p>

          {/* Feature selector tabs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '24px' }}>
            {features.map((f) => (
              <button
                key={f.id}
                onClick={() => { setSelectedFeature(f.id); setResultReady(false); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '12px 10px',
                  borderRadius: '12px',
                  border: selectedFeature === f.id ? '1px solid #d946ef' : '1px solid rgba(255,255,255,0.1)',
                  background: selectedFeature === f.id ? 'rgba(217, 70, 239, 0.15)' : 'rgba(255,255,255,0.04)',
                  color: selectedFeature === f.id ? '#ffffff' : '#94a3b8',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  transition: 'all 0.2s'
                }}
              >
                {f.icon}
                <span>{f.label}</span>
              </button>
            ))}
          </div>

          {/* Simulation screen display */}
          <div style={{
            background: 'rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '16px',
            padding: '24px',
            position: 'relative',
            minHeight: '160px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <div style={{ fontSize: '0.85rem', color: '#a855f7', fontFamily: 'JetBrains Mono', marginBottom: '8px' }}>
              &gt; VEXA VISION CAPTURE // SCENARIO ACTIF
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#ffffff', marginBottom: '14px' }}>
              {current.query}
            </div>

            {simulating && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#d946ef', fontSize: '0.9rem' }}>
                <Sparkles size={16} className="spin-slow" />
                <span>Analyse neuronale en temps réel (Gemini Core)...</span>
              </div>
            )}

            {resultReady && (
              <div style={{
                background: 'rgba(168, 85, 247, 0.15)',
                border: '1px solid #a855f7',
                borderRadius: '12px',
                padding: '14px',
                color: '#ffffff',
                fontSize: '0.92rem',
                lineHeight: 1.5,
                animation: 'fadeIn 0.3s ease-out'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981', fontWeight: 700, fontSize: '0.78rem', marginBottom: '4px' }}>
                  <Check size={14} /> RÉPONSE AUDIO VEXA
                </div>
                {current.response}
              </div>
            )}

            {!simulating && !resultReady && (
              <div style={{ textAlign: 'center', color: '#64748b', fontSize: '0.85rem' }}>
                Cliquez ci-dessous pour déclencher la simulation.
              </div>
            )}
          </div>

          <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
            <button className="btn-ghost-dark" onClick={onClose}>
              Fermer
            </button>
            <button className="btn-primary" onClick={handleRunSimulation} disabled={simulating}>
              <Sparkles size={16} />
              <span>{simulating ? 'Traitement...' : 'Déclencher la démo'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
