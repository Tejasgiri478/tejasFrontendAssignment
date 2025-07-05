# Firebase Authentication and CRUD App

This is a React application that demonstrates Firebase Authentication and CRUD operations. It allows users to sign in with their Google account and manage items in a Firebase Firestore database.

## Features

- Google Authentication using Firebase
- Create, Read, Update, and Delete operations on items
- Real-time data synchronization with Firebase Firestore
- Responsive design for various screen sizes
- Protected routes for authenticated users

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A Firebase account

## Setup

1. Clone the repository

```bash
git clone <repository-url>
cd firebase-authentication
```

2. Install dependencies

```bash
npm install
```

3. Create a Firebase project

   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Click on "Add project" and follow the instructions to create a new project
   - Once the project is created, click on "Web" to add a web app to your project
   - Register your app with a nickname and click "Register app"
   - Copy the Firebase configuration object

4. Configure Firebase in the application

   - Open the `src/firebase.js` file
   - Replace the placeholder values in the `firebaseConfig` object with your Firebase project's configuration values

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID",
};
```

5. Enable Google Authentication in Firebase

   - In the Firebase Console, go to "Authentication" > "Sign-in method"
   - Enable the "Google" sign-in provider
   - Configure the OAuth consent screen if prompted

6. Create a Firestore database

   - In the Firebase Console, go to "Firestore Database"
   - Click "Create database"
   - Choose "Start in test mode" for development purposes (remember to set up security rules before production)
   - Select a location for your database and click "Enable"

7. Start the development server

```bash
npm run dev
```

8. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Sign in with your Google account using the "Sign in with Google" button on the home page
2. Once signed in, you can access the "Manage Items" page
3. Create new items by filling out the form at the top of the page
4. View all your items in the list below
5. Edit or delete items using the buttons next to each item
6. Sign out using the "Sign Out" button in the navigation bar

## Project Structure

```
├── public/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Auth.jsx
│   │   ├── Home.jsx
│   │   ├── ItemCrud.jsx
│   │   ├── Navigation.jsx
│   │   ├── NotFound.jsx
│   │   └── ProtectedRoute.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── firebase.js
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## Technologies Used

- React.js
- Firebase Authentication
- Firebase Firestore
- React Router
- Vite

## License

This project is licensed under the MIT License.
