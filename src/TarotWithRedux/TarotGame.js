import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {shuffleDeck, drawCard} from './redux/actions';
import TarotCard from "./TarotCard";
import TarotDeck from "./TarotDeck";
import './TarotGame.css';

const TarotGame = () => {
    const dispatch = useDispatch();
    const deck = useSelector(state => state.tarot.deck);
    const drawnCards = useSelector(state => state.tarot.drawnCards);

    return (
        <div>
            <h1>Tarot Game</h1>

            {deck.length > 0 && <TarotDeck/>}
            <button onClick={() => dispatch(shuffleDeck())}>Shuffle Deck</button>
            {/*<button onClick={() => dispatch(drawCard())} disabled={deck.length === 0}>Draw Card</button>*/}
            <button onClick={() => {
                dispatch(drawCard());
                dispatch(drawCard());
                dispatch(drawCard());
            }} disabled={deck.length < 3 || drawnCards.length > 0}>Reading I
            </button>
            <button onClick={() => {
                dispatch(drawCard());
                dispatch(drawCard());
                dispatch(drawCard());
                dispatch(drawCard());
                dispatch(drawCard());
            }} disabled={drawnCards.length < 3 || drawnCards.length === 8}>Reading II
            </button>

            <h2>Drawn Cards:</h2>
            <h3>Round One</h3>
            <ul className={'round-one'}>
                {drawnCards.map((card, index) => {
                    if (index < 3) {
                        return (<li key={index}>
                            {card.name}
                            <TarotCard card={card}/>
                        </li>);
                    }
                })}
            </ul>

            <h3>Round Two</h3>
            {
                drawnCards[7]
                &&
                <>
                    {drawnCards[7].name}
                    <TarotCard card={drawnCards[7]}/>
                </>
            }
            <ul className={'round-two'}>
                {drawnCards.map((card, index) => {
                    if (index >= 3 && index < 6) {
                        return (<li key={index}>
                            {card.name}
                            <TarotCard card={card}/>
                        </li>);
                    }
                })}
            </ul>
            {
                drawnCards[6]
                &&
                <>
                    {drawnCards[6].name}
                    <TarotCard card={drawnCards[6]}/>
                </>
            }
        </div>
    )
        ;
};

export default TarotGame;