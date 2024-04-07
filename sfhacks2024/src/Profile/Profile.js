import React from 'react';
import "./Profile.css"

const Profile = () => {
    return (
        <div>
            <div className="top-banner">
                <h1>Username Here</h1>
                <h3>Edit Profile</h3>
            </div>
            
            <div className="profile-container">

                <div className="profile-about">
                    <h1>My Profile</h1>
                    <h3>Firstname Lastname</h3>
                    <text>About/Biography</text>
                </div>

                <div className="profile-progress">
                    <h1>Progress</h1>
                    <h3>Date Joined</h3>
                    <h3>Points Earned</h3>
                    <h3>Flashcards Completed</h3>
                    <h3>Exams Completed</h3>
                </div>

                <div className="profile-exams">
                    <h1>My Practice Exams</h1>
                    <h3></h3>
                </div>

                <div className="profile-flashcards">
                    <h1>My Flashcards</h1>
                </div>

            </div>
        </div>
    );
};

export default Profile;