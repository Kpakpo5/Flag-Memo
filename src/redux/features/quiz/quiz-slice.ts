import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QuizState {
    quizHasStarted: boolean,
    quizHasEnded: boolean,
    score: number,
    round: number,
    countryIsChosen: boolean,
    countryChoiceIsCorrect : boolean,
    capitalIsChosen: boolean,
    capitalChoiceIsCorrect: boolean,

}


const initialState: QuizState = {
    quizHasStarted: false,
    quizHasEnded: false,
    score: 0,
    round: 0,
    countryIsChosen: false,
    countryChoiceIsCorrect: null,
    capitalIsChosen: false,
    capitalChoiceIsCorrect: null
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
        setCountryIsChosen: (state, action: PayloadAction<boolean>) => {
            state.countryIsChosen = action.payload;
        },
        setCapitalIsChosen: (state, action: PayloadAction<boolean>) => {
            state.capitalIsChosen = action.payload;
        },
        setCountryChoiceIsCorrect: (state, action: PayloadAction<boolean>) => {
            state.countryChoiceIsCorrect = action.payload;
        },
        setCapitalChoiceIsCorrect: (state, action: PayloadAction<boolean>) => {
            state.capitalChoiceIsCorrect = action.payload;
        },
    }
});



export const {
    setQuizHasEnded,
    setQuizHasStarted,
    setScore,
    setCountryIsChosen,
    setCountryChoiceIsCorrect,
    setCapitalIsChosen,
    setCapitalChoiceIsCorrect
} = quizSlice.actions;

export default quizSlice.reducer;