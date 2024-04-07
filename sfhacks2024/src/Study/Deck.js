import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

import backarrow from '../civil-assets/back-arrow.png'
import add from "../civil-assets/add-plus.png"

const Card = ({ term, definition }) => {

    const [showTerm, setShowTerm] = useState(true);
  
    const flipCard = () => {
      setShowTerm(!showTerm);
    };
  
    return (
      <div className="flashcard" onClick={flipCard}>
        {showTerm ? <h3>{term}</h3> : <p>{definition}</p>}
      </div>
    );
  };

const Deck = () => {
    const location = useLocation()
    const history = useHistory()
    const [deck, setDeck] = useState(null)

    const handleBack = () => {
        history.goBack()
    }

    useEffect(() => {
        if (location.state && location.state.deck) {
            setDeck(location.state.deck);
        }
    }, [location.state]);

    console.log(`Loading deck ${deck}`)
    return (
        <div>
            <img className='backarrow' src={backarrow} onClick={handleBack}/>

          {deck && deck.map((item, index) => (
            <Card key={index} term={item.term} definition={item.definition} />
          ))}
        </div>
    )
};

export default Deck;
