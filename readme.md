# React Workshop - Modern React Application

A comprehensive React TypeScript application built with modern tools and best practices, featuring user management, dark mode, and extensible architecture.

## ✨ Features

- 🚀 **Modern Stack**: React 18 + TypeScript + Vite
- 🎨 **Beautiful UI**: TailwindCSS + shadcn/ui components
- 🌙 **Dark Mode**: Built-in theme switching
- 🔄 **State Management**: Zustand for global state
- 🧭 **Routing**: React Router with layout system
- 🌐 **Internationalization**: Ready for i18n with react-i18next
- 🧪 **Testing**: Vitest + React Testing Library
- 📦 **Feature-based Architecture**: Scalable project structure
- 🛡️ **Type Safety**: Full TypeScript with strict configuration
- 🎯 **Code Quality**: ESLint + Prettier + strict rules

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test

# Run linting
npm run lint
```

## 🏗️ Project Structure

```
src/
├── components/           # Shared components
│   ├── ui/              # UI primitives (shadcn/ui)
│   ├── layouts/         # Layout components
│   ├── error-boundary.tsx
│   └── theme-provider.tsx
├── features/            # Feature-based modules
│   └── users/          # User management feature
│       ├── components/  # Feature-specific components
│       ├── hooks/      # Custom hooks
│       ├── pages/      # Feature pages
│       ├── services/   # API services
│       ├── stores/     # Feature state
│       └── types/      # Feature types
├── pages/              # Global pages
├── router/             # Routing configuration
├── stores/             # Global state
├── lib/                # Utilities
└── i18n/               # Internationalization
```

## 🛠️ Tech Stack

### Core
- **React 18** - UI library with concurrent features
- **TypeScript** - Type safety and developer experience
- **Vite** - Fast build tool and development server

### Styling & UI
- **TailwindCSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Beautiful & consistent icons

### State & Data
- **Zustand** - Lightweight state management
- **React Router** - Declarative routing
- **React i18next** - Internationalization framework

### Development & Quality
- **ESLint** - Code linting with strict rules
- **Prettier** - Code formatting
- **Vitest** - Fast unit testing framework
- **React Testing Library** - Component testing utilities

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage
- `npm run type-check` - Run TypeScript type checking

## 🏛️ Architecture Principles

### Extensibility
- **Feature-based organization** - Easy to add new features
- **Pluggable architecture** - Modular and reusable components
- **Separation of concerns** - Clear boundaries between layers
- **Composition over inheritance** - Flexible component design

### Code Quality
- **Type safety** - Comprehensive TypeScript usage
- **Error handling** - Graceful error boundaries and user feedback
- **Testing** - Unit and integration tests
- **Accessibility** - WCAG compliant components

### Performance
- **Lazy loading** - Dynamic imports for routes
- **Bundle optimization** - Efficient code splitting
- **Caching strategies** - Optimized data fetching
- **Minimal re-renders** - Optimized state updates

## 🔧 Configuration

### Theme System
The application uses a custom design system built on TailwindCSS with CSS variables for dynamic theming. Themes are defined in `src/index.css` and managed by the `ThemeProvider`.

### State Management
Global state is managed with Zustand. Each feature can have its own store, and there's a global app store for shared state.

### Routing
React Router is configured with layouts in `src/router/app-router.tsx`. New routes can be easily added following the existing patterns.

### Testing
Vitest is configured with React Testing Library. Tests should be placed alongside components or in `__tests__` directories.

## 🚀 Adding New Features

1. Create a new directory in `src/features/`
2. Follow the established structure with components, hooks, services, stores, and types
3. Add routing configuration
4. Update navigation if needed
5. Add translations for i18n
6. Write tests for new functionality

## 📝 Contributing

1. Follow the established coding standards
2. Write tests for new functionality
3. Update documentation as needed
4. Use conventional commit messages
5. Ensure all lints and tests pass

## 📜 License

This project is open source and available under the [MIT License](LICENSE).
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
