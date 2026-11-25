// À PERSONNALISER : informations personnelles et liens. Ne jamais inventer les réalisations.
export const profile = {
  name: 'Elisée JP Kanyinda',
  role: 'Développeur Web Full-Stack',
  greeting: 'Bonjour, je suis',
  tagline: 'Je conçois et développe des applications web modernes, performantes et intuitives, en transformant des besoins concrets en solutions numériques.',
  about: 'Je développe des interfaces claires et des applications web utiles. Mon approche associe rigueur, expérience utilisateur et souci de la qualité du code. Ce portfolio présente mes réalisations dans le cadre de ma formation et de mes projets.',
  location: 'Lubumbashi, RD Congo',
  email: 'ireliseekanel57@gmail.com',
  github: 'https://github.com/ir-kel', // URL complète du compte GitHub
  linkedin: 'https://www.linkedin.com/in/elisée-jp-kanyinda-517b69142', // URL complète ou laisser vide
  whatsapp: 'https://wa.me/243815749847?text=Bonjour%20!', // URL wa.me/243... à renseigner si souhaité
};
export const skills = [
  { group:'Frontend', items:['HTML5','CSS3','JavaScript','React','Nuxt','Tailwind CSS'] },
  { group:'Backend & données', items:['API REST','Node.js (en apprentissage)','SQL (en apprentissage)'] },
  { group:'Outils & qualité', items:['Git & GitHub','Figma','Responsive design','Vercel'] },
];


export const projects = [
  {
    id: 'quizzy',
    title: 'Quizzy',
    category: 'Application de quiz',
    description:
      "Application de quiz réalisée en équipe avec JavaScript natif. J'ai développé l'éditeur de questions personnelles : validation, sauvegarde locale, suppression et import/export JSON.",
    stack: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage'],
    image: '/project-quizzy.svg',
    github: 'https://github.com/shammah-lab/Quizzy-Application-PrimeTek-26',
    demo: '',
    status: 'Projet collectif',
  },
  {
    id: 'taskflow',
    title: 'TaskFlow',
    category: 'Gestion de projets et tâches',
    description:
      'Application React de gestion de projets et de tâches. Elle comprend une connexion pédagogique, les opérations CRUD, les filtres, la recherche et un tableau de bord de progression.',
    stack: ['React', 'Vite', 'React Router', 'JSON Server'],
    image: '/project-taskflow.svg',
    github: 'https://github.com/ir-kel/taskflow-react',
    demo: '',
    status: 'Projet individuel',
  },
  {
    id: 'smartresto',
    title: 'SmartResto',
    category: 'Gestion de restaurant',
    description:
      "Projet collectif réalisé avec Nuxt. Ma contribution porte sur le module Factures & Paiements : génération des factures, calcul des montants, suivi des règlements et reste à payer.",
    stack: ['Nuxt', 'Vue', 'Tailwind CSS', 'JSON Server'],
    image: '/project-smartresto.svg',
    github: 'https://github.com/traorenfamory095-star/smartresto',
    demo: '',
    status: 'Projet collectif',
  },
];



export const timeline = [
  { date:'2026', title:'Codecamp PrimeTek Academy', description:'Formation pratique en développement web — Quizzy, TaskFlow et projet collectif SmartResto.' },
  { date:'Aujourd’hui', title:'Projets web et progression continue', description:'Conception d’interfaces, développement d’applications et approfondissement des fondamentaux full-stack.' },
];
