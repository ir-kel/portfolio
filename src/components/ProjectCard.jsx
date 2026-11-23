import { ArrowUpRight, Github } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image-wrap">
        <img
          src={project.image}
          alt={`Aperçu de ${project.title} — visuel temporaire à remplacer par une capture réelle`}
          width="640"
          height="400"
          loading="lazy"
        />
      </div>

      <div className="project-body">
        <div className="project-top">
          <span className="eyebrow">{project.category}</span>
          <span className="project-status">{project.status}</span>
        </div>

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <ul className="tag-list" aria-label={`Technologies pour ${project.title}`}>
          {project.stack.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="project-links">
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer">
              <Github size={17} /> Code GitHub
            </a>
          ) : (
            <span className="muted-link">
              <Github size={17} /> GitHub à ajouter
            </span>
          )}

          {project.demo ? (
            <a href={project.demo} target="_blank" rel="noreferrer">
              Voir le site <ArrowUpRight size={17} />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}