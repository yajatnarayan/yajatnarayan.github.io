import { useEffect, useState } from 'react'
import './App.css'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

const projects = [
  {
    title: 'Holos VR Training Platform',
    tag: 'VR',
    description:
      'Building VR training software with Unity and Swift to streamline U.S. Air Force equipment training and reduce risk.',
    pills: ['Unity', 'Swift', 'UX testing', 'Figma'],
    link: 'https://www.linkedin.com/in/yajat-narayan-905926245/',
  },
  {
    title: 'Moon Bar Digital Experience',
    tag: 'Web',
    description:
      'Interactive marketing site with analytics and SEO tuning that drives >$50k monthly sales for a hospitality partner.',
    pills: ['JavaScript', 'SEO', 'Analytics', 'Figma'],
    link: 'https://github.com/yajatnarayan',
  },
  {
    title: 'Deep Learning Scene Recognition',
    tag: 'AI',
    description:
      'LeNet-5 CNN in PyTorch for MiniPlaces; achieved 25%+ validation improvement with tuning and augmentation.',
    pills: ['Python', 'PyTorch', 'CNN', 'Data pipelines'],
    link: 'https://github.com/yajatnarayan/NeuralNetwork',
  },
  {
    title: 'Password Security Analysis',
    tag: 'Security',
    description:
      'Password hardening with Argon1, breach detection APIs, and simulated cracking to reduce vulnerability by 80%.',
    pills: ['Python', 'Encryption', 'Security'],
    link: 'https://github.com/yajatnarayan',
  },
]

const experiences = [
  {
    company: 'Holos.io',
    location: 'Madison, WI',
    timeframe: 'Aug 2025 – Present',
    role: 'Software Developer',
    focus: 'VR Development, Unity, Swift, Figma Prototyping, UX Testing',
    bullets: [
      'Building VR training software for U.S. Air Force operations; prototyping with Unity and Swift.',
      'Contributing to a $15M contract with user studies, iterative prototyping, and UX validation.',
      'Improved training efficiency by 35% through simulation refinements.',
    ],
  },
  {
    company: 'Moon Bar',
    location: 'Madison, WI',
    timeframe: 'Sep 2025 – Oct 2025',
    role: 'Web Developer',
    focus: 'JavaScript, HTML/CSS, SEO, Analytics, Figma',
    bullets: [
      'Shipped an interactive site with analytics and SEO optimization.',
      'Boosted visibility and engagement, driving $50k+ monthly sales.',
    ],
  },
  {
    company: 'Siemens Industry Inc',
    location: 'Buffalo Grove, IL',
    timeframe: 'May 2025 – Aug 2025',
    role: 'Software Developer',
    focus: 'AWS, DynamoDB, CI/CD, Go, Automation, Data Processing',
    bullets: [
      'Built a decoupled CI/CD pipeline for 100k+ data points across AWS and DynamoDB.',
      'Raised data management efficiency by 35% with async processing and automation.',
      'Cut downtime by 45% via automated validation and continuous deployment.',
    ],
  },
  {
    company: 'Greeky',
    location: 'Remote',
    timeframe: 'Jun 2024 – Aug 2024',
    role: 'Web Developer',
    focus: 'React, Docker, CI/CD, Frontend Optimization',
    bullets: [
      'Delivered responsive UIs with React and Dockerized deployments.',
      'Reduced load times by 40%, generating $2k revenue in the first month.',
    ],
  },
  {
    company: 'Codivate',
    location: 'Remote',
    timeframe: 'Jun 2020 – Aug 2021',
    role: 'Founder & Instructor',
    focus: 'Java, Curriculum Design, Education Management',
    bullets: ['Taught K-12 Java and managed 10 tutors, increasing retention by 30%.'],
  },
]

const skills = [
  {
    title: 'Programming',
    items: ['Python', 'Java', 'Go', 'Swift', 'C', 'JavaScript/React', 'SQL/MySQL', 'Julia'],
  },
  {
    title: 'Cloud & Ops',
    items: ['AWS', 'Docker', 'CI/CD', 'DynamoDB', 'Git', 'Automation pipelines'],
  },
  {
    title: 'Product & Tools',
    items: ['Figma', 'UX testing', 'Analytics/SEO', 'Linear', 'VSCode', 'PyCharm', 'Eclipse'],
  },
]

const education = {
  school: 'University of Wisconsin–Madison',
  timeline: 'Aug 2022 – Oct 2025',
  details: ['B.S. Computer Science', 'Minor: Mathematics'],
}

const marqueeItems = [
  { label: 'AWS Cloud Practitioner', href: 'https://www.credly.com/badges' },
  { label: 'Network+', href: 'https://www.credly.com/badges' },
  { label: 'Security+', href: 'https://www.credly.com/badges' },
  { label: 'Unity VR', href: 'https://unity.com/' },
  { label: 'Swift', href: 'https://developer.apple.com/swift/' },
  { label: 'React', href: 'https://react.dev/' },
  { label: 'Go', href: 'https://go.dev/' },
  { label: 'Docker', href: 'https://www.docker.com/' },
  { label: 'CI/CD', href: 'https://12factor.net/' },
  { label: 'Analytics & SEO', href: 'https://developers.google.com/analytics' },
  { label: 'PyTorch', href: 'https://pytorch.org/' },
  { label: 'Figma Systems', href: 'https://www.figma.com/' },
]

