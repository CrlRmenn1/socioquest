import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { Lock, Mail, Shield } from 'lucide-react'

function LoginPage() {
  const navigate = useNavigate()
  const [isAdmin, setIsAdmin] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    navigate(isAdmin ? '/app/admin' : '/app')
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-card__brand">
          <span className="brand-mark brand-mark--large">
            <Shield size={26} />
          </span>
          <h1>Welcome back</h1>
          <p>Sign in to continue your cyber-defense training.</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="field">
            <span>Email</span>
            <div className="field__control">
              <Mail size={16} />
              <input type="email" placeholder="your.email@domain.com" required />
            </div>
          </label>

          <label className="field">
            <span>Password</span>
            <div className="field__control">
              <Lock size={16} />
              <input type="password" placeholder="••••••••" required />
            </div>
          </label>

          <label className="toggle-row">
            <input type="checkbox" checked={isAdmin} onChange={(event) => setIsAdmin(event.target.checked)} />
            <span>Sign in as Administrator</span>
          </label>

          <button type="submit" className="btn btn-primary btn-block">
            Sign in
          </button>
        </form>

        <p className="auth-card__footer">
          Need an account? <Link to="/">Return to the landing page</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage