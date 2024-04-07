import React, { useEffect, useState } from 'react';
import './profile.css';
import profilePic from './profilepic.gif';

import { getAuth} from "firebase/auth"
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const UserProfile = () => {
    const user = getAuth().currentUser

    const [name, setName] = useState(null)
    const [occupation, setOccupation] = useState(null)

    const [lastExam, setLastExam] = useState(null)
    const [totalExams, setTotalExams] = useState(null)

    useEffect(() => {
        const fetchUserData = async () => {
            if (user) {
                const db = getFirestore();
                const userDocRef = doc(db, 'users', user.uid);
                const userDocSnapshot = await getDoc(userDocRef);
                
                if (userDocSnapshot.exists()) {
                    const userData = userDocSnapshot.data();
                    // Update state with user profile information
                    setName(userData.fullName);
                    setOccupation(userData.occupation);
                    setTotalExams(userData.totalExams);
                    setLastExam(userData.score);
                } else {
                    console.log("User document does not exist.");
                }
            } else {
                console.log("User not authenticated.");
            }
        };
        
        fetchUserData();
    }, [user]);
    

  return (
    <div className="user-profile">
      <div className="profile-details">
        <div className="profile-image-container">
        <img src={profilePic} alt="Animated GIF" className="profile-image" />
        </div>
        <div className='profile-sections'>
            <div className="profile-info">
              <h2>Profile</h2>
              <p><strong>Name:</strong> {name}</p>
              <p><strong>Occupation:</strong> {occupation}</p>
            </div>
            <div className="profile-info">
              <h2>User Stats</h2>
              <p><strong>Last Exam Score:</strong> {lastExam}%</p>
              <p><strong>Exams taken:</strong> {totalExams}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

