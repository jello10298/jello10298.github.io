import React, {createRef, useState} from 'react';
import './Tarot.css';
import Modal from 'react-modal';
import TarotDeck from "../TarotDeck/TarotDeck";
import {useTarotGameLogic} from "../TarotGameLogicContext/TarotGameLogicContext";
import TarotCard from "../TarotCard/TarotCard";
import AnimatedText from "../AnimatedText/AnimatedText";

Modal.setAppElement('#root');

function TarotGame() {
    const {
        deck,
        drawThreeCards,
        currentThreeCards,
        resetGame,
        revealAllCards,
        hideAllCards
    } = useTarotGameLogic();

    const welcomeScreen = createRef();

    const [showAllCardsText, setShowAllCardsText] = useState(false);
    const [showDeck, setShowDeck] = useState(false);
    const [isDeckExpanded, setDeckExpanded] = useState(true);
    const [isLocalCardFlipped, setIsLocalCardFlipped] = useState([false, false, false]);

    const hideWelcome = () => {
        if (welcomeScreen.current !== null) {
            welcomeScreen.current.style.height = 0;
            welcomeScreen.current.style.opacity = 0;
            welcomeScreen.current.style.pointerEvents = 'none';
            return true;
        }
        return false;
    }

    const resetDeck = () => {
        hideAllCards(10, () => {
            setShowAllCardsText(false);
            setDeckExpanded(false);
        });
    };

    return (
        <>
            <div ref={welcomeScreen}>
                <AnimatedText text={'Tarot Game'}/>
                <div
                    className='welcome'
                    onClick={() => {
                        hideWelcome() && drawThreeCards()
                    }}/>
            </div>

            <div className={'tarot-container'}>
                {
                    currentThreeCards.map((card, index) =>
                        <div className={'tarot-item cardBackground'} key={index}>
                            <h2 className={'alex-brush-regular tarotHeading'}>
                                {
                                    function () {
                                        switch (index) {
                                            case 0:
                                                return 'Past';
                                            case 1:
                                                return 'Present';
                                            case 2:
                                                return 'Future';
                                            default:
                                                return null;
                                        }
                                    }()
                                }
                            </h2>
                            <TarotCard card={card} isFlipped={isLocalCardFlipped[index]} isFlippedCallback={() => {
                                const newIsFlipped = [...isLocalCardFlipped];
                                newIsFlipped[index] = !newIsFlipped[index];
                                setIsLocalCardFlipped(newIsFlipped);
                            }} key={index + 10000} gameCard={true}/>
                        </div>
                    )
                }
            </div>

            <button className={`button show-all-cards ${currentThreeCards ? 'visible' : ''}`} onClick={() => {
                if (showAllCardsText === false) {
                    const delay = 200;
                    setShowDeck(true);
                    setDeckExpanded(true);
                    revealAllCards(delay);
                    setTimeout(() => {
                        setShowAllCardsText(true);
                    }, deck.length * delay);
                } else {
                    // hideAllCards(100, () => {
                    //     setShowAllCards(false);
                    // });
                    resetDeck();
                }
            }}>
                {showAllCardsText ? 'Hide' : 'Show'} All Cards
            </button>

            {
                // currentThreeCards &&
                // countFlippedCards() >= 3 &&
                // isLocalCardFlipped.filter(value => value).length === isLocalCardFlipped.length &&
                <button className={`button ${currentThreeCards ? 'visible' : ''}`} onClick={() => {
                    resetGame();
                    resetDeck();
                    hideWelcome() && drawThreeCards();
                    // setTimeout(() => drawThreeCards(), 1000);
                }}>
                    Draw 3 Cards
                </button>
            }

            {showDeck && <TarotDeck expanded={isDeckExpanded} className={`${!isDeckExpanded ? 'corner' : ''}`}/>}

        </>
    )
}

export default TarotGame;