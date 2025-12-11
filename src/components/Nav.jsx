import { useState, useEffect } from 'react'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="/" className="logo" aria-label="Home">
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon
              points="21,3 39,12 39,30 21,39 3,30 3,12"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <text
              x="21"
              y="27"
              fontFamily="var(--font-mono)"
              fontSize="16"
              fontWeight="700"
              fill="currentColor"
              textAnchor="middle"
            >
              YN
            </text>
          </svg>
        </a>

        <div className="nav-links">
          <ol>
            <li>
              <button onClick={() => scrollToSection('about')}>
                <span>01.</span> About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('experience')}>
                <span>02.</span> Experience
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('projects')}>
                <span>03.</span> Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')}>
                <span>04.</span> Contact
              </button>
            </li>
          </ol>
          <a href="/Resume.pdf" className="resume-button" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>

        <div className="hamburger">
          <button aria-label="Menu">
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
          </button>
        </div>
      </div>
    </nav>
  )
}
