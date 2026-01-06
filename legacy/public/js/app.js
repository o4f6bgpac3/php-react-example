/**
 * ACME Corp Legacy JavaScript
 *
 * This file is kept for any vanilla JS functionality that doesn't need React.
 * The contact form is now handled by React Islands (see /js/islands.js).
 *
 * For interactive components, use the React Islands pattern:
 *
 * 1. Add a mount point in PHP:
 *    <div data-island="contact-form" data-success-message="Custom message"></div>
 *
 * 2. The islands.js script will find it and mount the React component
 *
 * 3. Props are passed via data-* attributes (kebab-case -> camelCase)
 *
 * Available islands:
 * - contact-form: Contact form with validation and submission
 *
 * To add more islands, edit: ui/src/islands/index.tsx
 */

// Add any vanilla JS functionality here that doesn't need React
document.addEventListener('DOMContentLoaded', function() {
  // Example: Add active class to current nav item
  const currentPath = window.location.pathname;
  document.querySelectorAll('.menu a').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
});
