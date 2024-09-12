   // actions.js
   export const SHUFFLE_DECK = 'SHUFFLE_DECK';
   export const DRAW_CARD = 'DRAW_CARD';

   export const shuffleDeck = () => ({
     type: SHUFFLE_DECK,
   });

   export const drawCard = () => ({
     type: DRAW_CARD,
   });