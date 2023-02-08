import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    topics: {}
};

const topicsSlice = createSlice({
    name: 'topics',
    initialState: initialState,
    reducers: {
        addTopic: (state, action) => {
            state.topics = {
                ...state.topics, [action.payload.id]: {
                    "id": action.payload.id,
                    "name": action.payload.name,
                    "icon": action.payload.icon,
                    "quizIds": [],
                },
            }
        },
        addQuizId: (state, action) => {
            const { id, topicId } = action.payload
            state.topics[topicId].quizIds.push(id)
        }
    }
})

export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;
export const selectTopics = state => state.topics.topics;

