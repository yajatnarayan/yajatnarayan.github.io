export function Skills({ skills }) {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((group, groupIdx) => (
          <div key={groupIdx} className="skills-group">
            <h3 className="skills-group-title">{group.title}</h3>
            <div className="skills-list">
              {group.items.map((skill, idx) => (
                <span key={idx} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
