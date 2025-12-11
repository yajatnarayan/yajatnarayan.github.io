import { personalInfo } from '../data/resume'

export function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div>
        <p>
          I'm currently looking for new opportunities in frontend, VR, and product-focused engineering roles.
          Whether you have a question or just want to say hi, my inbox is always open!
        </p>
        <a href={`mailto:${personalInfo.email}`} className="contact-link">
          Say Hello
        </a>
      </div>
    </section>
  )
}
