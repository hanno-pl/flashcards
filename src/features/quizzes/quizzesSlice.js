import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

const initialState = {
    quizzes: {}
}

export const createQuizThunk = payload => {
    return (dispatch) => {
        dispatch(addQuiz(payload))
        dispatch(addQuizId(payload))
    }
}

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: initialState,
    reducers: {
        'addQuiz': (state, action) => {
            state.quizzes = {
                ...state.quizzes, [action.payload.id]: {
                    'id': action.payload.id,
                    'name': action.payload.name,
                    'topicId': action.payload.topicId,
                    'cardIds': action.payload.cardIds,
                }
            }
        }
    }
}
)



export default quizzesSlice.reducer;
export const { addQuiz } = quizzesSlice.actions;
export const selectQuizzes = state => state.quizzes.quizzes;