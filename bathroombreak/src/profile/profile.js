import React from 'react';
import './profile.css';
import profilePic from './profile/profilepic.gif';

const UserProfile = ({ name, dob, email, location, occupation, image }) => {
  return (
    <div className="user-profile">
      <div className="profile-details">
        <div className="profile-image-container">
        <img src={profilePic} alt="Animated GIF" className="profile-image" />
        </div>
        <div className="profile-info">
          <h2>User Profile</h2>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Date of Birth:</strong> {dob}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Location:</strong> {location}</p>
          <p><strong>Occupation:</strong> {occupation}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

