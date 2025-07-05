function About() {
  return (
    <div className="about-container">
      <h1>About This Application</h1>
      <div className="about-content">
        <p>
          This is a React application that demonstrates Firebase Authentication
          and CRUD operations. It allows users to sign in with their Google
          account and manage items in a Firebase Firestore database.
        </p>

        <h2>Features</h2>
        <ul>
          <li>Google Authentication using Firebase</li>
          <li>Create, Read, Update, and Delete operations on items</li>
          <li>Real-time data synchronization with Firebase Firestore</li>
          <li>Responsive design for various screen sizes</li>
        </ul>

        <h2>Technologies Used</h2>
        <ul>
          <li>React.js</li>
          <li>Firebase Authentication</li>
          <li>Firebase Firestore</li>
          <li>React Router</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
