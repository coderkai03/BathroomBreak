import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import shieldIcon from "../civil-assets/mingcute_shield-fill.png"

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import {  getFirestore, doc, setDoc, addDoc, collection } from 'firebase/firestore'; // Import Firestore functions

const Login = () => {
    const history = useHistory()

    const [isLogin, setIsLogin] = useState(true)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [fullName, setFullName] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
    
        try {
          const auth = getAuth();
          await signInWithEmailAndPassword(auth, email, password);
          const user = getAuth().currentUser
          console.log("Logged in ", user)


          // Redirect user to dashboard or home page upon successful sign-in
          history.push('/');
        } catch (error) {
          // Handle sign-in errors
          setError(error.message);
          window.alert(error)
        }
    }

    const handleSignup = async (e) => {
        e.preventDefault();
        setError(null);
    
        if (fullName.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
            try {
                const auth = getAuth();
                const { user } = await createUserWithEmailAndPassword(auth, email, password);
    
                // Ensure that user object contains uid
                if (user && user.uid) {
                    const db = getFirestore();
                    
                    // Create user document under 'users/{uid}'
                    await setDoc(doc(db, 'users', user.uid), {
                        fullName: fullName,
                        flashcardsRef: `flashcards/${user.uid}`
                    });

                    console.log("posted data?")
    
                    // Redirect user to dashboard or home page upon successful sign-up
                    history.push('/');
                } else {
                    throw new Error("Failed to create user. User ID not found.");
                }
            } catch (error) {
                // Handle sign-up errors
                setError(error.message);
                console.error(error);
            }
        } else {
            setError("Please fill in all fields.");
        }
    }
    


    const switchLogin = () => {
        setIsLogin(!isLogin)
    }

    return (
        <div className="login-screen">
            <div className="header"></div>
            <div className="login-block">
                <img className="appIcon" src={shieldIcon}/>
                <h1>SF Civil Pro</h1>
                <form>
                    <label for="email">Email</label>
                    <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    
                    {!isLogin && <label for="fullName">FullName</label>}
                    {!isLogin && <input type="text" id="fullName" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required/>}

                    <label for="password">Password</label>
                    <input type="text" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>

                    {isLogin && <button onClick={handleLogin}>LOG IN</button>}
                    {isLogin && <p className="accountSwitch" onClick={switchLogin}><u>SIGN UP</u></p>}

                    {!isLogin && <button onClick={handleSignup}>SIGN UP</button>}
                    {!isLogin && <p className="accountSwitch" onClick={switchLogin}><u>LOG IN</u></p>}
                </form>
            </div>
        </div>
    );
}
 
export default Login;