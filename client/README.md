# Wise Devs Frontend

Frontend and UI/UX layer for the COMP229 final project, implemented with React + Vite.

## Implemented Screens

- Home / Hero
- Discover Events
- Event Details
- Create Event
- Dashboard
- Login
- Register
- 404 Not Found

## Stack

- React
- React Router DOM
- Vite
- Custom CSS design system (responsive)

## Local Development

1. `npm install`
2. `npm run dev`

## Production Build

1. `npm run build`
2. `npm run preview`

## Integration Notes

- Replace mock event data in `src/data/mockEvents.js` with API responses from your Express/MongoDB backend.
- Hook auth forms (`LoginPage`, `RegisterPage`) to backend authentication endpoints.
- Connect create-event form submit action to the event creation API route.
