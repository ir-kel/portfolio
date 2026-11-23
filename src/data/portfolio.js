// À PERSONNALISER : informations personnelles et liens. Ne jamais inventer les réalisations.
export const profile = {
  name: 'Elisée JP Kanyinda',
  role: 'Développeur Web Full-Stack',
  greeting: 'Bonjour, je suis',
  tagline: 'Je conçois et développe des applications web modernes, performantes et intuitives, en transformant des besoins concrets en solutions numériques.',
  about: 'Je développe des interfaces claires et des applications web utiles. Mon approche associe rigueur, expérience utilisateur et souci de la qualité du code. Ce portfolio présente mes réalisations dans le cadre de ma formation et de mes projets.',
  location: 'Lubumbashi, RD Congo',
  email: '', // renseigner avant livraison
  github: '', // URL complète du compte GitHub
  linkedin: '', // URL complète ou laisser vide
  whatsapp: '', // URL wa.me/243... à renseigner si souhaité
};
export const skills = [
  { group:'Frontend', items:['HTML5','CSS3','JavaScript','React','Tailwind CSS'] },
  { group:'Backend & données', items:['API REST','Node.js (en apprentissage)','SQL (en apprentissage)'] },
  { group:'Outils & qualité', items:['Git & GitHub','Figma','Responsive design','Vercel'] },
];
export const projects = [
  { id:'quizzy', title:'Quizzy', category:'Application de quiz', description:'Présentation du projet Quizzy. Remplacer ce texte par les fonctionnalités effectivement développées et le problème traité.', stack:['JavaScript','Frontend'], image:'/project-quizzy.svg', github:'', demo:'', status:'À documenter' },
  { id:'taskflow', title:'TaskFlow', category:'Gestion de tâches', description:'Présentation du projet TaskFlow. Décrire les fonctionnalités réelles, votre contribution et les technologies effectivement utilisées.', stack:['Gestion de tâches','Frontend'], image:'/project-taskflow.svg', github:'', demo:'', status:'À documenter' },
  { id:'smartresto', title:'SmartResto', category:'Gestion de restaurant', description:'Présentation de SmartResto, projet collectif. Indiquer précisément les modules réalisés personnellement et ajouter une capture de l’application.', stack:['Nuxt','Tailwind CSS','API'], image:'/project-smartresto.svg', github:'', demo:'', status:'Projet collectif' },
];
export const timeline = [
  { date:'2026', title:'Codecamp PrimeTek Academy', description:'Formation pratique en développement web — Quizzy, TaskFlow et projet collectif SmartResto.' },
  { date:'Aujourd’hui', title:'Projets web et progression continue', description:'Conception d’interfaces, développement d’applications et approfondissement des fondamentaux full-stack.' },
];
