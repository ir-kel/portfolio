import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Code2,
  Layers3,
  Sparkles,
} from 'lucide-react';
import Header from './components/Header.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import { profile, skills, projects, timeline } from './data/portfolio.js';

function SectionHead({ num, eyebrow, title, desc }) {
  return (
    <div className="section-head">
      <span className="section-number">
        {num} / {eyebrow}
      </span>
      <h2>{title}</h2>
      {desc && <p>{desc}</p>}
    </div>
  );
}

function Socials({ footer = false }) {
  return (
    <div className={footer ? 'socials socials-footer' : 'socials'}>
      {profile.github && (
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <Github size={19} />
        </a>
      )}
      {profile.linkedin && (
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <Linkedin size={19} />
        </a>
      )}
      {profile.email && (
        <a href={`mailto:${profile.email}`} aria-label="Envoyer un e-mail">
          <Mail size={19} />
        </a>
      )}
      {profile.whatsapp && (
        <a href={profile.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
          <MessageCircle size={19} />
        </a>
      )}
    </div>
  );
}

export default function App() {
  return (
    <>
      <a href="#contenu" className="skip-link">
        Aller au contenu
      </a>
      <Header />
      <main id="contenu">
        <section className="hero" id="accueil">
          <div className="hero-glow" aria-hidden="true" />
          <div className="shell hero-inner">
            <div className="hero-copy">
              <div className="availability">
                <span className="pulse-dot" /> Portfolio professionnel · 2026
              </div>
              <p className="hero-hello">{profile.greeting}</p>
              <h1>
                {profile.name}
                <span className="hero-dot">.</span>
              </h1>
              <p className="hero-role">{profile.role}</p>
              <p className="hero-lead">{profile.tagline}</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#projets">
                  Voir mes projets <ArrowUpRight size={17} />
                </a>
                <a className="btn btn-secondary" href="#contact">
                  Me contacter <ArrowRight size={17} />
                </a>
              </div>
              <Socials />
            </div>
            <div
              className="hero-visual"
              aria-label="Illustration décorative d'un environnement de développement"
            >
              <div className="visual-top">
                <span className="mini-dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span>portfolio.jsx</span>
                <Code2 size={17} />
              </div>
              <div className="visual-content">
                <span className="code-muted">// Building useful things</span>
                <p>
                  <span className="code-blue">const</span> developer = {'{'}
                </p>
                <p className="indent">
                  name: <span className="code-green">"Jean Pierre"</span>,
                </p>
                <p className="indent">
                  focus: <span className="code-green">"Full-Stack Web"</span>,
                </p>
                <p className="indent">
                  values: [<span className="code-green">"Quality"</span>,{' '}
                  <span className="code-green">"UX"</span>]
                </p>
                <p>{'}'}</p>
                <div className="visual-terminal">
                  ✓ Design system ready
                  <br />
                  ✓ React components
                  <br />✓ Responsive by default
                </div>
              </div>
              <div className="floating-chip">
                <Sparkles size={16} /> Creative developer
              </div>
            </div>
          </div>
          <div className="shell scroll-hint">
            <ArrowDown size={16} /> Découvrir mon travail
          </div>
        </section>

        <section className="section section-about" id="apropos">
          <div className="shell">
            <SectionHead
              num="01"
              eyebrow="À PROPOS"
              title="Du besoin à une expérience web soignée."
            />
            <div className="about-grid">
              <div
                className="about-portrait"
                role="img"
                aria-label="Illustration abstraite JP ; remplacer par une photo personnelle libre de droits"
              >
                <span>
                  EJP<span>.</span>
                </span>
                <div className="portrait-label">
                  <MapPin size={15} />
                  {profile.location}
                </div>
              </div>
              <div className="about-copy">
                <p>{profile.about}</p>
                <p>
                  J’accorde de l’importance à la clarté des interfaces, à la maintenance du code et
                  au bon fonctionnement sur ordinateur comme sur téléphone.
                </p>
                <div className="values">
                  <div>
                    <Code2 size={23} />
                    <strong>Développement</strong>
                    <span>Des solutions utiles</span>
                  </div>
                  <div>
                    <Layers3 size={23} />
                    <strong>Design & UX</strong>
                    <span>Une interface claire</span>
                  </div>
                </div>
                <a className="text-link" href="#parcours">
                  Découvrir mon parcours <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-skills" id="competences">
          <div className="shell">
            <SectionHead
              num="02"
              eyebrow="COMPÉTENCES"
              title="Les outils que j’utilise."
              desc="Des technologies organisées par domaine. Les compétences en apprentissage sont indiquées comme telles."
            />
            <div className="skills-grid">
              {skills.map((group) => (
                <article className="skill-panel" key={group.group}>
                  <div className="skill-panel-head">
                    <div className="skill-symbol">
                      <Code2 size={22} />
                    </div>
                    <h3>{group.group}</h3>
                  </div>
                  <ul className="skill-list">
                    {group.items.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-projects" id="projets">
          <div className="shell">
            <SectionHead
              num="03"
              eyebrow="PROJETS"
              title="Une sélection de mes réalisations."
              desc="Trois projets issus de mon parcours de développement, présentés sans inventer de fonctionnalités."
            />
            <div className="projects-grid">
              {projects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section-journey" id="parcours">
          <div className="shell">
            <SectionHead
              num="04"
              eyebrow="PARCOURS"
              title="Mon parcours et mon apprentissage."
            />
            <div className="timeline">
              {timeline.map((entry, i) => (
                <article className="timeline-item" key={i}>
                  <span className="timeline-year">{entry.date}</span>
                  <div>
                    <h3>{entry.title}</h3>
                    <p>{entry.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-contact" id="contact">
          <div className="shell contact-panel">
            <span className="section-number">05 / CONTACT</span>
            <h2>Construisons quelque chose d’utile.</h2>
            <p>
              Un projet, une collaboration ou simplement une question ? Retrouvez mes moyens de
              contact ci-dessous.
            </p>
            <div className="contact-actions">
              {profile.email ? (
                <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                  Envoyer un e-mail <Mail size={18} />
                </a>
              ) : (
                <span className="contact-pending">
                  Adresse e-mail à renseigner dans src/data/portfolio.js
                </span>
              )}
              {profile.whatsapp && (
                <a
                  className="btn btn-secondary"
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp <MessageCircle size={18} />
                </a>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell footer-top">
          <div>
            <a href="#accueil" className="logo">
              <span className="logo-mark">
                EJP<span>.</span>
              </span>
              <span className="logo-text">portfolio</span>
            </a>
            <p>Développer des idées qui ont du sens.</p>
          </div>
          <nav aria-label="Liens du pied de page">
            <a href="#apropos">À propos</a>
            <a href="#projets">Projets</a>
            <a href="#competences">Compétences</a>
            <a href="#contact">Contact</a>
          </nav>
          <Socials footer />
        </div>
        <div className="shell footer-bottom">
          <span>
            © {new Date().getFullYear()} {profile.name}. Tous droits réservés.
          </span>
          <span>Construit avec React et beaucoup d’attention.</span>
        </div>
      </footer>
    </>
  );
}