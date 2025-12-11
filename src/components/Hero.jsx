import { personalInfo } from '../data/resume'

export function Hero() {
  return (
    <section className="hero" id="hero">
      <p className="hero-intro">Hi, my name is</p>
      <h1 className="hero-name">{personalInfo.name}</h1>
      <h2 className="hero-title">I build VR training systems and scalable web products.</h2>
      <p className="hero-description">
        I'm a software developer specializing in immersive VR experiences, frontend engineering, and cloud
        infrastructure. Currently building training software for the U.S. Air Force at{' '}
        <a href="https://holos.io" target="_blank" rel="noopener noreferrer">
          Holos.io
        </a>
        —reducing training time by 35% through interactive simulations.
      </p>
      <a className="email-link-hero" href={`mailto:${personalInfo.email}`}>
        Get In Touch
      </a>
    </section>
  )
}
