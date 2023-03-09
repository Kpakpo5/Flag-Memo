import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { setCurrentCountry } from "../../redux/features/countries/countries-slice";
import { displayCountryOptions, incrementRound } from "../../redux/features/quiz/quiz-slice";

import Header from "./Header";
import OptionsContainer from "./OptionsContainer/OptionContainer";

import { getRandomItem } from "../../utils";

const QuizPage: React.FC = () => {
    const dispatch = useAppDispatch();

    const [current, setCurrent] = useState(null);
    const countries = useAppSelector(state => state.countries.currentZoneCountries);
    useEffect(() => {
        dispatch(incrementRound());
        const randomCountry = getRandomItem(countries);
        setCurrent(randomCountry)
        dispatch(setCurrentCountry(randomCountry));
        dispatch(displayCountryOptions(true));
    }, [countries])


    return (
        <div className="flex flex-col items-center w-full">
            <Header />
        <div className="flex flex-col jutify-center items-center">
            <div className="h-32 w-56 mb-8 border-2 border-neutral-300">
                {current && <img className="h-full w-full object-cover" src={current.flags.svg} alt="quiz flag" />}
            </div>
            <OptionsContainer />
        </div>
            
        </div>
    )
}



export default QuizPage;