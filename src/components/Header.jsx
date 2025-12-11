import { useRef } from 'react'
import { useFocusTrap } from '../hooks/useFocusTrap'

export function Header({ navigation, activeId, navOpen, onNavToggle, onNavClose, theme, onThemeToggle }) {
  const navRef = useRef(null)
  useFocusTrap(navOpen, navRef)

  const handleBackdropClick = (event) => {
    if (navOpen && !navRef.current?.contains(event.target)) {
      onNavClose()
    }
  }

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Yajat Narayan, home">
          YN
        </a>
        <nav
          ref={navRef}
          className={`nav ${navOpen ? 'nav--open' : ''}`}
          aria-label="Main navigation"
          aria-controls="main-content"
        >
          {navigation.map((item) => (
            <a
              key={item.id}
              className={`nav__link ${activeId === item.id ? 'is-active' : ''}`}
              href={`#${item.id}`}
              onClick={onNavClose}
              aria-current={activeId === item.id ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header__actions">
          <button
            className="theme-toggle"
            onClick={onThemeToggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            aria-pressed={theme === 'light'}
          >
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          </button>
          <a className="nav__cta" href="#contact">
            Let's talk
          </a>
          <button
            className="nav__toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={navOpen}
            aria-controls="main-navigation"
            onClick={onNavToggle}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
      {navOpen && <div className="nav-backdrop" onClick={handleBackdropClick} aria-hidden="true" />}
    </>
  )
}
