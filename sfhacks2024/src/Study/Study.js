import { useState } from "react"
import Preview from "./CardPreview"
import { useHistory } from "react-router-dom";
import mockDeck from "./mockFlashcards"
import styles from "./Study.css"
import add from "../civil-assets/add-plus.png"

const Study = () => {
  const history = useHistory()

  const pushDeck = (id, deck) => {
    history.push(`/deck/${id}`, {deck})
  }

  const addDeck = () => {
    history.push('/add')
  }
    
    return (
        <div className='deck-div'>
          <Preview name={"Police codes"} desc={"Descriptions"} handleClick={() => pushDeck(1, mockDeck)}/>
          <Preview name={"Medical procedures"} desc={"Descriptions"} handleClick={() => pushDeck(2, mockDeck)}/>
          <Preview name={"SF Penal codes"} desc={"Descriptions"} handleClick={() => pushDeck(3, mockDeck)}/>

          <img className='add-btn' src={add} onClick={addDeck} />
        </div>
    )
}

export default Study