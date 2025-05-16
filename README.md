# Synonym Technical Challenge

A Next.js application that demonstrates user management with offline capabilities using IndexedDB (via Dexie.js).

## Features

- User data fetching and storage
- Offline-first architecture using IndexedDB
- Real-time user search and filtering
- Responsive design with Tailwind CSS

## Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd synonym-technical-challenge
```

2. Install dependencies:

```bash
# Using npm
npm install

# Using yarn
yarn install
```

## Running the Project

### Development Mode

```bash
# Using npm
npm run dev

# Using yarn
yarn dev
```

The application will be available at `http://localhost:3000`

### Production Build

```bash
# Using npm
npm run build
npm start

# Using yarn
yarn build
yarn start
```

## Simulating Offline/Failure Scenarios

The application uses IndexedDB for offline storage. To test offline scenarios:

1. Open the application in your browser
2. Open Chrome DevTools
3. Go to the Network tab
4. Check the "Offline" checkbox to simulate offline mode

The application will continue to work with locally stored data when offline.

To test failure scenarios, you can:

1. Open Chrome DevTools
2. Go to the Network tab
3. Find the request to `https://randomuser.me/api/`
4. Right click on the request and select "Block Request URL"
5. Refresh the page

The application will continue to work with locally stored data.

## Technical Implementation

- **Frontend Framework**: Next.js 15.3.2 with React 19
- **State Management**: Zustand
- **Database**: IndexedDB (via Dexie.js)
- **Styling**: Tailwind CSS
- **Type Safety**: TypeScript

## Future Improvements

With more time, I would implement:

1. **Error Handling**: Implement more robust error handling and user feedback
2. **Testing**: Add comprehensive unit and integration tests
3. **Performance**: Implement pagination and virtual scrolling for large datasets
4. **Accessibility**: Enhance keyboard navigation and screen reader support
5. **Progressive Web App**: Add PWA capabilities for better offline experience
6. **Caching Strategy**: Implement a more sophisticated caching strategy for better performance

# License

MIT
