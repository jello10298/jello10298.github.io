import React from "react";
import './TarotDeck.css';
import TarotCard from "./TarotCard";
import {useSelector} from "react-redux";

const TarotDeck = ({ expanded = false, className }) => {
    const deck = useSelector(state => state.tarot.deck);
    const reversedDeck = [...deck].reverse();

    return (
        <div className={'tarot-deck-v2'}>
            {reversedDeck.map((card, index) => (
                <TarotCard key={index} card={card} />
            ))}
        </div>
    );
}

export default TarotDeck;