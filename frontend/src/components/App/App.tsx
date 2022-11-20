import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProfilePhoto from '../../assets/images/ProfilePicture.svg';
import SocialBar from '../Social/SocialBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ProfilePhoto} className="Profile-photo" alt="logo" />
        <p>
          Hi, Thanks for reaching out! As you can see this space is a work in progress.
        </p>
        <p>
          You can reach out to me on the following platforms.
        </p>
        <SocialBar />
      </header>
    </div>
  );
}

export default App;
