import { Outlet, NavLink } from 'react-router'
import { Coins, Shield, Home, Wrench, Trophy, FileText, UserRound } from 'lucide-react'

const navItems = [
  { icon: Home, label: 'Map', to: '/app' },
  { icon: Wrench, label: 'Repair', to: '/app/repair' },
  { icon: Trophy, label: 'Levels', to: '/app/levels' },
  { icon: FileText, label: 'Report', to: '/app/report' },
  { icon: UserRound, label: 'Profile', to: '/app/profile' },
]

function MainLayout() {
  return (
    <div className="app-shell">
      <header className="app-topbar">
        <div className="brand-lockup">
          <span className="brand-mark">
            <Shield size={18} />
          </span>
          <div>
            <div className="brand-name">SOCIOQUEST</div>
            <div className="brand-subtitle">AI-driven behavioral simulation</div>
          </div>
        </div>

        <div className="status-pill">
          <Coins size={15} />
          <span>1,240 pts</span>
        </div>
      </header>

      <main className="app-content">
        <Outlet />
      </main>

      <nav className="bottom-nav" aria-label="Primary">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink key={item.to} to={item.to} end className={({ isActive }) => `bottom-nav__item${isActive ? ' is-active' : ''}`}>
              <Icon size={18} />
              <span>{item.label}</span>
            </NavLink>
          )
        })}
      </nav>
    </div>
  )
}

export default MainLayout