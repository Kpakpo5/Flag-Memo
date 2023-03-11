import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QuizState {
    quizStarts: boolean,
    quizIsOver: boolean,
    quizLength: number,
    score: number,
    round: number,
    countryOptionsDisplay: boolean,
    countryIsChosen: boolean,
    countryChoiceIsCorrect : boolean,
    capitalOptionsDisplay: boolean,
    capitalIsChosen: boolean,
    capitalChoiceIsCorrect: boolean,
    timeIsOver: boolean
}


const initialState: QuizState = {
    quizStarts: false,
    quizIsOver: false,
    quizLength: 10,
    score: 0,
    round: 0,
    countryOptionsDisplay: false,
    countryIsChosen: false,
    countryChoiceIsCorrect: null,
    capitalOptionsDisplay: false,
    capitalIsChosen: false,
    capitalChoiceIsCorrect: null,
    timeIsOver: false
}

export const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        startQuiz: (state) => {
            state.quizStarts = true;
        },
        endQuiz: (state) => {
            state.quizIsOver = true;
        },
        setQuizLength: (state, action: PayloadAction<number>) => {
            state.quizLength = action.payload;
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
        resetSuccess: (state) => {
            state.countryChoiceIsCorrect = null;
            state.capitalChoiceIsCorrect = null;
        },
        setTimeIsOver: (state, action: PayloadAction<boolean>) => {
            state.timeIsOver = action.payload;
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
    startQuiz,
    endQuiz,
    setQuizLength,
    setScore,
    displayCountryOptions,
    setCountryIsChosen,
    setCountryChoiceIsCorrect,
    displayCapitalOptions,
    setCapitalIsChosen,
    setCapitalChoiceIsCorrect,
    resetSuccess,
    setTimeIsOver,
    incrementRound,
    setNextRound
} = quizSlice.actions;

export default quizSlice.reducer;