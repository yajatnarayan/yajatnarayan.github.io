import { useState } from 'react'
import './App.css'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { useScrollSpy } from './hooks/useScrollSpy'
import { personalInfo, navigation, experiences, projects, skills, education } from './data/resume'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Filter out chat from navigation
  const mainNav = navigation.filter(item => item.id !== 'chat')

  // Get section IDs for scrollspy
  const sectionIds = mainNav.map(item => item.id)

  // Use scrollspy hook to track active section
  const activeSection = useScrollSpy(sectionIds)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <div className="app">
      <a href="#content" className="skip-link">
        Skip to content
      </a>

      <div className="container">
        {/* Left Column - Sticky Sidebar */}
        <header className="sidebar">
          <div className="sidebar__inner">
            <div className="sidebar__header">
              <h1 className="sidebar__name">{personalInfo.name}</h1>
              <h2 className="sidebar__role">{personalInfo.role}</h2>
              <p className="sidebar__tagline">{personalInfo.tagline}</p>
            </div>

            <nav className="sidebar__nav" aria-label="Primary navigation">
              <ul>
                {mainNav.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(item.id)
                      }}
                      className={activeSection === item.id ? 'active' : ''}
                      aria-current={activeSection === item.id ? 'page' : undefined}
                    >
                      <span className="nav-indicator"></span>
                      <span className="nav-text">{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="sidebar__footer">
              <div className="sidebar__social">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" width="20" height="20">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Email"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div className="mobile-nav-overlay" onClick={() => setIsMobileMenuOpen(false)}>
            <nav className="mobile-nav" onClick={(e) => e.stopPropagation()}>
              <ul>
                {mainNav.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(item.id)
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}

        {/* Right Column - Scrollable Content */}
        <main className="main-content" id="content">
          <About />
          <Experience experiences={experiences} />
          <Projects projects={projects} />
          <Skills skills={skills} />
          <Education education={education} />
          <Contact />

          <footer className="footer">
            <p>
              Built with React. Design inspired by{' '}
              <a href="https://brittanychiang.com" target="_blank" rel="noopener noreferrer">
                Brittany Chiang
              </a>
            </p>
          </footer>
        </main>
      </div>
    </div>
  )
}

export default App
