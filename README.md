# TV Series Search Frontend

## Project Overview

A React TypeScript application for searching TV series using the TV Maze API. The application features:

### Core Features

- Search interface for TV series
- Results list view with series information
- Detailed view for individual series
- Responsive design (mobile & desktop)
- Error handling & loading states
- Direct link access to detailed views

### Technical Requirements

- React with TypeScript
- TV Maze API integration using Axios
- Responsive CSS (mobile-first approach)
- Chrome browser compatibility
- Comprehensive testing
- Clean, self-documenting code structure

## Project Structure

The project follows a modular structure with components organized into directories:

### Project Structure

```bash
src/
├── components/ # Reusable UI components
├── pages/ # Main view components
├── services/ # API and other services
├── types/ # TypeScript interfaces
├── hooks/ # Custom React hooks
├── utils/ # Helper functions
└── styles/ # Global styles
```

## Project Setup

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Initial Setup

1. Create a new React project with TypeScript:

```bash
npx create-react-app my-app --template typescript
```

2. Navigate to project directory:

```bash
cd my-app
```

3. Install the necessary dependencies:

```bash
npm install axios @types/axios react-router-dom @types/react-router-dom
npm install styled-components @types/styled-components
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

### Code Quality Setup

1. ESLint and Prettier are configured for code quality and consistent formatting:

```bash
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

2. Configuration files are included:

   - `.eslintrc` - ESLint configuration
   - `.prettierrc` - Prettier configuration

3. Available scripts:

```bash
# Check for ESLint issues
npm run lint

# Fix ESLint issues automatically
npm run lint:fix

# Format code with Prettier
npm run format
```

## Features

- Search TV series using the TV Maze API
- View detailed information about TV series
- Responsive design for mobile and desktop viewing

## API Reference

This project uses the [TV Maze API](https://www.tvmaze.com/api) for fetching TV series data.

### Development

To start the development server:

```bash
npm start
```

### Building

To create a production build:

```bash
npm run build
```
