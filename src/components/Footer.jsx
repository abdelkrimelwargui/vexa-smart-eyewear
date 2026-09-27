import React from 'react';
import { ArrowRight, ShieldCheck, Award, Zap, Heart } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer id="support" className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <svg 
                style={{ width: '28px', height: '28px', color: '#a855f7' }} 
                viewBox="0 0 28 28" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 6L14 24L24 6H19L14 16L9 6H4Z" fill="currentColor"/>
                <path d="M14 6L18 13.5H10L14 6Z" fill="#d946ef" opacity="0.8"/>
              </svg>
              <h3 style={{ margin: 0 }}>VEXA</h3>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, maxWidth: '320px', marginBottom: '20px' }}>
              Pionnier des lunettes connectées de nouvelle génération alliant ingénierie optique de précision, intelligence artificielle et design d'exception.
            </p>
            <div style={{ display: 'flex', gap: '12px', fontSize: '0.78rem', color: '#64748b' }}>
              <span>• IPX4 Water Resistant</span>
              <span>• Bluetooth 5.4</span>
              <span>• 45 Grammes</span>
            </div>
          </div>

          {/* Column 1: Produits */}
          <div className="footer-col">
            <h4>Boutique & Modèles</h4>
            <ul className="footer-links">
              <li><a href="#boutique" onClick={(e) => { e.preventDefault(); onNavigate('boutique'); }}>VEXA ONE (Solaire)</a></li>
              <li><a href="#boutique" onClick={(e) => { e.preventDefault(); onNavigate('boutique'); }}>VEXA ONE (Clair)</a></li>
              <li><a href="#boutique" onClick={(e) => { e.preventDefault(); onNavigate('boutique'); }}>Étui de Charge Sans Fil</a></li>
              <li><a href="#boutique" onClick={(e) => { e.preventDefault(); onNavigate('boutique'); }}>Verres de Prescription</a></li>
            </ul>
          </div>

          {/* Column 2: Technologie */}
          <div className="footer-col">
            <h4>Ingénierie</h4>
            <ul className="footer-links">
              <li><a href="#technologie" onClick={(e) => { e.preventDefault(); onNavigate('technologie'); }}>Caméra 4K & Capteurs</a></li>
              <li><a href="#technologie" onClick={(e) => { e.preventDefault(); onNavigate('technologie'); }}>Audio Ouvert Open-Wave™</a></li>
              <li><a href="#technologie" onClick={(e) => { e.preventDefault(); onNavigate('technologie'); }}>Assistant Neuronal IA</a></li>
              <li><a href="#technologie" onClick={(e) => { e.preventDefault(); onNavigate('technologie'); }}>Application Mobile VEXA App</a></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="footer-col">
            <h4>Assistance & Service</h4>
            <ul className="footer-links">
              <li><a href="#support">Guide de Démarrage</a></li>
              <li><a href="#support">Garantie & Réparabilité (2 ans)</a></li>
              <li><a href="#support">Livraison & Retours 30j</a></li>
              <li><a href="#support">Contact & FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} VEXA Smart Eyewear Inc. Tous droits réservés.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#support">Mentions Légales</a>
            <a href="#support">Confidentialité</a>
            <a href="#support">Conditions Générales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
