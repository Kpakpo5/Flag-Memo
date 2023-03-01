import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QuizState {
    quizHasStarted: boolean,
    quizHasEnded: boolean,
    score: number,
    round: number,
    CountryIsChosen: boolean;
    CapitalIsChosen: boolean
}


const initialState: QuizState = {
    quizHasStarted: false,
    quizHasEnded: false,
    score: 0,
    round: 0,
    CountryIsChosen: false,
    CapitalIsChosen: false
}

export const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        setQuizHasStarted: (state, action: PayloadAction<boolean>) => {
            state.quizHasStarted = action.payload;
        },
        setQuizHasEnded: (state, action: PayloadAction<boolean>) => {
            state.quizHasEnded = action.payload;
        },
        setScore: (state, action: PayloadAction<number>) => {
            state.score += action.payload;
        },
    }
});



export const { setQuizHasEnded, setQuizHasStarted, setScore } = quizSlice.actions;

export default quizSlice.reducer;