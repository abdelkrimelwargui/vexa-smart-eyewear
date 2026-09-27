import React, { useState } from 'react';
import { X, Search, ArrowRight, Glasses, Cpu, Shield, HelpCircle } from 'lucide-react';

export default function SearchModal({ isOpen, onClose, onSelectResult }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const catalog = [
    { title: 'VEXA ONE — Noir Mat (Polarisés)', category: 'Lunettes', icon: <Glasses size={16} />, anchor: 'boutique' },
    { title: 'Verres Correcteurs Personnalisés', category: 'Optique', icon: <Glasses size={16} />, anchor: 'boutique' },
    { title: 'Capteur Vidéo 4K Ultra HD & Stabilisateur', category: 'Technologie', icon: <Cpu size={16} />, anchor: 'technologie' },
    { title: 'Open-Wave™ Haut-Parleurs Directionnels', category: 'Audio', icon: <Cpu size={16} />, anchor: 'technologie' },
    { title: 'Assistant IA Google Gemini Intégré', category: 'Intelligence', icon: <Cpu size={16} />, anchor: 'technologie' },
    { title: 'Étui de Chargement sans fil 36h', category: 'Accessoires', icon: <Shield size={16} />, anchor: 'vision' },
    { title: 'Garantie Constructeur & Résistance Eau IPX4', category: 'Support', icon: <HelpCircle size={16} />, anchor: 'support' },
  ];

  const filtered = query.trim() === ''
    ? catalog.slice(0, 4)
    : catalog.filter(item => item.title.toLowerCase().includes(query.toLowerCase()) || item.category.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" style={{ width: '560px' }} onClick={(e) => e.stopPropagation()}>
        {/* Search Input Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '18px 24px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <Search size={20} color="#a855f7" />
          <input
            type="text"
            placeholder="Rechercher un modèle, technologie, verre, accessoire..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            style={{
              flex: 1,
              background: 'none',
              border: 'none',
              outline: 'none',
              color: '#ffffff',
              fontSize: '1rem',
              fontFamily: 'inherit'
            }}
          />
          <button className="close-btn" onClick={onClose} style={{ background: 'rgba(255,255,255,0.06)', color: '#ffffff' }}>
            <X size={16} />
          </button>
        </div>

        {/* Results List */}
        <div style={{ padding: '16px 20px', maxHeight: '380px', overflowY: 'auto' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>
            {query.trim() === '' ? 'Suggestions fréquentes' : `${filtered.length} Résultat(s)`}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {filtered.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  onSelectResult(item.anchor);
                  onClose();
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 14px',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.03)',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(168, 85, 247, 0.15)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ color: '#a855f7' }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#ffffff' }}>{item.title}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{item.category}</div>
                  </div>
                </div>
                <ArrowRight size={16} color="#64748b" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
