# Multi-Platform UI System Example

This example demonstrates the progression from legacy web to mobile apps, showing how to incrementally adopt modern tooling while sharing code across platforms.

> **Note:** This repo uses React for demonstration, but the architectural patterns (design tokens, shared types, API abstraction, component structure) apply equally to Angular or other frameworks. See [agency-ui-system-architecture.md](./agency-ui-system-architecture.md) for a balanced framework comparison.

## Migration Paths

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  LEGACY MIGRATION PATH                                                      │
│                                                                             │
│  vanilla.php ──→ index.php ──→ spa/ ──→ capacitor/ ──→ native/              │
│  (PHP + vanilla JS)  (React Islands)  (Full React)  (Mobile wrapper)  (Expo)│
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  NEW PROJECT PATH                                                           │
│                                                                             │
│                            spa/ ──→ capacitor/ ──→ native/                  │
│                         (Full React)  (Mobile wrapper)  (Expo)              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Step-by-Step Progression

| Step | Directory | What It Is | When to Use |
|------|-----------|------------|-------------|
| 1 | `legacy/public/vanilla.php` | Pure PHP + vanilla JS + custom CSS | Starting point for legacy apps |
| 2 | `legacy/public/index.php` | PHP + React Islands + DaisyUI | Incremental React + design system adoption |
| 3 | `spa/` | Full React SPA + DaisyUI | New web apps or full migration |
| 4 | `capacitor/` | SPA wrapped for app stores | Quick mobile with web skills |
| 5 | `native/` | Expo (React Native) | Native performance & UX |

### What Gets Shared at Each Step

| Step | Design Tokens | Types | API Client | Hooks | UI Appearance |
|------|--------------|-------|------------|-------|---------------|
| 1. Vanilla PHP | Custom CSS | - | - | - | Legacy look |
| 2. React Islands | DaisyUI | Shared | Shared | Shared | Design system |
| 3. SPA | DaisyUI | Shared | Shared | Shared | Identical to 2 |
| 4. Capacitor | DaisyUI | Shared | Shared | Shared | Identical to 2-3 |
| 5. Expo | theme.ts | Shared | Shared | Shared | Identical to 2-4 |

**Key insight**: Step 1 shows the "before" state with custom CSS. Steps 2-5 adopt the shared design system (DaisyUI/tokens) so UI looks identical across all platforms. Business logic is shared across all React-based platforms.

## Project Structure

```
├── tokens.json                      # SINGLE SOURCE OF TRUTH for brand
├── build-tokens.js                  # Generates all theme configs
│
├── shared/                          # SHARED BUSINESS LOGIC
│   ├── types/index.ts               # TypeScript interfaces
│   ├── api/client.ts                # API abstraction
│   └── hooks/useContactForm.ts      # Reusable form logic
│
├── legacy/                          # PHP + DaisyUI (Steps 1-2)
│   ├── ui/
│   │   ├── tailwind.config.js       # GENERATED
│   │   ├── vite.config.ts           # Islands build config
│   │   ├── tsconfig.json            # Includes @shared path
│   │   └── src/
│   │       ├── components/          # Web UI for islands
│   │       │   └── ContactForm.tsx  # Uses @shared/hooks/useContactForm
│   │       └── islands/
│   │           └── index.tsx        # Island mounting logic
│   └── public/
│       ├── vanilla.php              # Step 1: Pure PHP + vanilla JS
│       ├── index.php                # Step 2: PHP + React Islands
│       └── js/
│           └── islands.js           # GENERATED - React islands bundle
│
├── spa/                             # React + DaisyUI
│   ├── tailwind.config.js           # GENERATED
│   ├── vite.config.ts               # Includes @shared alias
│   ├── tsconfig.json                # Includes @shared path
│   └── src/
│       └── components/              # Web UI (DaisyUI classes)
│           └── ContactForm.tsx      # Uses @shared/hooks/useContactForm
│
├── capacitor/                       # Wraps SPA for app stores
│   ├── package.json
│   └── capacitor.config.ts          # Points to ../spa/dist
│
└── native/                          # Expo (React Native)
    ├── package.json
    ├── app.json
    ├── App.tsx                      # Section structure matches SPA
    ├── tsconfig.json                # Includes @shared path
    ├── theme.ts                     # GENERATED from tokens.json
    └── src/
        └── components/              # Native UI (StyleSheet + theme)
            └── ContactForm.tsx      # Uses @shared/hooks/useContactForm
```

## How It Works

### Design Tokens Flow

```
tokens.json (single source of truth)
    ↓
build-tokens.js
    ↓
├── legacy/ui/tailwind.config.js  (DaisyUI theme)
├── spa/tailwind.config.js        (DaisyUI theme)
└── native/theme.ts               (React Native styles)
```

**One change to `tokens.json` updates ALL platforms.**

### Shared Code Pattern

The `shared/` directory contains platform-agnostic business logic:

