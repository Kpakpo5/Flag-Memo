import CapitalOption from "./CapitalOption";
import { useAppSelector } from "../../../../redux/hooks"

const mockArray = ["Paris", "Buenos Aires", "Tokyo", "Togo"]

const CapitalOptions: React.FC = () => {

    const countries = useAppSelector((state) => state.countries.currentZoneCountries);

    return (
        <div className="flex flex-col items-center justify-center flex-wrap">
            {mockArray.map(countryName =>
            <CapitalOption
                key={countryName}
                capital={countryName}
            />
                )}
        </div>
    )
}


export default CapitalOptions;