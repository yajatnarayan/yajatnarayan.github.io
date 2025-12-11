import { personalInfo } from '../data/resume'

export function MobileHeader({ onToggleSidebar, sidebarOpen }) {
  return (
    <div className="mobile-header">
      <div className="mobile-brand">{personalInfo.name}</div>
      <button
        className={`mobile-nav-toggle ${sidebarOpen ? 'mobile-nav-toggle--open' : ''}`}
        onClick={onToggleSidebar}
        aria-label="Toggle navigation menu"
        aria-expanded={sidebarOpen}
      >
        <span />
        <span />
        <span />
      </button>
    </div>
  )
}
