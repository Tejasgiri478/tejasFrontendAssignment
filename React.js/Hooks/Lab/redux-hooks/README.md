# Redux Hooks Counter App

## Overview

This is a simple counter application built with React and Redux, demonstrating the use of Redux hooks (`useSelector` and `useDispatch`) for state management.

## Features

- Increment, decrement, and reset counter functionality
- Redux state management using hooks
- Redux DevTools integration for debugging

## Technologies Used

- React
- Redux
- React-Redux hooks (useSelector, useDispatch)
- Redux DevTools Extension

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

## Using Redux DevTools

This project is configured to work with the Redux DevTools browser extension, which allows you to inspect and debug the Redux store.

### Installation

1. Install the Redux DevTools browser extension:
   - [Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
   - [Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/)

### Features

With Redux DevTools, you can:

- Track all dispatched actions
- Inspect the state tree
- Time-travel debugging (go back to previous states)
- Action replay
- Export/Import state snapshots

### Usage

1. Open your application in the browser
2. Open the browser's developer tools (F12 or right-click and select "Inspect")
3. Navigate to the "Redux" tab
4. You can now see the state changes as you interact with the application

## Project Structure

```
src/
├── App.css           # Styles for the application
├── App.jsx           # Main component using Redux hooks
├── assets/           # Static assets
├── index.css         # Global styles
├── main.jsx          # Entry point with Redux Provider setup
└── redux/
    └── store.js      # Redux store configuration with DevTools
```

## Learn More

- [React Documentation](https://reactjs.org/)
- [Redux Documentation](https://redux.js.org/)
- [React-Redux Hooks API](https://react-redux.js.org/api/hooks)
- [Redux DevTools Extension Documentation](https://github.com/reduxjs/redux-devtools/tree/main/extension#redux-devtools-extension)
