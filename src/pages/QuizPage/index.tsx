import Header from "./components/Header";
import CountryOptions from "./components/CountryOptions";
import CapitalOptions from "./components/CapitalOptions";
import flag from "../../assets/images/france.png";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { setCurrentCountry } from "../../redux/features/countries/countries-slice";

import { getRandomItem } from "../../utils";

const QuizPage: React.FC = () => {
const dispatch = useAppDispatch();

const countries = useAppSelector(state => state.countries.currentZoneCountries);
const randomCountry = getRandomItem(countries);
dispatch(setCurrentCountry(randomCountry));
const currentFlag = randomCountry.flags.svg;

    return (
        <div className="flex flex-col items-center w-full">
            <Header />
        <div className="flex flex-col jutify-center items-center">
            <div className="h-32 w-56 mb-8 border-2 border-neutral-300">
                <img className="h-full w-full object-cover" src={currentFlag} alt="quiz flag" />
            </div>
            <CountryOptions />
            <CapitalOptions />
        </div>
            
        </div>
    )
}



export default QuizPage;