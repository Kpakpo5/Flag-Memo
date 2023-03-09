import { useAppSelector } from "../../../redux/hooks";

import CountryOptions from "./CountryOptions";
import CapitalOptions from "./CapitalOptions";

const OptionsContainer: React.FC = () => {
    const displayCountryOptions = useAppSelector((state) => state.quiz.countryOptionsDisplay);
    const displayCapitalOptions = useAppSelector((state) => state.quiz.capitalOptionsDisplay);
    
    return (
        <div>
            {displayCountryOptions && <CountryOptions />}
            {displayCapitalOptions && <CapitalOptions />}
        </div>
    )
}


export default OptionsContainer;