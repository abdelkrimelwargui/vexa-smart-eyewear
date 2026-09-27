import React, { useState } from 'react';
import { X, User, Lock, Mail, ArrowRight, Check } from 'lucide-react';

export default function AuthModal({ isOpen, onClose }) {
  const [isRegister, setIsRegister] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" style={{ width: '460px' }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>
            {isRegister ? 'Rejoindre le Club VEXA' : 'Connexion à votre Espace'}
          </h3>
          <button className="close-btn" onClick={onClose} style={{ background: 'rgba(255,255,255,0.06)', color: '#ffffff' }}>
            <X size={16} />
          </button>
        </div>

        <div className="modal-body">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '30px 10px' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <Check size={28} />
              </div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Bienvenue sur VEXA</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Votre session a été initialisée avec succès.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {isRegister && (
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '6px' }}>Nom complet</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '10px 14px' }}>
                    <User size={16} color="#64748b" />
                    <input 
                      type="text" 
                      required 
                      placeholder="Alexandre Martin" 
                      style={{ background: 'none', border: 'none', outline: 'none', color: '#ffffff', width: '100%', fontSize: '0.92rem' }} 
                    />
                  </div>
                </div>
              )}

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '6px' }}>Adresse Email</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '10px 14px' }}>
                  <Mail size={16} color="#64748b" />
                  <input 
                    type="email" 
                    required 
                    placeholder="alex@vexa-eyewear.com" 
                    style={{ background: 'none', border: 'none', outline: 'none', color: '#ffffff', width: '100%', fontSize: '0.92rem' }} 
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '6px' }}>Mot de passe</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '10px 14px' }}>
                  <Lock size={16} color="#64748b" />
                  <input 
                    type="password" 
                    required 
                    placeholder="••••••••••••" 
                    style={{ background: 'none', border: 'none', outline: 'none', color: '#ffffff', width: '100%', fontSize: '0.92rem' }} 
                  />
                </div>
              </div>

              <button type="submit" className="add-to-cart-btn" style={{ margin: '10px 0 0' }}>
                <span>{isRegister ? "Créer mon profil d'analyste" : 'Se connecter'}</span>
                <ArrowRight size={18} />
              </button>

              <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '0.85rem', color: '#94a3b8' }}>
                {isRegister ? 'Déjà membre ?' : 'Pas encore de compte ?'}{' '}
                <button 
                  type="button" 
                  onClick={() => setIsRegister(!isRegister)} 
                  style={{ color: '#d946ef', fontWeight: 600, textDecoration: 'underline' }}
                >
                  {isRegister ? 'Se connecter' : "S'inscrire gratuitement"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
