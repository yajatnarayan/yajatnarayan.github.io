export function Experience({ experiences }) {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, idx) => (
          <div key={idx} className="experience-item">
            <div className="experience-time">{exp.timeframe}</div>
            <div className="experience-content">
              <h3>
                <span>{exp.role} · {exp.company}</span>
              </h3>
              <p className="experience-role">{exp.location}</p>
              <div className="experience-description">
                <ul>
                  {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
              {exp.focus && (
                <div className="experience-tech">
                  {exp.focus.split(', ').map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
