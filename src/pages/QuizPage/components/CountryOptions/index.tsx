import CountryOption from "./CountryOption";
import { useAppSelector } from "../../../../redux/hooks"

const mockArray = ["France", "Brésil", "Japon", "Togo"]

const CountryOptions: React.FC = () => {

    const countries = useAppSelector((state) => state.countries.currentZoneCountries);

    return (
        <div className="flex items-center justify-center flex-wrap">
            {mockArray.map(countryName =>
            <CountryOption
                key={countryName}
                country={countryName}
            />
                )}
        </div>
    )
}


export default CountryOptions;