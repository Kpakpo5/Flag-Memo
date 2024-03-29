import { useAppSelector } from "../../../../redux/hooks";
import CountryOption from "./Option";

import { get3RandomItems } from "../../../../helpers";

const CountryOptions: React.FC = () => {

    const currentCountry = useAppSelector(state => state.countries.currentCountry);
    const countries = useAppSelector(state => state.countries.currentZoneCountries);
    const relevantCountries = countries.filter(country => 
        country.name.common !== currentCountry.name.common && country.name.common !== undefined);
    const partialOptions = get3RandomItems(relevantCountries);
    const totalOptions = [...partialOptions, currentCountry].sort(() =>
    Math.random() - 0.5);
    const correctOption = currentCountry.translations.fra.common;

    return (
        <div className="flex flex-col items-center">
            <p className="text-white text-lg tracking-wider font-bold mb-4">PAYS ?</p>
            <div className="flex items-center justify-center flex-wrap">
                {totalOptions.map(option =>
                <CountryOption
                    key={option.name.common}
                    countryName={option.translations.fra.common}
                    correctOption={correctOption}
                />
                    )}
            </div>
        </div>
    )
}


export default CountryOptions;