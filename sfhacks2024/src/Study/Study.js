import { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Study.css';

function Card({ frontSide, backSide}) {
    const [text, setText] = useState(frontSide);
    function handleClick() {
        setText( oldState => {
            if (oldState === frontSide) {
                return backSide;
            } else {
                return frontSide;
            }
        })
    }
    return <div className="flashcard" onClick={handleClick}>
        {text}
    </div>
}

const Study = () => {
    
    return (
        <div>    
            <div className="top-banner">
                <div className="label-text">
                    <h1> Flashcards</h1>
                    <h2>Click on a card to reveal the answer.</h2>
                </div>
            </div>
            <div className="flashcard-container">
                <Card frontSide="What is the proper response to scenario A?" backSide="Emergency Medical Response" />
                <Card frontSide="What is the CPR procedure?" backSide = "Chest compressions"/>
                <Card frontSide="cat goes?" backSide="meow."/>
            </div>
        </div>
    )
}

export default Study