```
shared/
├── types/index.ts           # ContactFormData, FormStatus, Product
├── api/client.ts            # submitContactForm()
└── hooks/useContactForm.ts  # State management for forms
```

Both SPA and Native import from here using the `@shared/*` path alias:

```tsx
// Works in both spa/src/components/ and native/src/components/
import { useContactForm } from '@shared/hooks/useContactForm';
```

### UI Structure Consistency

All platforms follow the same section structure:

```
Header
├── Hero Section
├── Products Section
│   ├── Title: "Our Products"
│   └── Product Grid (3 items)
├── Contact Section
│   ├── Title: "Get in Touch"
│   └── ContactForm component
└── Footer
```

**Section titles live in the App/layout level, not inside components.**

## tokens.json

```json
{
  "color": {
    "primary": { "value": "#7c3aed" },
    "primary-content": { "value": "#ffffff" },
    "secondary": { "value": "#06b6d4" },
    ...
  },
  "radius": {
    "box": { "value": "1rem" },
    "button": { "value": "0.5rem" }
  }
}
```

## Running the Examples

### Quick Start

```bash
npm run install:all     # Install all dependencies
npm run build:theme     # Generate theme configs
```

### IDE Run Configurations

JetBrains IDE users: Run configurations are in `.run/`. Select from the dropdown:

| Configuration | Description |
|---------------|-------------|
| Step 1-2: Legacy (PHP) | PHP built-in server at localhost:8000 |
| Step 2: Legacy Dev (Watch) | Watch mode for CSS + islands |
| Step 3: SPA (Vite) | Vite dev server |
| Step 4: SPA Preview (No Xcode) | Production build in browser |
| Step 4: Capacitor iOS | Build + open Xcode |
| Step 4: Capacitor Android | Build + open Android Studio |
| Step 5: Expo | Expo dev tools |
| Step 5: Expo Web (No Xcode) | Expo in browser |
| Step 5: Expo iOS | Direct iOS Simulator |
| Step 5: Expo Android | Direct Android Emulator |

**No Xcode?** Use "SPA Preview" or "Expo Web" to see mobile layouts in browser.

### Run Scripts

All commands run from the project root:

| Step | Command | URL |
|------|---------|-----|
| 1-2. Legacy | `npm run dev:legacy` | http://localhost:8000/vanilla.php (Step 1) |
| | | http://localhost:8000 (Step 2) |
| 3. SPA | `npm run dev:spa` | http://localhost:5173 |
| 4. Capacitor | `npm run open:capacitor:ios` | Xcode |
| | `npm run open:capacitor:android` | Android Studio |
| 5. Expo | `npm run dev:expo` | Expo dev tools |
| | `npm run dev:expo:web` | http://localhost:8081 (No Xcode needed) |
| | `npm run dev:expo:ios` | iOS Simulator |
| | `npm run dev:expo:android` | Android Emulator |

### Build Scripts

| Command | Description |
|---------|-------------|
| `npm run build:tokens` | Regenerate theme configs from tokens.json |
| `npm run build:legacy` | Build legacy CSS + React islands |
| `npm run build:theme` | Both of the above |
| `npm run build:spa` | Production build of SPA |
| `npm run build:capacitor` | Build SPA + sync to native projects |

### Step-by-Step Details

**Steps 1-2: Legacy PHP**
```bash
npm run build:theme     # First time: build CSS + islands
npm run dev:legacy      # Start PHP server
```
- Step 1: http://localhost:8000/vanilla.php (vanilla JS form)
- Step 2: http://localhost:8000 (React Islands form)

**Step 3: SPA**
```bash
npm run dev:spa
```
Open http://localhost:5173

**Step 4: Capacitor**
```bash
# First time only
cd capacitor
npx cap add ios        # Requires Xcode
npx cap add android    # Requires Android Studio
cd ..

# Build and open
npm run build:capacitor
npm run open:capacitor:ios      # or open:capacitor:android
```

**Step 5: Expo**
```bash
npm run dev:expo       # Opens Expo dev tools
# Or directly:
npm run dev:expo:ios   # iOS Simulator
npm run dev:expo:android  # Android Emulator
```

## Why Expo? (React Native Path)

This project uses **Expo** for React Native development. Expo is sufficient for the vast majority of mobile apps and offers significant advantages.

> **Framework note:** Expo is React-specific. If using Angular, the equivalent path is Ionic + Capacitor, which offers similar capabilities. See [agency-ui-system-architecture.md](./agency-ui-system-architecture.md) for mobile strategy comparison.

**What Expo gives you:**
- Camera, notifications, biometrics, maps, payments, in-app purchases
- File system, secure storage, background tasks, deep linking
- Audio/video, animations, gestures, haptics
- App Store & Play Store builds via EAS (no local Xcode/Android Studio needed)
- Over-the-air updates for instant bug fixes

**When you might need bare React Native:**
- Custom native modules not available in Expo
- Specific native SDK integrations (rare)
- Brownfield integration into existing native apps

