import CapitalOption from "./CapitalOption";
import { useAppSelector } from "../../../../redux/hooks"
import { get3RandomItems } from "../../../../utils";

const mockArray = ["Paris", "Buenos Aires", "Tokyo", "Togo"]

const CapitalOptions: React.FC = () => {
    const currentCountry = useAppSelector(state => state.countries.currentCountry);
    const countries = useAppSelector(state => state.countries.currentZoneCountries);
    const relevantCountries = countries.filter(country => 
        country.name.common !== currentCountry.name.common && country.capital !== undefined);
    const partialOptions = get3RandomItems(relevantCountries);
    const totalOptions = [...partialOptions, currentCountry].sort(() =>
    Math.random() - 0.5);
    const correctOption = currentCountry.capital[0];
    

    return (
        <div className="flex flex-col items-center justify-center flex-wrap">
            {totalOptions.map( option =>
            <CapitalOption
                key={option.capital[0]}
                capital={option.capital[0]}
                correctOption={correctOption}
            />
                )}
        </div>
    )
}


export default CapitalOptions;