import React, { useState, useEffect } from 'react';
import { X, Volume2, Play, Pause, Radio, Headphones, Check } from 'lucide-react';

export default function AudioDemoModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [spatialMode, setSpatialMode] = useState('open-ear'); // 'open-ear' | 'isolation'

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(6, 182, 212, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#06b6d4' }}>
              <Volume2 size={18} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Acoustique Spatiale Ouverte VEXA</h3>
          </div>
          <button className="close-btn" onClick={onClose} style={{ background: 'rgba(255,255,255,0.08)', color: '#ffffff' }}>
            <X size={16} />
          </button>
        </div>

        <div className="modal-body">
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '20px' }}>
            La technologie <strong>Open-Wave™</strong> oriente le flux acoustique exclusivement vers votre canal auditif sans fuite vers vos voisins de table ou collègues.
          </p>

          {/* Mode Switcher */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
            <button
              onClick={() => setSpatialMode('open-ear')}
              style={{
                flex: 1,
                padding: '12px',
                borderRadius: '12px',
                background: spatialMode === 'open-ear' ? 'rgba(6, 182, 212, 0.15)' : 'rgba(255,255,255,0.04)',
                border: spatialMode === 'open-ear' ? '1px solid #06b6d4' : '1px solid rgba(255,255,255,0.08)',
                color: spatialMode === 'open-ear' ? '#ffffff' : '#94a3b8',
                fontWeight: 600,
                fontSize: '0.85rem',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <Radio size={16} color="#06b6d4" />
                <span>Mode Conduction Libre</span>
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Conscience totale des bruits urbains</div>
            </button>

            <button
              onClick={() => setSpatialMode('isolation')}
              style={{
                flex: 1,
                padding: '12px',
                borderRadius: '12px',
                background: spatialMode === 'isolation' ? 'rgba(168, 85, 247, 0.15)' : 'rgba(255,255,255,0.04)',
                border: spatialMode === 'isolation' ? '1px solid #a855f7' : '1px solid rgba(255,255,255,0.08)',
                color: spatialMode === 'isolation' ? '#ffffff' : '#94a3b8',
                fontWeight: 600,
                fontSize: '0.85rem',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <Headphones size={16} color="#a855f7" />
                <span>Mode Voix & Focus</span>
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Renforcement dynamique des fréquences vocales</div>
            </button>
          </div>

          {/* Sound wave player */}
          <div style={{
            background: 'rgba(0,0,0,0.6)',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '24px',
            textAlign: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', height: '60px', marginBottom: '16px' }}>
              {[...Array(24)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: '4px',
                    height: isPlaying ? `${Math.sin(i * 0.5 + (isPlaying ? Date.now() / 200 : 0)) * 25 + 30}px` : '8px',
                    background: spatialMode === 'open-ear' ? '#06b6d4' : '#a855f7',
                    borderRadius: '2px',
                    transition: 'height 0.15s ease'
                  }}
                />
              ))}
            </div>

            <button
              className="btn-primary"
              onClick={() => setIsPlaying(!isPlaying)}
              style={{
                background: spatialMode === 'open-ear' 
                  ? 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)' 
                  : 'var(--accent-gradient)'
              }}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              <span>{isPlaying ? 'Mettre en pause' : 'Écouter la simulation spatiale'}</span>
            </button>
          </div>

          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
            <button className="btn-ghost-dark" onClick={onClose}>
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
