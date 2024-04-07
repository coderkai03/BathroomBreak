import React from 'react';
import './profile.css';
import profilePic from './profilepic.gif';

const UserProfile = ({ name, occupation, image }) => {
  return (
    <div className="user-profile">
      <div className="profile-details">
        <div className="profile-image-container">
        <img src={profilePic} alt="Animated GIF" className="profile-image" />
        </div>
        <div className="profile-info">
          <h2>User Profile</h2>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Occupation:</strong> {occupation}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

