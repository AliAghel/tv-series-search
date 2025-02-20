<div align="center">

# TV Series Search

🎬 A modern React application for searching TV series information

[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Styled Components](https://img.shields.io/badge/Styled_Components-5.3.9-pink.svg)](https://styled-components.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[Features](#features) •
[Getting Started](#getting-started) •
[Installation](#installation) •
[Usage](#usage) •
[Development](#development)

</div>

## Features

- 🔍 Search through TV series database
- 📱 Fully responsive design
- 🎯 Advanced filtering options
- ⚡ Real-time search results
- 🎨 Modern, clean UI
- 🚀 Fast and lightweight

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/tv-series-search.git
```

2. Navigate to the project directory

```bash
cd tv-series-search
```

3. Install dependencies

```bash
npm install
```

### Usage

Start the development server:

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000)

## Development

### Available Scripts

```bash
# Start development server
npm start

# Run tests
npm test

# Build for production
npm run build

# Run linter
npm run lint

# Fix lint issues
npm run lint:fix
```

### Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── services/      # API services
├── context/       # React Context
├── hooks/         # Custom hooks
├── types/         # TypeScript types
└── styles/        # Global styles
```

## API

This project uses the [TV Maze API](https://www.tvmaze.com/api) for fetching TV series data.

### Example Endpoints

```typescript
// Search shows
GET /search/shows?q=:query

// Get show details
GET /shows/:id
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- [TV Maze API](https://www.tvmaze.com/api) for providing the TV series data
- [Cursor](https://www.cursor.com) for development assistance and documentation help


