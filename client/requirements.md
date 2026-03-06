## Packages
gsap | Industry-standard animation library for ScrollTrigger, parallax, and horizontal scrolling
@studio-freight/react-lenis | Smooth scrolling wrapper required for high-end cinematic feel
framer-motion | Page transitions, layout animations, and text reveals
react-hook-form | Form state management for the leads/contact form
@hookform/resolvers | Zod validation integration for react-hook-form

## Notes
- Smooth scrolling is active globally via Lenis. Avoid using fixed positioning that relies on native scroll events without syncing with Lenis.
- GSAP ScrollTrigger requires the DOM to be fully loaded; useLayoutEffect or a slight delay is recommended for complex pinning.
- All routing uses wouter with AnimatePresence for cinematic fade transitions between pages.
