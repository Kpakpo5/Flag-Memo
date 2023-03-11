import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { setCurrentCountry } from "../../redux/features/countries/countries-slice";
import { displayCountryOptions, incrementRound } from "../../redux/features/quiz/quiz-slice";

import Header from "./Header";
import OptionsContainer from "./OptionsContainer/OptionContainer";
import FlagContainer from "./FlagContainer";

import { getRandomItem } from "../../utils";

const QuizPage: React.FC = () => {
    const dispatch = useAppDispatch();

    const [current, setCurrent] = useState(null);

    const countries = useAppSelector(state => state.countries.currentZoneCountries);
    const relevantCountries = countries.filter(country => 
        country.capital !== undefined && country.flags !== undefined);
    useEffect(() => {
        dispatch(incrementRound());
        const randomCountry = getRandomItem(relevantCountries);
        setCurrent(randomCountry)
        dispatch(setCurrentCountry(randomCountry));
        dispatch(displayCountryOptions(true));
    }, [countries])


    return (
        <div className="flex flex-col items-center w-full">
            <Header />
        <div className="flex flex-col jutify-center items-center">
            {current && <FlagContainer currentFlag={current.flags.svg} />}
            <OptionsContainer />
        </div>
            
        </div>
    )
}



export default QuizPage;