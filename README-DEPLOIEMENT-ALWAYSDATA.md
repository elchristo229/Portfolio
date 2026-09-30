# Guide de Déploiement du Portfolio React — GANSE Kpèhoué Gille-Christ

Ce portfolio a été entièrement modernisé avec un **Front-End React ultra-dynamique, animé et responsive** (React 18 + Vite + Tailwind CSS + Lucide Icons + Terminal interactif + Lecteur de documents intégré).

---

## 🚀 1. Lancement et Développement en Local

Pour tester et prévisualiser en local avec le rechargement à chaud (Hot Module Reload) :

```bash
# Lancer le serveur de développement
npm run dev
```

Puis ouvrez votre navigateur sur : `http://localhost:5173`

---

## 📦 2. Compiler pour la Production

Pour recompiler le site après avoir apporté des modifications :

```bash
npm run build
```

Cette commande génère le dossier autonome et prêt à être déployé : **`dist/`**.
Ce dossier contient :
- `index.html` (optimisé)
- `assets/` (code JavaScript et CSS minifiés)
- `document-previews/` (les aperçus haute définition des rapports et CV)
- Tous vos fichiers PDF, PPTX et photos extraits de votre Drive et du dossier local.

---

## 🌐 3. Déploiement sur Alwaysdata (Site Statique)

Le portfolio est 100% statique et ultra-performant. Il ne nécessite aucun serveur Node.js actif en production.

### Étape par étape :
1. Connectez-vous à votre panneau Alwaysdata : **https://admin.alwaysdata.com/**
2. Allez dans **Web > Sites**, cliquez sur **Modifier** ou **Ajouter un site**.
3. Choisissez le type : **Statique**.
4. Définissez le répertoire racine du site, par exemple :
   ```text
   /home/votre-compte/www/portfolio
   ```
5. Connectez-vous avec votre client SFTP préféré (**FileZilla**, **WinSCP** ou **Cyberduck**) en utilisant les identifiants fournis dans votre panneau Alwaysdata.
6. **Glissez-déposez TOUT le contenu du dossier `dist/`** directement dans votre répertoire Alwaysdata.
7. Accédez à votre domaine ou sous-domaine Alwaysdata : votre nouveau portfolio React est immédiatement en ligne !

---

## ⚡ 4. Déploiement Alternatif en 1 Clic (Vercel / Netlify)

Si vous préférez héberger gratuitement sur Vercel ou Netlify :
- **Vercel** : Importez votre dépôt GitHub `elchristo229`, Vercel détectera automatiquement Vite et configurera `npm run build` et le dossier de sortie `dist`.
- **Netlify** : Déposez directement le dossier `dist/` sur le dashboard Netlify Drop.

---

## 🛠️ Contenu et Ressources Intégrées

Toutes les ressources de votre Google Drive et de vos documents locaux sont désormais intégrées et interactives :
- **Certifications officielles** :
  - **ANSSI SecNumacadémie** (Scores officiels : 90%, 86%, 84%, 94% — moyenne 88.5% avec attestation)
  - **Cursa / Sec Academy** (Introduction à la Cybersécurité u7051280)
  - **Sololearn** (Introduction to SQL CC-S3EOR7OR)
- **Rapports de Travaux Pratiques & Audits** :
  - EBIOS RM (16 pages, analyse des risques Fintech microcrédit mobile BCEAO / APDP)
  - Wireshark Forensics (18 pages, capture et analyse du trafic ICMP/ARP)
  - VPN Cisco PPTP & L2TP (10 pages, tunnels, virtual templates et AAA)
  - DNS BIND9 (9 pages, named.conf, zones directes et inverses)
  - Cryptographie GnuPG (clés RSA 4096, signatures et chiffrement)
- **Expériences & Stages** :
  - Stage Direction Informatique ANPE (1 mois, Cotonou, encadrement Mme DEMAHOU Maria)
  - Stage Quantum Technology (2 semaines, SaaS DAO, Figma, Django, Supabase, AWS EC2)
- **MediProof** :
  - Présentation Bitcoin Mastermind 2026 (PPTX téléchargeable)
  - Architecture d'intégrité SHA-256 et ancrage sur la blockchain Bitcoin
- **Curriculum Vitae** :
  - CV Sécurité Informatique (3 pages avec prévisualisation multi-page)
  - CV Développeur Full-Stack (1 page)
- **Terminal Cyber Interactif** :
  - Console CLI simulée (`help`, `whoami`, `skills`, `certifs`, `projects`, `cv`, `contact`)
