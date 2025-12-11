export function Education({ education }) {
  return (
    <section id="education">
      <h2>Education</h2>
      <div className="education-content">
        <h3>{education.school}</h3>
        <div className="education-details">
          <p>
            <strong>{education.details.join(' • ')}</strong>
          </p>
          <p>{education.timeline}</p>
          <p>GPA: {education.gpa}</p>
        </div>
      </div>
    </section>
  )
}
