import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import styles from "./Study.css"


import { Configuration, OpenAIApi } from "openai"

const AddDeck = () => {
    const history = useHistory()

  // State to manage the input value
  const [topic, setTopic] = useState('');

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Topic:', topic);

    handleApi()

    history.goBack()
  };

  // Function to handle input change
  const handleChange = (event) => {
    setTopic(event.target.value);
  };

  const openAi = new OpenAIApi(
    new Configuration({
      apiKey: "",
    })
  )
  
  const handleApi = async () => {
    const response = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: `Generate 10 important terms and definitions corresponding to ${topic}. Limit 1 sentence per definition. Use format: |term|definition|. Concatenate entire output into one paragraph.` }],
    })
    console.log(response.data.choices[0].message.content)
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
