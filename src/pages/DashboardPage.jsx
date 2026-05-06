import { AlertTriangle, Shield } from 'lucide-react'
import { departmentData } from '../data/siteContent.js'

function DashboardPage() {
  const visibleDepartments = departmentData

  return (
    <div className="dashboard-page">
      <section className="panel panel--hero">
        <div className="panel__header">
          <div>
            <p className="section-kicker">Department siege map</p>
            <h1>Security health overview</h1>
          </div>
        </div>

        <div className="alert-banner">
          <AlertTriangle size={18} />
          <div>
            <strong>Active simulation</strong>
            <p>2 departments are under pressure. Monitor carefully.</p>
          </div>
        </div>

        <div className="map-canvas">
          <div className="map-grid" />
          {visibleDepartments.map((dept) => (
            <div key={dept.id} className="map-node" style={{ left: `${dept.x}%`, top: `${dept.y}%` }}>
              <div className={`map-node__glow tone-${dept.tone}`} />
              <div className="map-node__card">
                <div className="map-node__top">
                  <Shield size={16} />
                  <span>#{dept.id}</span>
                </div>
                <strong>{dept.name}</strong>
                <div className="progress-line">
                  <div className="progress-line__fill" style={{ width: `${dept.safety}%` }} />
                </div>
                <span className="progress-caption">Safety {dept.safety}%</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="panel__header">
          <div>
            <p className="section-kicker">Department status</p>
            <h2>Live safety list</h2>
          </div>
        </div>

        <div className="department-list">
          {visibleDepartments.map((dept) => (
            <article key={dept.id} className="department-row">
              <div>
                <strong>{dept.name}</strong>
                <p>Node #{dept.id} active in the current simulation.</p>
              </div>
              <div className="department-row__score">{dept.safety}%</div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default DashboardPage
