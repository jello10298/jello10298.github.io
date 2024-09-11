import React, {createContext, useState, useContext, useEffect} from 'react';

const TarotGameLogicContext = createContext();

export const TarotGameLogicProvider = ({ cards, children }) => {
    const [deck, setDeck] = useState([]);
    const [currentCard, setCurrentCard] = useState(null);
    const [currentThreeCards, setCurrentThreeCards] = useState([]);
    const [isFlipped, setIsFlipped] = useState(new Array(cards.length).fill(true));
    const [isOpen, setIsOpen] = useState(new Array(cards.length).fill(false));

    useEffect(() => {
        setDeck(cards);
    }, [cards]);

    const trackEvent = (label) => {
        gtag !== undefined && gtag('event', 'click', {
            event_category: 'Tarot Game',
            event_label: label,
            value: 1
        });
    };

    const resetGame = () => {
        trackEvent('Game Logic Provider - Reset Game');
        // setIsFlipped(new Array(cards.length).fill(false));
        setIsOpen(new Array(cards.length).fill(false));
        setCurrentThreeCards([]);
    };

    const drawCard = () => {
        if (deck.length === 0) return null;
        trackEvent('Game Logic Provider - Draw One Card');
        const card = deck.pop();
        setCurrentCard(card);
        return card;
    };

    const drawThreeCards = () => {
        trackEvent('Game Logic Provider - Draw Three Cards');
        const drawnCards = [];
        while (drawnCards.length < 3) {
            const index = Math.floor(Math.random() * deck.length);
            if (!drawnCards.find(card => card === deck[index])) {
                drawnCards.push(deck[index]);
            }
        }
        const yourPresent = drawnCards[0];
        const yourPast = drawnCards[1];
        const yourFuture = drawnCards[2];
        setCurrentThreeCards([yourPast, yourPresent, yourFuture]);
        gtag !== undefined && gtag('event', 'play', {
            event_category: 'Tarot Game',
            event_label: 'Fortune Told',
            value: 1,
            items: [
                {
                    time: 'Present',
                    name: yourPresent.name
                },
                {
                    time: 'Past',
                    name: yourPast.name
                },
                {
                    time: 'Future',
                    name: yourFuture.name
                },
            ]
        });
        setTimeout(() => {
            setIsFlipped(new Array(cards.length).fill(false));
        }, 100);
    };

    const hideAllCards = (delay, callback) => {
        trackEvent('Game Logic Provider - Hide All Cards');
        for (let i = 0; i < isFlipped.length; i++) {
            setTimeout(() => {
                setIsFlipped(prevState => {
                    const newState = [...prevState];
                    newState[i] = false;
                    return newState;
                });
                if (i === isFlipped.length - 1) {
                    callback();
                }
            }, i * delay);
        }
    };

    const revealAllCards = (delay) => {
        trackEvent('Game Logic Provider - Reveal All Cards');
        for (let i = 0; i < isFlipped.length; i++) {
            setTimeout(() => {
                setIsFlipped(prevState => {
                    const newState = [...prevState];
                    newState[i] = true;
                    return newState;
                });
            }, i * delay);
        }
    };

    const findCardInDeck = (card) => {
        let cardToFlipIndex = null;
        deck.forEach((_card, index) => {
            if (_card.name === card.name) {
                cardToFlipIndex = index;
            }
        });
        return cardToFlipIndex;
    };

    const flipCard = (card) => {
        trackEvent('Game Logic Provider - Flip Card');
        const newIsFlipped = [...isFlipped];
        const cardToFlipIndex = findCardInDeck(card);
        if (cardToFlipIndex !== null) {
            newIsFlipped[cardToFlipIndex] = !newIsFlipped[cardToFlipIndex];
        }
        setIsFlipped(newIsFlipped);
    };

    const isCardFlipped = (card) => {
        const cardToFlipIndex = findCardInDeck(card);
        if (cardToFlipIndex !== null) {
            return isFlipped[cardToFlipIndex];
        }
        return false;
    };

    const countFlippedCards = () => {
        return isFlipped.filter(value => value).length;
    };

    const toggleModal = (card) => {
        trackEvent(`Game Logic Provider - Open Modal`);
        trackEvent(`Game Logic Provider - Open Modal for ${card.name}`);
        const newIsOpen = [...isOpen];
        const cardToOpenIndex = findCardInDeck(card);
        if (cardToOpenIndex !== null) {
            newIsOpen[cardToOpenIndex] = !newIsOpen[cardToOpenIndex];
        }
        setIsOpen(newIsOpen);
    };

    const isCardModalOpen = (card) => {
        const cardToOpenIndex = findCardInDeck(card);
        if (cardToOpenIndex !== null) {
            return isOpen[cardToOpenIndex];
        }
        return false;
    };

    return (
        <TarotGameLogicContext.Provider value={{
            deck, currentCard, drawCard, drawThreeCards, isFlipped, flipCard, isCardFlipped, currentThreeCards,
            toggleModal, isCardModalOpen, resetGame, countFlippedCards, revealAllCards, hideAllCards, trackEvent,
        }}>
            {children}
        </TarotGameLogicContext.Provider>
    );
};

export const useTarotGameLogic = () => {
    return useContext(TarotGameLogicContext);
};