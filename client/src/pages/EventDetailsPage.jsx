import { Link, useParams } from 'react-router-dom'
import { events } from '../data/mockEvents'

function EventDetailsPage() {
  const { eventId } = useParams()
  const event = events.find((item) => item.id === eventId)

  if (!event) {
    return (
      <section className="section-block centered-card">
        <h2>Event not found</h2>
        <p>This event may have been removed or is no longer available.</p>
        <Link to="/discover" className="solid-button">
          Back to Discover
        </Link>
      </section>
    )
  }

  return (
    <section className="section-block event-detail">
      <p className="event-category">{event.category}</p>
      <h2>{event.title}</h2>
      <p className="hero-copy">{event.description}</p>

      <div className="event-detail-grid">
        <div>
          <p className="detail-label">Date & Time</p>
          <p>{event.date} at {event.time}</p>
        </div>
        <div>
          <p className="detail-label">Location</p>
          <p>{event.location}</p>
        </div>
        <div>
          <p className="detail-label">Host</p>
          <p>{event.host}</p>
        </div>
        <div>
          <p className="detail-label">Price</p>
          <p>{event.price}</p>
        </div>
      </div>

      <div className="tag-row">
        {event.tags.map((tag) => (
          <span key={tag} className="event-tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="hero-actions">
        <button type="button" className="solid-button">
          Join Event
        </button>
        <Link to="/discover" className="ghost-button">
          Browse More
        </Link>
      </div>
    </section>
  )
}

export default EventDetailsPage
