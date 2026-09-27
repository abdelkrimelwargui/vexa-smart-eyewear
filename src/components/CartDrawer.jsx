import React, { useState } from 'react';
import { X, Trash2, ArrowRight, ShieldCheck, Truck, CheckCircle2 } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQty, onRemoveItem, onClearCart }) {
  const [checkoutStep, setCheckoutStep] = useState('cart'); // 'cart' | 'success'

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setCheckoutStep('success');
    setTimeout(() => {
      onClearCart();
      setCheckoutStep('cart');
      onClose();
    }, 3500);
  };

  return (
    <div className="cart-drawer-overlay" onClick={onClose}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="cart-header">
          <h3>Votre Panier ({cartItems.reduce((a, b) => a + b.quantity, 0)})</h3>
          <button className="close-btn" onClick={onClose} aria-label="Fermer le panier">
            <X size={18} />
          </button>
        </div>

        {checkoutStep === 'success' ? (
          <div style={{ padding: '50px 24px', textAlign: 'center', margin: 'auto' }}>
            <CheckCircle2 size={60} color="#10b981" style={{ margin: '0 auto 16px' }} />
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px' }}>Commande Validée !</h3>
            <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.6 }}>
              Merci pour votre commande de lunettes connectées <strong>VEXA ONE</strong>. Votre colis express sera expédié sous 24h avec suivi.
            </p>
          </div>
        ) : (
          <>
            {/* Body items */}
            <div className="cart-body">
              {cartItems.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 20px', color: '#64748b' }}>
                  <p style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px' }}>Votre panier est vide</p>
                  <p style={{ fontSize: '0.88rem' }}>Explorez nos montures VEXA ONE et ajoutez votre configuration préférée.</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.img} alt={item.name} className="cart-item-img" />
                    
                    <div className="cart-item-details">
                      <h4>{item.name}</h4>
                      <p className="cart-item-meta">
                        Monture : {item.color} <br />
                        Verres : {item.lens}
                      </p>
                      <div style={{ fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                        {item.price * item.quantity}€
                      </div>

                      <div className="cart-item-qty">
                        <button 
                          className="qty-btn" 
                          onClick={() => onUpdateQty(item.id, Math.max(1, item.quantity - 1))}
                        >
                          -
                        </button>
                        <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{item.quantity}</span>
                        <button 
                          className="qty-btn" 
                          onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                        >
                          +
                        </button>

                        <button 
                          style={{ marginLeft: 'auto', color: '#ef4444', display: 'flex', alignItems: 'center' }}
                          onClick={() => onRemoveItem(item.id)}
                          title="Supprimer l'article"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}

              {/* Guarantees badge */}
              {cartItems.length > 0 && (
                <div style={{ marginTop: 'auto', padding: '16px', background: '#f1f5f9', borderRadius: '12px', fontSize: '0.8rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Truck size={16} color="#a855f7" />
                    <span>Livraison Express offerte (48h à domicile)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ShieldCheck size={16} color="#a855f7" />
                    <span>Garantie constructeur 2 ans & retour 30 jours</span>
                  </div>
                </div>
              )}
            </div>

            {/* Footer subtotal & checkout */}
            {cartItems.length > 0 && (
              <div className="cart-footer">
                <div className="cart-subtotal-row">
                  <span>Total TTC</span>
                  <span>{subtotal}€</span>
                </div>

                <button className="add-to-cart-btn" style={{ margin: 0 }} onClick={handleCheckout}>
                  <span>Procéder au paiement sécurisé</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
