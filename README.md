# PaNEOrama: High-Level Summary

**PaNEOrama** is an interactive web-based orrery that provides an immersive experience for exploring celestial bodies in our solar system. Similar to a traditional orrery, PaNEOrama visually showcases planets, near-Earth comets (NECs), near-Earth asteroids (NEAs), and potentially hazardous asteroids (PHAs). 

## Demo

**https://youtu.be/hxO8GDy3roc**


## Deployment

To deploy this project run

```bash
  pnpm install
  pnpm run dev
```


## Final Project
https://paneorama.vercel.app/

## Project Details

### What exactly does it do?
**PaNEOrama** is an interactive orrery web application that allows users to explore the solar system and examine thousands of near-Earth objects (PHAs, NECs, and NEAs) in orbit.

**Full Repository:** [https://github.com/abigail-br987/paNEOrama](https://github.com/abigail-br987/paNEOrama)

**Main Features Include:**
- **Time Travel:** Users can explore the solar system across different historical timelines.
- **NEO Display:** View all near-Earth objects of a specific type simultaneously.
- **Advanced Filtering:** Filter objects by semi-major axis, eccentricity, orbital period, albedo, MOID, diameter, orbit type for NEAs, accessibility, number of satellites, and past/future spacecraft missions.
- **Physical and Orbital Characteristics:** Display detailed information about NEOs and highlights two tourist attractions for each planet.
- **Close Approach Data:** Shows NEOs' close approaches, organized by either proximity to Earth or proximity to the current year (2024).

**Additional Features:**
- **Orbital Simulator:** Users can create custom orbits by adjusting parameters such as eccentricity, semi-major axis, inclination, ascending node, and longitude of periapsis.
- **Save Favorites:** Save near-Earth objects, perfect for users passionate about exploring the solar system.
- **ObservaNEAS:** Interactive map pop-up displaying the top 10 most observable near-Earth asteroids, tailored to the user's location using the NASA Small-Body Observability API.

### How does it work?
The backbone of **PaNEOrama** is built with React, dividing the application into reusable components. Additional libraries like `react-select` and `react-leaflet` support functionality like filtering and interactive maps.

The **orbital calculations** use an iterative algorithm to solve Kepler’s equations, incorporating the object’s epoch, mean motion, and mean anomaly to position celestial objects accurately as time progresses. The orbital propagator fetches celestial data, calculates 3D coordinates, and renders orbits in Three.js by converting angles to radians and scaling coordinates based on parameters.

**Viewpoint:** The 3D model offers a fresh perspective, looking up at the solar system from below, providing users with an unconventional yet immersive experience of planetary orbits.

**Data Sources:** The app’s main data source is the NASA Small Body Database Query, featuring information on over 5800 celestial objects, accessed in JSON format in real-time.

### Benefits
**User Experience:** Users assume the role of an alien on a mission to explore NEOs, enhancing engagement and offering a fresh perspective on the cosmos.

**Educational Tool:** PaNEOrama’s interactivity makes it an effective educational tool, ideal for teaching students about planetary orbits and the mathematics behind them.

**Global Reach:** As a web application, PaNEOrama is accessible to anyone with internet access, making it a valuable resource for global education in astronomy.

### Goals
**Educational Impact:** Our project aims to support astronomy education and inspire curiosity in space exploration. The observaNEAS feature can potentially foster community-based skywatch events, further broadening public engagement with the cosmos.
## API Reference

- **NASA Small-Body Database Query**: Used to retrieve information on thousands of celestial objects, serving as the main database for the application.
- **NASA Horizons API**: Provides ephemeris data for celestial bodies, enabling the calculation of their positions at specific times.
- **NASA Small-Body Observability API**: Powers the "ObservaNEAS" feature to identify observable near-Earth asteroids based on user location and visibility.
- **NASA NAIF Integer ID Codes**: Helps to map NEOs to their unique NASA identifiers for accurate data representation.


## Appendix

Any additional information goes here

- **NASA Planetary Models**: 3D assets for planetary and small-body visualization, bringing realism to our visual interface.
- **Elliptical Orbit Simulator by Daniel A. O’Neil**: Inspired elements of our orbit propagation logic.
