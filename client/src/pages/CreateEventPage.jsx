function CreateEventPage() {
  return (
    <section className="section-block form-panel">
      <p className="eyebrow">Host Experience</p>
      <h2>Create a new event</h2>
      <p className="hero-copy">
        Share your event details below. Back-end integration can post this form
        directly to your Express API.
      </p>

      <form className="form-grid">
        <label>
          Event Title
          <input type="text" placeholder="e.g., Intro to MERN" />
        </label>

        <label>
          Category
          <select defaultValue="">
            <option value="" disabled>
              Select category
            </option>
            <option>Technology</option>
            <option>Career</option>
            <option>Networking</option>
            <option>Art</option>
            <option>Wellness</option>
          </select>
        </label>

        <label>
          Date
          <input type="date" />
        </label>

        <label>
          Time
          <input type="time" />
        </label>

        <label>
          Location
          <input type="text" placeholder="Address or virtual link" />
        </label>

        <label>
          Max Attendees
          <input type="number" min="1" placeholder="50" />
        </label>

        <label className="full-width">
          Description
          <textarea rows="5" placeholder="Tell people what this event is about" />
        </label>

        <div className="hero-actions">
          <button type="submit" className="solid-button">
            Publish Event
          </button>
          <button type="button" className="ghost-button">
            Save Draft
          </button>
        </div>
      </form>
    </section>
  )
}

export default CreateEventPage
