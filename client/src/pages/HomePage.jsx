import { Link } from 'react-router-dom'
import EventCard from '../components/EventCard'
import logoImage from '../assets/Wis_Devs_logo.jpeg'
import { events } from '../data/mockEvents'

function HomePage() {
  return (
    <>
      <section className="hero-panel">
        <img
          src={logoImage}
          alt="Wise Devs brand mark"
          className="hero-logo-stamp"
        />
        <p className="eyebrow">Meet people. Build together.</p>
        <h1>Discover events that match your interests and your energy.</h1>
        <p className="hero-copy">
          Wise Devs helps people create, discover, and join communities around
          coding, creativity, and real-world connection.
        </p>
        <div className="hero-actions">
          <Link to="/discover" className="solid-button">
            Explore Events
          </Link>
          <Link to="/create-event" className="ghost-button">
            Host an Event
          </Link>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <h2>Trending this week</h2>
          <Link to="/discover" className="text-link">
            See all events
          </Link>
        </div>
        <div className="grid-layout">
          {events.slice(0, 3).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </>
  )
}

export default HomePage
