import { createSlice } from "@reduxjs/toolkit";

const initialState = {cards: {}}

const cardsSlice = createSlice({
    name: 'cards',
    initialState: initialState,
    reducers: {
        'addCard': (state, action) => {
            const {id, front, back} = action.payload
            state.cards = {...state.cards, [id]: {
                'id': id,
                'front': front,
                'back': back,
            }}
        }
    }
})

export const selectCards = state => state.cards.cards;
export default cardsSlice.reducer;
export const {addCard} = cardsSlice.actions;