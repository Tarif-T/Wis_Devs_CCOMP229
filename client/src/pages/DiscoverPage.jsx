import EventCard from '../components/EventCard'
import { eventCategories, events } from '../data/mockEvents'

function DiscoverPage() {
  return (
    <section className="section-block">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Event Discovery</p>
          <h2>Find your next event</h2>
        </div>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Search by title, host, or location"
          aria-label="Search events"
        />
        <select aria-label="Filter by category">
          <option value="">All Categories</option>
          {eventCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select aria-label="Sort events">
          <option>Sort: Upcoming</option>
          <option>Most Popular</option>
          <option>Newest</option>
        </select>
      </div>

      <div className="grid-layout">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  )
}

export default DiscoverPage
