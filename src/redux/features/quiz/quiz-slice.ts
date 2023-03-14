import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QuizState {
    quizIsRunning: boolean,
    quizLength: number,
    score: number,
    goodAnswers: number,
    round: number,
    countryOptionsDisplay: boolean,
    countryIsChosen: boolean,
    countryChoiceIsCorrect : boolean,
    capitalOptionsDisplay: boolean,
    capitalIsChosen: boolean,
    capitalChoiceIsCorrect: boolean,
    timeIsOver: boolean,
    displayResultsPage: boolean
}

const initialState: QuizState = {
    quizIsRunning: false,
    quizLength: 0,
    score: 0,
    goodAnswers: 0,
    round: 0,
    countryOptionsDisplay: false,
    countryIsChosen: false,
    countryChoiceIsCorrect: null,
    capitalOptionsDisplay: false,
    capitalIsChosen: false,
    capitalChoiceIsCorrect: null,
    timeIsOver: false,
    displayResultsPage: false
}

export const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        startQuiz: (state) => {
            state.quizIsRunning = true;
        },
        endQuiz: (state) => {
            state.displayResultsPage = true;
        },
        quizIsOver: (state => {
            state.quizIsRunning = false;
        }),
        setQuizLength: (state, action: PayloadAction<number>) => {
            state.quizLength = action.payload;
        },
        setScore: (state, action: PayloadAction<number>) => {
            state.score += action.payload;
        },
        incrementGoodAnswers : (state) => {
            state.goodAnswers ++;
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
        },
        resetQuiz: (state) => {
            state.quizIsRunning =false;
            state.quizLength = 0;
            state.score = 0;
            state.goodAnswers = 0;
            state.round = 0;
            state.countryOptionsDisplay = false;
            state.countryIsChosen = false;
            state.countryChoiceIsCorrect = null;
            state.capitalOptionsDisplay = false,
            state.capitalIsChosen = false;
            state.capitalChoiceIsCorrect = null;
            state.timeIsOver = false;
            state.displayResultsPage = false;
        }
    }
});



export const {
    startQuiz,
    endQuiz,
    quizIsOver,
    setQuizLength,
    setScore,
    incrementGoodAnswers,
    displayCountryOptions,
    setCountryIsChosen,
    setCountryChoiceIsCorrect,
    displayCapitalOptions,
    setCapitalIsChosen,
    setCapitalChoiceIsCorrect,
    resetSuccess,
    setTimeIsOver,
    incrementRound,
    setNextRound,
    resetQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;