# Portfolio — Développeur Web Full-Stack

Projet individuel Codecamp PrimeTek Academy — React + Vite + CSS personnalisé. Design original *Dark Tech Premium*.

## Liens

- **Site Vercel :** À ajouter après déploiement
- **Maquette Figma :** https://www.figma.com/design/XPi1FEyEbZ5XjfORBNOwWx/Portfolio-%E2%80%94-Full-Stack-Developer?node-id=1-2
- **GitHub :** À ajouter après création du dépôt public `portfolio`

## Démarrage local

```bash
npm install
npm run dev
```

Puis `npm run build` pour vérifier la production. Prérequis : une version récente de Node.js compatible avec Vite 7 (Node 20.19+ ou 22.12+).

## Structure

- `src/data/portfolio.js` : profil, compétences, projets, parcours — à personnaliser
- `src/components/Header.jsx` : navigation desktop/mobile
- `src/components/ProjectCard.jsx` : carte réutilisable alimentée par les données
- `src/App.jsx` : sections du site
- `src/styles.css` : design system, responsive, états de focus
- `public` : assets (les 3 projets ont des **visuels temporaires**, pas des captures réelles)

## Choix de React

React favorise la création d'interfaces par composants réutilisables. Vite simplifie le développement et la compilation. Le CSS est écrit sur mesure pour rester fidèle à la maquette sans modèle téléchargé ni bibliothèque de composants prêts à l'emploi.

## Défi personnel

À déclarer **seulement après réalisation**. Proposition : navigation mobile accessible (menu contrôlé par état React, `aria-expanded`, fermeture par Échap) ; vérifier avec le formateur si cette fonctionnalité est nouvelle pour vous. Autres possibilités : mode sombre système ou site bilingue.

## Comparatif Figma / site

| Section | Capture Figma | Capture site React | Fidélité / notes |
|---|---|---|---|
| Accueil | À joindre | À joindre | À vérifier |
| À propos | À joindre | À joindre | À vérifier |
| Compétences | À joindre | À joindre | À vérifier |
| Projets | À joindre | À joindre | À vérifier |
| Parcours | À joindre | À joindre | À vérifier |
| Contact | À joindre | À joindre | À vérifier |
| Footer | À joindre | À joindre | À vérifier |

## Écarts justifiés

| Écart constaté | Raison | Correction ou justification |
|---|---|---|
| À compléter après comparaison | — | — |

## Lighthouse — mobile et site déployé

Seuils demandés : performance ≥85 ; accessibilité ≥90 ; bonnes pratiques ≥90 ; SEO ≥90. **Rapport réel à mesurer et capture à joindre.** Aucun score n'est prétendu ici.

## Contrôles avant remise

- [ ] Remplacer le texte de présentation et les noms/compétences par les valeurs exactes
- [ ] Mettre de véritables captures des projets Quizzy, TaskFlow, SmartResto, et liens réels
- [ ] Compléter l'e-mail, GitHub, LinkedIn, WhatsApp si souhaité
- [ ] Vérifier visuellement la fidélité à Figma desktop et mobile (1440/390)
- [ ] Faire valider le design par le formateur avant de coder si ce n'est pas déjà fait
- [ ] Créer le dépôt public `portfolio` et conserver un historique authentique (15 commits minimum)
- [ ] Déployer sur Vercel et vérifier la navigation/les liens
- [ ] Tester Lighthouse sur mobile et joindre la capture
- [ ] Documenter le défi personnel réellement accompli
- [ ] Préparer la démonstration de cinq minutes

> Note : ce dépôt contient une base fonctionnelle de présentation. Il ne remplace pas les preuves de réalisation, les captures originales ni la validation imposée par l'énoncé.
