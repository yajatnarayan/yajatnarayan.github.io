import { useEffect, useState } from 'react'
import './App.css'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

const projects = [
  {
    title: 'Design System Starter',
    tag: 'React',
    description:
      'Tokens, primitives, and Storybook docs that keep product, design, and engineering aligned.',
    pills: ['Accessibility', 'Design tokens', 'Docs'],
  },
  {
    title: 'Insight Dashboard',
    tag: 'TypeScript',
    description:
      'Responsive data viz with keyboard-first controls, offline-friendly caching, and staged loading.',
    pills: ['Data viz', 'State machines', 'Caching'],
  },
  {
    title: 'Launch Microsite',
    tag: 'CSS',
    description:
      'Motion-rich product story with scroll-triggered reveals, semantic markup, and SEO-friendly structure.',
    pills: ['Animations', 'SEO', 'Responsive art'],
  },
]

const skills = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Vite', 'CSS Modules', 'Framer Motion'],
  },
  {
    title: 'Quality',
    items: ['Jest', 'Vitest', 'Playwright', 'Storybook', 'Lighthouse', 'Accessibility audits'],
  },
  {
    title: 'Backend & Ops',
    items: ['Node', 'Express', 'REST', 'PostgreSQL', 'Docker', 'CI/CD'],
  },
]

function App() {
  const [navOpen, setNavOpen] = useState(false)
  const [activeId, setActiveId] = useState('about')

  useEffect(() => {
    const sections = document.querySelectorAll('[data-section]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id')
            if (id) setActiveId(id)
          }
        })
      },
      { threshold: 0.45 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setNavOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const closeNav = () => setNavOpen(false)
  const toggleNav = () => setNavOpen((open) => !open)

  return (
    <div className="page">
      <header className="site-header">
        <a className="brand" href="#top">
          YN
        </a>
        <nav className={`nav ${navOpen ? 'nav--open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              className={`nav__link ${activeId === item.id ? 'is-active' : ''}`}
              href={`#${item.id}`}
              onClick={closeNav}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a className="nav__cta" href="#contact">
          Let&apos;s talk
        </a>
        <button
          className="nav__toggle"
          aria-label="Toggle navigation"
          aria-expanded={navOpen}
          onClick={toggleNav}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <main className="shell" id="top">
        <section className="hero" id="about" data-section>
          <div className="hero__content">
            <p className="eyebrow">Portfolio 2025</p>
            <h1>Yajat Narayan</h1>
            <p className="lede">
              Frontend-focused developer crafting crisp interfaces, thoughtful interactions, and durable web
              experiences.
            </p>
            <div className="hero__actions">
              <a className="btn" href="#projects">
                View projects
              </a>
              <a className="btn btn--ghost" href="#contact">
                Get in touch
              </a>
            </div>
            <div className="hero__meta">
              <div>
                <p className="meta__label">Location</p>
                <p className="meta__value">Remote / IST</p>
              </div>
              <div>
                <p className="meta__label">Focus</p>
                <p className="meta__value">UI engineering, UX polish, performance</p>
              </div>
              <div>
                <p className="meta__label">Currently</p>
                <p className="meta__value">Building personal case studies</p>
              </div>
            </div>
          </div>
          <div className="hero__panel">
            <div className="panel__header">
              <p className="eyebrow">Snapshot</p>
              <span className="pill pill--success">Available for work</span>
            </div>
            <ul className="panel__list">
              <li>
                <p className="meta__label">Years in web</p>
                <p className="meta__value">3+</p>
              </li>
              <li>
                <p className="meta__label">Favorite stack</p>
                <p className="meta__value">React, TypeScript, CSS-in-JS</p>
              </li>
              <li>
                <p className="meta__label">What I ship</p>
                <p className="meta__value">Accessible, responsive, tested UIs</p>
              </li>
            </ul>
            <div className="panel__footer">
              <p>Open to collaborations, contract, or full-time opportunities.</p>
              <a className="link" href="#contact">
                Drop a line →
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="projects" data-section>
          <div className="section__header">
            <p className="eyebrow">Projects</p>
            <h2>Selected work and explorations</h2>
            <p className="section__lede">
              Case studies and prototypes that highlight execution, UX polish, and systems thinking.
            </p>
          </div>
          <div className="grid">
            {projects.map((project) => (
              <article key={project.title} className="card card--project">
                <div className="card__header">
                  <h3>{project.title}</h3>
                  <span className="pill">{project.tag}</span>
                </div>
                <p>{project.description}</p>
                <div className="tags">
                  {project.pills.map((pill) => (
                    <span key={pill}>{pill}</span>
                  ))}
                </div>
                <a className="link" href="#">
                  Read more →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills" data-section>
          <div className="section__header">
            <p className="eyebrow">Skills</p>
            <h2>Tools and technologies</h2>
            <p className="section__lede">A quick view of my preferred stack and comfort zones.</p>
          </div>
          <div className="grid grid--skills">
            {skills.map((group) => (
              <div key={group.title} className="card">
                <h3>{group.title}</h3>
                <div className="tags">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="contact" data-section>
          <div className="section__header">
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s build something thoughtful</h2>
            <p className="section__lede">Tell me about the problem, timeline, and what success looks like.</p>
          </div>
          <div className="split">
            <div className="card">
              <h3>Prefer email?</h3>
              <p>Reach out with a short brief, and I&apos;ll reply within one business day.</p>
              <a className="btn" href="mailto:hello@yajatnarayan.com">
                hello@yajatnarayan.com
              </a>
            </div>
            <div className="card card--stacked">
              <div>
                <p className="meta__label">LinkedIn</p>
                <a className="link" href="https://www.linkedin.com">
                  linkedin.com/in/yajatnarayan
                </a>
              </div>
              <div>
                <p className="meta__label">GitHub</p>
                <a className="link" href="https://github.com/yajatnarayan">
                  github.com/yajatnarayan
                </a>
              </div>
              <div>
                <p className="meta__label">Resume</p>
                <a className="link" href="#">
                  Request the latest PDF →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__brand">YN</div>
        <p>Designing, building, and shipping considerate web experiences.</p>
        <a className="link" href="#top">
          Back to top ↑
        </a>
      </footer>
    </div>
  )
}

export default App
