const tokens = require('./tokens.json');
const fs = require('fs');
const path = require('path');

// Build the DaisyUI theme object from tokens
const themeColors = Object.entries(tokens.color)
  .map(([key, { value }]) => `        '${key}': '${value}',`)
  .join('\n');

const themeRadius = `        '--rounded-box': '${tokens.radius.box.value}',
        '--rounded-btn': '${tokens.radius.button.value}',`;

// Generate Tailwind config for legacy (scans PHP files)
const legacyConfig = `// GENERATED FROM tokens.json - DO NOT EDIT DIRECTLY
import daisyui from 'daisyui';

export default {
  content: ['../public/**/*.php'],
  theme: { extend: {} },
  plugins: [daisyui],
  daisyui: {
    themes: [{
      acme: {
${themeColors}
${themeRadius}
      },
    }],
  },
};
`;

// Generate Tailwind config for SPA (scans TSX files)
const spaConfig = `// GENERATED FROM tokens.json - DO NOT EDIT DIRECTLY
import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {} },
  plugins: [daisyui],
  daisyui: {
    themes: [{
      acme: {
${themeColors}
${themeRadius}
      },
    }],
  },
};
`;

// Generate React Native theme (converts rem to pixels, camelCase keys)
const toCamelCase = (str) => str.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
const remToPixels = (rem) => parseFloat(rem) * 16;

const nativeColors = Object.entries(tokens.color)
  .map(([key, { value }]) => `    ${toCamelCase(key)}: '${value}',`)
  .join('\n');

const nativeTheme = `// GENERATED FROM tokens.json - DO NOT EDIT DIRECTLY
export const theme = {
  colors: {
${nativeColors}
  },
  radius: {
    box: ${remToPixels(tokens.radius.box.value)},
    button: ${remToPixels(tokens.radius.button.value)},
  },
} as const;

export type Theme = typeof theme;
`;

// Ensure directories exist
const legacyDir = path.join(__dirname, 'legacy', 'ui');
const spaDir = path.join(__dirname, 'spa');
const nativeDir = path.join(__dirname, 'native');

if (!fs.existsSync(nativeDir)) {
  fs.mkdirSync(nativeDir, { recursive: true });
}

// Write the configs
fs.writeFileSync(path.join(legacyDir, 'tailwind.config.js'), legacyConfig);
console.log('✓ Generated legacy/ui/tailwind.config.js');

fs.writeFileSync(path.join(spaDir, 'tailwind.config.js'), spaConfig);
console.log('✓ Generated spa/tailwind.config.js');

fs.writeFileSync(path.join(nativeDir, 'theme.ts'), nativeTheme);
console.log('✓ Generated native/theme.ts');

console.log('\nTo rebuild legacy CSS: npm run build:legacy');
console.log('Or run both together:  npm run build:theme');
