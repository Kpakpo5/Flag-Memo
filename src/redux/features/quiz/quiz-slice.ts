import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QuizState {
    quizHasStarted: boolean,
    quizHasEnded: boolean,
    score: number,
    round: number,
    countryOptionsDisplay: boolean,
    countryIsChosen: boolean,
    countryChoiceIsCorrect : boolean,
    capitalOptionsDisplay: boolean,
    capitalIsChosen: boolean,
    capitalChoiceIsCorrect: boolean,

}


const initialState: QuizState = {
    quizHasStarted: false,
    quizHasEnded: false,
    score: 0,
    round: 0,
    countryOptionsDisplay: false,
    countryIsChosen: false,
    countryChoiceIsCorrect: null,
    capitalOptionsDisplay: false,
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
        displayCountryOptions: (state, action: PayloadAction<boolean>) => {
            state.countryOptionsDisplay = action.payload;
        },
        setCountryIsChosen: (state, action: PayloadAction<boolean>) => {
            state.countryIsChosen = action.payload;
        },
        setCountryChoiceIsCorrect: (state, action: PayloadAction<boolean>) => {
            state.countryChoiceIsCorrect = action.payload;
        },
        displayCapitalOptions: (state) => {
            state.countryOptionsDisplay = false;
            state.countryIsChosen = false;
            state.countryChoiceIsCorrect = null;
            state.capitalOptionsDisplay = true;
        },
        setCapitalIsChosen: (state, action: PayloadAction<boolean>) => {
            state.capitalIsChosen = action.payload;
        },
        setCapitalChoiceIsCorrect: (state, action: PayloadAction<boolean>) => {
            state.capitalChoiceIsCorrect = action.payload;
        },
        incrementRound: (state) => {
            state.round ++;
        },
        setNextRound: (state) => {
            state.capitalOptionsDisplay = false;
            state.capitalIsChosen = false;
            state.capitalChoiceIsCorrect = null;
        }
        
    }
});



export const {
    setQuizHasEnded,
    setQuizHasStarted,
    setScore,
    displayCountryOptions,
    setCountryIsChosen,
    setCountryChoiceIsCorrect,
    displayCapitalOptions,
    setCapitalIsChosen,
    setCapitalChoiceIsCorrect,
    incrementRound,
    setNextRound
} = quizSlice.actions;

export default quizSlice.reducer;