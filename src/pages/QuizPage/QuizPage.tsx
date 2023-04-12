import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { setCurrentCountry } from "../../redux/features/countries/countries-slice";
import { displayCountryOptions, incrementRound, setQuizLength, setPotentialScore } from "../../redux/features/quiz/quiz-slice";

import Header from "./Header";
import OptionsContainer from "./OptionsContainer/OptionContainer";
import FlagContainer from "./FlagContainer";
import QuitButton from "./QuitButton";

import { getRandomItem } from "../../helpers";

const QuizPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [current, setCurrent] = useState(null);
    const [displayPage, setDisplayPage] = useState(true);

    const currentZoneName = useAppSelector(state => state.countries.currentZoneName);
    const countries = useAppSelector(state => state.countries.currentZoneCountries);
    const quizIsRunning = useAppSelector(state => state.quiz.quizIsRunning);

    useEffect(() => {
        if(!quizIsRunning || !countries || countries.length < 5) {
            setDisplayPage(false);
        }
    }, []);
    

    useEffect(() => {
        if(!displayPage) {
            navigate("/");
        }
    }, [displayPage])

    useEffect(() => {
        if (currentZoneName === "Monde") {
            dispatch(setQuizLength(10));
            dispatch(setPotentialScore(200));
        } else {
            dispatch(setQuizLength(7));
            dispatch(setPotentialScore(140));
        }
    }, []);
  
    
    useEffect(() => {
        if (countries) {
        const relevantCountries = countries.filter(country => 
            country.capital !== undefined && country.flags !== undefined);
        dispatch(incrementRound());
        const randomCountry = getRandomItem(relevantCountries);
        setCurrent(randomCountry)
        dispatch(setCurrentCountry(randomCountry));
        dispatch(displayCountryOptions());
        }
    }, [countries])


    return (
        <div className="flex flex-col items-center w-full">
            <Header />
        <div className="flex flex-col jutify-center items-center mb-32">
            {current && <FlagContainer currentFlag={current.flags.svg} />}
            <OptionsContainer />
        </div>
            <QuitButton />
        </div>
    )
}



export default QuizPage;