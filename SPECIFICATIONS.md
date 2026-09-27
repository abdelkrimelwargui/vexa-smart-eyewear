# 🕶️ VEXA SMART EYEWEAR — Cahier des Charges & Spécifications du Projet

Ce document définit les spécifications fonctionnelles, techniques et ergonomiques pour la conception et le développement de la plateforme e-commerce et vitrine technologique **VEXA** (Lunettes Connectées avec IA, Caméra 4K et Audio Ouvert), calquée fidèlement sur la maquette de référence fournie.

---

## 1. 📌 Identité & Vision du Produit

* **Nom de la marque** : **VEXA**
* **Slogan principal** : *"VOYEZ PLUS. FAITES PLUS."*
* **Positionnement** : Lunettes connectées nouvelle génération (smart glasses) alliant design haute couture, optique de pointe (verres solaires polarisés / de vue), audio directionnel à oreille libre, caméra 4K discrète et assistant d'intelligence artificielle intégré (reconnaissance visuelle, traduction instantanée, navigation, commande vocale).
* **Produit phare** : **VEXA ONE** (299€)
* **Marché & Cible** : Passionnés de tech nomades, créateurs de contenu, professionnels et utilisateurs recherchant un compagnon quotidien élégant et mains-libres.

---

## 2. 🎨 Direction Artistique & Design System

Inspiré directement de la composition de la maquette (ambiance duale Cyberpunk/Haute Technologie et E-commerce Luxe épuré) :

### A. Palette de Couleurs & Jetons CSS
* **Arrière-plan sombre (Hero & Tech HUD)** : `#08090e` / `#0f1019`
* **Arrière-plan clair / Boutique (Product Details & Lifestyle)** : `#f8fafc` / `#ffffff` / `#f1f5f9`
* **Accents Néo-Violet & Magenta (Signature VEXA)** : 
  - Dégradé Primaire : `linear-gradient(135deg, #a855f7 0%, #d946ef 50%, #7c3aed 100%)`
  - Glow & Éclat : `rgba(168, 85, 247, 0.35)` et `rgba(217, 70, 239, 0.25)`
* **Accents Secondaires** : Blanc pur `#ffffff`, Gris ardoise `#94a3b8`, Vert succès `#10b981`.

### B. Typographie
* **Titres & Identité** : **Outfit** (futuriste, géométrique et lisible, de 400 à 900)
* **Corps de texte & UI** : **Plus Jakarta Sans** / **Inter** (ergonomie et clarté maximale)
* **Données techniques & Télémétrie** : **JetBrains Mono** (fréquences, autonomie, résolutions)

### C. Éléments Visuels Clés
* Effets de verre dépoli (**Glassmorphism** `backdrop-filter: blur(16px)`).
* Pointeurs interactifs avec lignes de rappel (**HUD Hotspots**) reliant le visage et les lunettes aux composants technologiques (Capteur 4K, Microphones, Haut-parleurs, Touchpad, IA).
* Boutons néo-pillules avec micro-animations au survol et retour tactile (`.btn-vexa`).

---

## 3. 🖥️ Découpage des Écrans (Fidélité à la Maquette)

Le site intègre les 4 quadrants majeurs de la maquette de référence :

### 🌟 Quadrant 1 : Hero & Landing Page Immersive (Sombre & Cyberpunk)
* **Barre de Navigation Flottante** :
  - Logo VEXA (typographie futuriste avec monogramme stylisé).
  - Liens : `Boutique`, `Technologie`, `Vision`, `Support`.
  - Outils rapides : Recherche instantanée, Compte utilisateur, Panier d'achat avec pastille de décompte d'articles.
* **Titre d'impact** : `VOYEZ PLUS.` (Blanc) + `FAITES PLUS.` (Dégradé Violet lumineux).
* **Descriptif** : *"Des lunettes solaires et de vue intelligentes, avec caméra, audio et IA intégrée. Votre quotidien, en meilleure définition."*
* **Bouton d'appel à l'action** : `Découvrir la collection →`
* **Visuel Principal** : Rendu macro 3D des lunettes VEXA posées sur roche texturée sombre avec halos violets et LED active sur la branche.
* **Barre de 5 Piliers Clés** (au bas du hero) :
  1. 📷 **Caméra 4K** — Capturez votre monde
  2. 🔊 **Audio ouvert** — Écoutez sans limites
  3. 🤖 **IA Assistant** — Votre co-pilote au quotidien
  4. ⏱️ **Autonomie longue durée** — Jusqu'à 8 heures
  5. 🕶️ **Lunettes solaires & vue** — Un style pour chaque moment

---

### 🛍️ Quadrant 2 : Fiche Produit Interactive & Configurateur (VEXA ONE)
* **Galerie Interactive & Vue 360°** :
  - Sélecteur de miniatures (Face, Profil, Vue 3/4, Étui de charge, Modèle porté).
  - Vue dynamique avec indicateur de rotation 360°.
