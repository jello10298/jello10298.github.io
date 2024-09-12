// reducers.js
import {SHUFFLE_DECK, DRAW_CARD} from './actions';
import data from '../../Tarot/data';

const initialState = {
    deck: [], // Array of cards
    drawnCards: [], // Array of drawn cards
};

// const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const shuffleArray = (array) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
};

const cardDeck = data;

function tarotReducer(state = initialState, action) {
    switch (action.type) {
        case SHUFFLE_DECK:
            return {
                ...state,
                deck: shuffleArray([...cardDeck]),
                drawnCards: [],
            };
        case DRAW_CARD:
            if (state.deck.length === 0) return state;
            const [drawnCard, ...remainingDeck] = state.deck;
            return {
                ...state,
                deck: remainingDeck,
                drawnCards: [...state.drawnCards, drawnCard],
            };
        default:
            return state;
    }
}

export default tarotReducer;