For most business apps, Expo covers everything. Start with Expo and only eject if you hit a specific limitation—which most projects never do.

## Updating the Theme

Edit `tokens.json` and run `npm run build:theme`:

```bash
vim tokens.json         # Edit colors/radius
npm run build:theme     # Regenerate all configs + rebuild legacy CSS
```

SPA picks up changes automatically via Vite HMR.

## Code Comparison: ContactForm

### Step 1: Vanilla JS + Custom CSS (No Sharing)

```html
<!-- Custom CSS, no framework -->
<style>
  .contact-form { max-width: 400px; background: white; padding: 2rem; }
  .form-group input { width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; }
</style>

<form id="contact-form" class="contact-form">
  <div class="form-group">
    <label>Name</label>
    <input type="text" id="name" required>
  </div>
  ...
</form>

<script>
// Inline JS, not reusable
form.addEventListener('submit', function(e) {
  e.preventDefault();
  var formData = { name: document.getElementById('name').value, ... };
  // Simulate API call
  setTimeout(function() { status.textContent = 'Thanks!'; }, 1000);
});
</script>
```

### Steps 2-4: React + DaisyUI (Shared Logic)

```tsx
import { useContactForm } from '@shared/hooks/useContactForm';

export default function ContactForm() {
  const { formData, status, updateField, submit } = useContactForm();  // Shared!

  return (
    <form onSubmit={submit} className="card bg-base-100 shadow-xl">
      <input className="input input-bordered" value={formData.name} ... />
      <button className="btn btn-primary">Send</button>
    </form>
  );
}
```

### Step 5: Expo (Shared Logic, Native UI)

```tsx
import { useContactForm } from '@shared/hooks/useContactForm';
import { theme } from '@/theme';

export function ContactForm() {
  const { formData, status, updateField, submit } = useContactForm();  // Same hook!

  return (
    <View style={styles.card}>
      <TextInput style={styles.input} value={formData.name} ... />
      <Pressable style={styles.button} onPress={submit}>
        <Text style={styles.buttonText}>Send</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: theme.colors.base100, borderRadius: theme.radius.box },
  button: { backgroundColor: theme.colors.primary, borderRadius: theme.radius.button },
  buttonText: { color: theme.colors.primaryContent },
});
```

**Key Point**: Steps 2-5 all share the same `useContactForm` hook. The UI looks identical; only the rendering approach differs.

## React Islands Pattern (Legacy)

The legacy PHP site uses React Islands to embed interactive React components in server-rendered PHP pages. This allows incremental migration from vanilla JS to React while sharing business logic with the SPA.

### How It Works

1. **Mount Point in PHP:**
```html
<div
    data-island="contact-form"
    data-success-message="Thanks! We'll be in touch soon."
>
    <noscript>Please enable JavaScript</noscript>
</div>
```

2. **Islands Script Finds and Mounts:**
```tsx
// ui/src/islands/index.tsx
const islands = {
  'contact-form': ContactForm,
  // Add more islands here
};

// Finds all [data-island] elements and mounts React components
document.querySelectorAll('[data-island]').forEach((el) => {
  const Component = islands[el.getAttribute('data-island')];
  const props = parseDataAttributes(el);
  createRoot(el).render(<Component {...props} />);
});
```

3. **Component Uses Shared Hooks:**
```tsx
// ui/src/components/ContactForm.tsx
import { useContactForm } from '@shared/hooks/useContactForm';

export default function ContactForm({ successMessage }) {
  const { formData, status, updateField, submit } = useContactForm();
  // Same DaisyUI markup as SPA...
}
```

### Adding New Islands

1. Create component in `legacy/ui/src/components/`
2. Register in `legacy/ui/src/islands/index.tsx`
3. Add mount point in PHP with `data-island="your-island-name"`
4. Rebuild: `npm run build:islands`

### Props via Data Attributes

Data attributes are converted to camelCase props:
- `data-success-message="Hello"` → `{ successMessage: "Hello" }`
- `data-max-items="5"` → `{ maxItems: "5" }`

### Benefits

- **Code Sharing**: Same hooks, API clients, and types as SPA
- **Identical UI**: Same DaisyUI classes, same visual output
- **Incremental Migration**: Convert one component at a time
- **Progressive Enhancement**: Works with server-rendered fallback

## Architecture Summary

| Layer | Step 1 | Steps 2-4 | Step 5 |
|-------|--------|-----------|--------|
| Design Tokens | Custom CSS | `tokens.json` → DaisyUI | `tokens.json` → theme.ts |
| Types | - | `shared/types/` | `shared/types/` |
| API Client | Inline | `shared/api/` | `shared/api/` |
| Hooks | - | `shared/hooks/` | `shared/hooks/` |
| UI Components | PHP + vanilla JS | React + DaisyUI | React Native + StyleSheet |
| UI Appearance | Legacy look | Design system | Identical to Steps 2-4 |

Step 1 represents a typical legacy app before modernization. Steps 2-5 share the design system, so UI looks identical across all platforms.
