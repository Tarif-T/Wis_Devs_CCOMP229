import { Link } from 'react-router-dom'

function EventCard({ event }) {
  return (
    <article className="event-card">
      <p className="event-category">{event.category}</p>
      <h3>{event.title}</h3>
      <p className="event-meta">{event.date} at {event.time}</p>
      <p className="event-meta">{event.location}</p>
      <p className="event-description">{event.description}</p>
      <div className="tag-row">
        {event.tags.map((tag) => (
          <span key={tag} className="event-tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="card-footer">
        <span>
          {event.attendees}/{event.maxAttendees} joined
        </span>
        <Link to={`/events/${event.id}`} className="text-link">
          View details
        </Link>
      </div>
    </article>
  )
}

export default EventCard
