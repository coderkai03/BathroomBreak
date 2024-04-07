import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import styles from "./Study.css"


import { Configuration, OpenAIApi } from "openai"

import { getAuth } from "firebase/auth"
import { getFirestore, doc, setDoc, collection } from 'firebase/firestore';

const AddDeck = () => {
    const history = useHistory()
    const user = getAuth().currentUser

    console.log("user: ", user)

  // State to manage the input value
  const [topic, setTopic] = useState('');

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Fetch user's UID
    const user = getAuth().currentUser;
    const uid = user.uid;
  
    // Generate 10 terms and definitions using OpenAI
    const generatedContent = (await handleApi()).toString();
  
    // Find the index of the first "|" character
  const firstPipeIndex = generatedContent.indexOf('|');

  // Skip the first "|" and then split the content into terms and definitions
  const termsDefinitions = generatedContent.slice(firstPipeIndex + 1).split('|');
  
    // Format data as array of strings "term|definition"
    const deckData = [];
    for (let i = 0; i < termsDefinitions.length; i += 2) {
      const term = termsDefinitions[i];
      const definition = termsDefinitions[i + 1];
      deckData.push(`${term}|${definition}`);
    }
  
    // Post the new deck to Firestore
    const db = getFirestore();
    const userRef = doc(db, 'users', uid); // Reference to the user's document
    await setDoc(userRef, { [topic]: deckData }, { merge: true }); // Merge the data with existing data if any
  
    // Redirect or perform any additional actions as needed
    history.goBack();
  };
  

  // Function to handle input change
  const handleChange = (event) => {
    setTopic(event.target.value);
  };

  const openAi = new OpenAIApi(
    new Configuration({
      apiKey: "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",
    })
  )
  
  const handleApi = async () => {
    const response = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: `Generate 10 important terms and definitions corresponding to ${topic}. Limit 1 sentence per definition. Use format: |term|definition|. Concatenate entire output into one paragraph.` }],
    })
    console.log(response.data.choices[0].message.content)

    // Extract the generated content from the response
  const generatedContent = response.data.choices[0].message.content;

  // Return the generated content as a string
  return generatedContent.toString();
}

  return (
    <div className='login-block'>
      <h1>Add New Deck</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Topic
        </label>
        <input 
            type="text"
            value={topic}
            onChange={handleChange}
            required
          />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddDeck;
