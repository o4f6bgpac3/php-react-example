/**
 * React Islands Entry Point
 *
 * This script finds all island mount points in the DOM and renders
 * the appropriate React components. Islands are identified by the
 * `data-island` attribute.
 *
 * Usage in PHP:
 *   <div data-island="contact-form" data-success-message="Custom message"></div>
 *
 * The island will be hydrated with the React component, sharing the same
 * business logic (hooks, API clients) as the SPA.
 */

import { createRoot } from 'react-dom/client';
import ContactForm from '../components/ContactForm';

// Registry of available island components
const islands: Record<string, React.ComponentType<Record<string, unknown>>> = {
  'contact-form': ContactForm as React.ComponentType<Record<string, unknown>>,
  // Add more islands here as needed:
  // 'image-gallery': ImageGallery,
  // 'date-picker': DatePicker,
};

/**
 * Parse data attributes from an element into props object
 * Converts kebab-case to camelCase: data-success-message -> successMessage
 */
function parseDataAttributes(element: Element): Record<string, string> {
  const props: Record<string, string> = {};

  Array.from(element.attributes).forEach((attr) => {
    if (attr.name.startsWith('data-') && attr.name !== 'data-island') {
      // Convert data-success-message to successMessage
      const propName = attr.name
        .replace('data-', '')
        .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
      props[propName] = attr.value;
    }
  });

  return props;
}

/**
 * Mount all islands found in the DOM
 */
function mountIslands(): void {
  const mountPoints = document.querySelectorAll('[data-island]');

  mountPoints.forEach((element) => {
    const islandName = element.getAttribute('data-island');

    if (!islandName) {
      console.warn('Island mount point missing data-island attribute:', element);
      return;
    }

    const Component = islands[islandName];

    if (!Component) {
      console.warn(`Unknown island type: "${islandName}". Available islands:`, Object.keys(islands));
      return;
    }

    const props = parseDataAttributes(element);

    try {
      const root = createRoot(element);
      root.render(<Component {...props} />);
      console.log(`Mounted island: ${islandName}`, props);
    } catch (error) {
      console.error(`Failed to mount island "${islandName}":`, error);
    }
  });
}

// Mount islands when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountIslands);
} else {
  mountIslands();
}

// Export for potential programmatic use
export { mountIslands, islands };