function App() {
  const [navOpen, setNavOpen] = useState(false)
  const [activeId, setActiveId] = useState('about')
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
    }
    return 'dark'
  })

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

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const closeNav = () => setNavOpen(false)
  const toggleNav = () => setNavOpen((open) => !open)
  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))

  return (
    <div className="page">
      <div className="bg-canvas" aria-hidden>
        <div className="orb orb--a" />
        <div className="orb orb--b" />
        <div className="orb orb--c" />
        <div className="grid-veil" />
      </div>
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
        <div className="header__actions">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          </button>
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
        </div>
      </header>

      <main className="shell" id="top">
        <section className="hero" id="about" data-section>
          <div className="hero__content">
            <p className="eyebrow">Portfolio 2025</p>
            <h1>Yajat Narayan</h1>
            <p className="lede">
              CS @ UW–Madison (Math minor) improving my CS skills through VR training, frontend engineering, and
              systems-minded product work. AWS Cloud, Network+, and Security+ certified.
            </p>
            <div className="hero__actions">
              <a className="btn" href="#projects">
                View projects
              </a>
              <a className="btn btn--ghost" href="#contact">
                Get in touch
              </a>
              <a className="btn btn--ghost" href="/Resume.pdf" download>
                Download resume
              </a>
            </div>
            <div className="hero__meta">
              <div>
                <p className="meta__label">Location</p>
                <p className="meta__value">Madison, WI · Remote-friendly</p>
              </div>
              <div>
                <p className="meta__label">Focus</p>
                <p className="meta__value">Improving CS skills across systems, AI, and product engineering</p>
              </div>
              <div>
                <p className="meta__label">Currently</p>
                <p className="meta__value">Software Developer @ Holos.io</p>
              </div>
            </div>
          </div>
          <div className="hero__panel">
            <div className="panel__header">
              <p className="eyebrow">Snapshot</p>
              <span className="pill pill--success">Open to roles</span>
            </div>
            <ul className="panel__list">
              <li>
                <p className="meta__label">Certifications</p>
                <p className="meta__value">AWS Cloud Practitioner, Network+, Security+</p>
              </li>
              <li>
                <p className="meta__label">Learning</p>
                <p className="meta__value">Deepening CS foundations via VR systems, ML, and web</p>
              </li>
              <li>
                <p className="meta__label">Tooling</p>
                <p className="meta__value">AWS, Docker, Figma, CI/CD, Analytics</p>
              </li>
            </ul>
            <div className="panel__footer">
              <p>Collaborating on VR, frontend, and data-heavy products.</p>
              <a className="link" href="#contact">
                Drop a line →
              </a>
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden>
          <div className="marquee__track">
            {marqueeItems.concat(marqueeItems).map((item, index) => (
              <a key={`${item.label}-${index}`} className="marquee__item" href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <section className="section" id="experience" data-section>
          <div className="section__header">
            <p className="eyebrow">Experience</p>
            <h2>Recent roles & impact</h2>
            <p className="section__lede">
              Product-focused engineering across VR training, web experiences, and data-heavy workflows.
            </p>
          </div>
          <div className="timeline">
            {experiences.map((exp) => (
              <article key={exp.company} className="timeline__item card card--project">
                <div className="timeline__dot" />
                <div className="timeline__content">
                  <div className="card__header">
                    <div>
                      <h3>{exp.company}</h3>
                      <p className="meta__label">{exp.location}</p>
                    </div>
                    <span className="pill">{exp.timeframe}</span>
                  </div>
                  <p className="meta__label">{exp.role}</p>
                  <p>{exp.focus}</p>
                  <ul className="list">
                    {exp.bullets.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
            <div className="timeline__line" aria-hidden />
          </div>
        </section>

        <section className="section" id="projects" data-section>
          <div className="section__header">
            <p className="eyebrow">Projects</p>
            <h2>Selected work and explorations</h2>
            <p className="section__lede">Case studies spanning VR, web, ML, and security.</p>
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
                <a className="link" href={project.link}>
                  View details →
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

        <section className="section" id="education" data-section>
          <div className="section__header">
            <p className="eyebrow">Education</p>
            <h2>{education.school}</h2>
            <p className="section__lede">{education.timeline}</p>
          </div>
          <div className="card card--stacked">
            {education.details.map((item) => (
              <p key={item} className="meta__value">
                {item}
              </p>
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
              <a className="btn" href="mailto:yajatnarayan@gmail.com">
                yajatnarayan@gmail.com
              </a>
            </div>
            <div className="card card--stacked">
              <div>
                <p className="meta__label">LinkedIn</p>
                <a className="link" href="https://www.linkedin.com/in/yajat-narayan-905926245/">
                  linkedin.com/in/yajat-narayan-905926245
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
                <a className="link" href="/Resume.pdf" download>
                  Download resume →
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
