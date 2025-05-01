// src/App.js
import React from 'react';
import AppNavbar from './Navbar';
import CardComponent from './Card';  // Import the Card component

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <div className="container mt-4">
        <h1>CS 330L</h1>
        <h2>Section - 11</h2>
        <p>WVU ID: 427723</p>
        <p>Hi, I am James Radcliff</p>

        {/* Display the Card Component */}
        <CardComponent />
      </div>
    </div>
  );
}

export default App;
