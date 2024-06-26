import { useState, useEffect } from "react"
import Preference from "./Preferences"

import police from "../civil-assets/police-pfp.png"
import firefighter from "../civil-assets/firefighter-pfp.png"
import emt from "../civil-assets/emt-pfp.png"

import { initializeApp } from "firebase/app";
import firebaseConfig from '../Logins/FBConfig'; // Import the Firebase configuration
import { getAuth, signOut } from 'firebase/auth'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const Home = () => {
    const [showFact, setShowFact] = useState(false)
    const [disableBtn, setDisableBtn] = useState(false)

    const history = useHistory()
    const user = getAuth().currentUser


    useEffect(() => {
        const user = getAuth().currentUser
        console.log("user: "+user)
        if (user == null) {
            history.push('/login')
        }
    }, [])

    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                // Reload the page after sign-out
                window.location.reload();
            })
            .catch((error) => {
                console.error('Error signing out:', error);
            });
    };

    return (
        <div className="body-div">
            <div className="welcome-div">
                {user !== null && <p className="signout" onClick={handleSignOut}>Sign out</p>}
                <img
                className="home-img"
                src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/9tuoj3v0ff5-8%3A7?alt=media&token=d84848fe-ea23-4b2e-a466-994afa09da2d"/>
                <p className="p-desc">Looking to join law enforcement, emergency medical services, or firefighting?<br/><br/>
                Study smarter for your civil service exam with <b>SF Civil Pro!</b></p>
            </div>
            <div className="preferences-div">
                <h1 className="hear-from-us">Hear from our users</h1>
                <Preference role={"911 Dispatcher"} desc={"911 dispatchers are trained professionals who answer emergency calls, gather critical information, and coordinate the dispatch of emergency services to the scene of incidents."} imgFirst={true} imgurl={police} />
                <Preference role={"Firefighter"} desc={"911 dispatchers are trained professionals who answer emergency calls, gather critical information, and coordinate the dispatch of emergency services to the scene of incidents."} imgFirst={false} imgurl={firefighter} />
                <Preference role={"Social Worker"} desc={"911 dispatchers are trained professionals who answer emergency calls, gather critical information, and coordinate the dispatch of emergency services to the scene of incidents."} imgFirst={true} imgurl={emt} />
            </div>
        </div>
    )
}

export default Home