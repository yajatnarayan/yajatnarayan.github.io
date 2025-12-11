export function Projects({ projects }) {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, idx) => (
          <div key={idx} className="project-item">
            <h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.pills.map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
