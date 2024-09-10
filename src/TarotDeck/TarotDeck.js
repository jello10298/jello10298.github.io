import React from "react";
import './TarotDeck.css';
import TarotCard from "../TarotCard/TarotCard";
import {useTarotGameLogic} from "../TarotGameLogicContext/TarotGameLogicContext";

const TarotDeck = ({ expanded = false, className }) => {
    const {deck} = useTarotGameLogic();

    return (
        <div className={`tarot-deck ${expanded ? 'expanded' : ''} ${className}`}>
            {deck.map((card, index) => (
                <TarotCard key={index} card={card} isFlippable={true} />
            ))}
        </div>
    );
}

export default TarotDeck;