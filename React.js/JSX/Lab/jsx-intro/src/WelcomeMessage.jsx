import React from 'react';

class WelcomeMessage extends React.Component {
  render() {
    const description = "JSX is a syntax extension for JavaScript that looks similar to HTML but is used to define React components.";

    return (
      <div>
        <h1>Welcome to JSX</h1>
        <p>{description}</p>
      </div>
    );
  }
}

export default WelcomeMessage;
