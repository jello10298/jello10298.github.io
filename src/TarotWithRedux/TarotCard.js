import React, {useState} from "react";
import './TarotCard.css';

const TarotCard = ({ card }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className={`tarot-card ${isFlipped ? 'flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
            <img src={'dali/' + card.image} alt={card.name} className={'front'}/>
            <img src={'dali/card-back.jpg'} alt={card.name} className={'back'}/>
        </div>
    );
};

export default TarotCard;