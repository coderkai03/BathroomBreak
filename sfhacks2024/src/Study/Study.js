import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth } from "firebase/auth"
import Preview from "./CardPreview";
import add from "../civil-assets/add-plus.png";
import styles from "./Study.css";

const Study = () => {
  const history = useHistory();
  const [decks, setDecks] = useState([]);
  const [topics, setTopics] = useState([]);


  // Fetch all flashcard decks from Firestore
  useEffect(() => {
    const fetchDecks = async () => {
      const user = getAuth().currentUser;
      console.log("user: ", user);
  
      if (user) {
        const db = getFirestore();
        const userDocRef = doc(db, 'users', user.uid); // Reference to the user's document
        const userDocSnapshot = await getDoc(userDocRef);
        
        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data();
          const userTopics = Object.keys(userData); // Get the array keys (deck names) from the user's document
          const userDecks = Object.values(userData);

          const filteredDecks = userDecks.filter(deck => Array.isArray(deck)); // Exclude 'fullName'
          const filteredTopics = userTopics.filter(deck => deck !== 'fullName');
          
          setTopics(filteredTopics);
          setDecks(filteredDecks)
        } else {
          console.log("User document does not exist.");
        }
      } else {
        console.log("User not authenticated.");
      }
    };
    fetchDecks();
  }, []);
  
  

  const pushDeck = (id, deck) => {
    history.push(`/deck/${id}`, { deck });
  };

  const addDeck = () => {
    history.push('/add');
  };

  return (
    <div className='deck-div'>
      {decks.map((deck, index) => (
        <Preview key={deck.id} name={topics[index]} handleClick={() => pushDeck(deck.topic, deck)} />
      ))}
      <img className='add-btn' src={add} onClick={addDeck} />
    </div>
  );
};

export default Study;