* **Fiche Technique & Achat Direct** :
  - Badge : `LUNETTES CONNECTÉES`
  - Titre : **VEXA ONE**
  - Sous-titre : *Vision. Audio. IA. Tout en un.*
  - Prix : **299€** | Avis clients : ⭐⭐⭐⭐⭐ `4.8 (124 avis)`
  - **Sélecteur de teintes de monture** (4 pastilles interactives) :
    - 🌑 Noir Mat (Midnight Onyx)
    - 🌌 Bleu Nuit (Deep Navy)
    - 🌲 Vert Canopée (Forest Green)
    - 🍂 Écaille Ambrée (Amber Tortoise)
  - **Sélecteur de type de verres** :
    - `Solaire (Polarisés)` [Option par défaut sélectionnée]
    - `Correction (Clair)`
    - `Prescription (Teinté)`
  - **Bouton d'action principal** : `[Panier] Ajouter au panier` avec effet d'ajout instantané et animation dans le panier latéral.
  - **Grille des 4 Caractéristiques Techniques** (avec icônes dédiées) :
    - 📷 Caméra 4K (*Vidéo 1080p - photos*)
    - 🎧 Audio ouvert (*Clair, immersif*)
    - ⚡ IA Assistant (*Voix & gestes*)
    - 🛡️ Protection UV (*100% UVA/UVB*)
  - **Avantages Clés** :
    - 🔋 Batterie longue durée (*Jusqu'à 8h*)
    - 🪶 Léger & confortable (*Seulement 45 g*)
    - 💧 Résistant à l'eau (*IPX4*)

---

### 🔬 Quadrant 3 : Schéma Technologique Interactif (HUD Cyberpunk)
* **Mise en scène** : Portrait nocturne d'un utilisateur portant les lunettes VEXA dans une mégapole cyberpunk aux reflets néons violets.
* **Points d'ancrage interactifs (HUD Pointers)** avec lignes de visée :
  1. 📷 **Caméra 4K** : Photos et vidéos en ultra HD avec stabilisation.
  2. 🎙️ **Microphones** : Appels clairs et contrôle vocal directionnel.
  3. 🔊 **Haut-parleurs** : Son immersif à conduction aérienne, en toute discrétion.
  4. 👆 **Contrôle tactile** : Zone capacitive sur la branche (Swipe, tap, vocal).
  5. 🧠 **Assistant IA** : Traduction instantanée, navigation piétonne, infos en temps réel.
* **Encart éditorial** :
  - Sur-titre : `BIEN PLUS QUE DES LUNETTES`
  - Grand Titre : `Une technologie au service de votre quotidien.`
  - Texte explicatif : *"Des capteurs avancés, une intelligence artificielle et un design élégant pour une expérience visuelle et connectée unique."*
  - Bouton : `Explorer la technologie →`
  - Indicateur de pagination dynamique : `01 / 02 / 03` avec transition de diapositives.

---

### 🏙️ Quadrant 4 : Mode de Vie, Étui Haute Technologie & Bento Features
* **Section Lifestyle Double-Card** :
  - Carte 1 : Les lunettes VEXA posées à côté de leur **étui de chargement sans fil** premium gainé de noir mat.
  - Carte 2 : Femme élégante portant les lunettes en extérieur ensoleillé (*"Style & technologie en parfaite harmonie."*).
* **Titre de section** : `Plus qu'une paire de lunettes. Votre compagnon du quotidien.`
* **Grille Bento de 4 Piliers d'Expérience** :
  1. 📷 **Capturez** : Photos et vidéos en haute qualité, mains libres.
  2. 🔊 **Écoutez** : Votre musique, appels et assistants vocaux sans vous couper du monde.
  3. ✨ **Demandez à l'IA** : Réponses instantanées, traduction en direct sous vos yeux.
  4. 🛡️ **Protégez vos yeux** : Verres polarisés UV400 de qualité optique supérieure.
* **Bannière de Conversion Ultime** :
  - Bandeau incurvé violet sombre : *"Passez à la nouvelle génération de lunettes intelligentes."*
  - Bouton : `Découvrir la collection →`

---

## 4. ⚡ Fonctionnalités Interactives Implémentées

1. **Tiroir de Panier d'Achat Dynamique (Slide-over Cart Drawer)** :
   - Ajout d'articles avec choix de couleur et type de verres.
   - Calcul dynamique du sous-total, frais de port offerts et bouton de commande simulé.
2. **Visionneuse Produit Interactive (Angles & Couleurs)** :
   - Clic sur les angles de vue et changement instantané de couleur de monture.
3. **Simulateur Interactif de l'Assistant IA VEXA** :
   - Modal de démonstration en direct : *Demandez à VEXA* (traduction en direct d'un panneau, reconnaissance d'objet, contrôle vocal).
4. **Simulateur Audio Directionnel** :
   - Écoute d'un extrait audio avec visualisation des ondes acoustiques privées.
5. **Palette de Recherche Rapide (Search Modal)** :
   - Recherche instantanée parmi les produits, accessoires et technologies.

---

## 5. 🛠️ Stack Technique Retenue

* **Framework** : **React 19**
* **Bundler & Dev Server** : **Vite**
* **Styling** : **Vanilla CSS moderne & Design System modulaire** (CSS Variables, Flexbox/Grid, Glassmorphism, animations GPU).
* **Icônes** : **Lucide React** (icônes vectorielles légères et modernes).
