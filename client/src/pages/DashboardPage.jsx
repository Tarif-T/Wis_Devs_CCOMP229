import { events } from '../data/mockEvents'

function DashboardPage() {
  return (
    <section className="section-block">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Member Dashboard</p>
          <h2>Your activity overview</h2>
        </div>
      </div>

      <div className="stats-grid">
        <article>
          <p className="detail-label">Events Joined</p>
          <h3>8</h3>
        </article>
        <article>
          <p className="detail-label">Events Hosted</p>
          <h3>3</h3>
        </article>
        <article>
          <p className="detail-label">Saved Events</p>
          <h3>12</h3>
        </article>
      </div>

      <h3 className="subheading">Upcoming events</h3>
      <div className="list-panel">
        {events.slice(0, 3).map((event) => (
          <div key={event.id} className="list-item">
            <div>
              <p className="event-category">{event.category}</p>
              <strong>{event.title}</strong>
            </div>
            <p>{event.date}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DashboardPage
