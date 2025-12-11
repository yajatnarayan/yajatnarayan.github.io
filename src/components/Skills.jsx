export function Skills({ skills }) {
  // Flatten all skills into a single list
  const allSkills = skills.flatMap(group => group.items)

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {allSkills.map((skill, idx) => (
          <span key={idx} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
