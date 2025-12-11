import { personalInfo } from '../data/resume'

export function Sidebar({ navigation, activeId, theme, onThemeToggle, sidebarOpen, onClose }) {
  return (
    <aside className={`site-sidebar ${sidebarOpen ? 'site-sidebar--open' : ''}`}>
      <div className="sidebar__header">
        <h1 className="brand">{personalInfo.name}</h1>
        <p className="brand__subtitle">{personalInfo.role}</p>
        <p className="brand__tagline">{personalInfo.tagline}</p>
      </div>

      <nav className="sidebar__nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <a
            key={item.id}
            className={`nav__link ${activeId === item.id ? 'is-active' : ''}`}
            href={`#${item.id}`}
            onClick={onClose}
            aria-current={activeId === item.id ? 'page' : undefined}
          >
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="sidebar__footer">
        <div className="social-links">
          <a
            className="social-link"
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
          <a
            className="social-link"
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            className="social-link"
            href={`mailto:${personalInfo.email}`}
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>
        <button
          className="theme-toggle"
          onClick={onThemeToggle}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          aria-pressed={theme === 'light'}
        >
          {theme === 'dark' ? '☀ Light mode' : '🌙 Dark mode'}
        </button>
      </div>
    </aside>
  )
}
