import { useAppSelector } from "../../redux/hooks";
import { setCurrentZoneCountries } from "../../redux/features/countries/countries-slice";
import { useFetchZoneCountriesQuery } from "../../redux/features/countries/countries-api-slice";
import logo from '../../assets/images/app-logo.png';
import ZoneSelector from "./ZoneSelector";

const HomePage: React.FC = () => {

    const currentZone = useAppSelector((state) => state.countries.currentZone);
    const { data, isFetching, isError } = useFetchZoneCountriesQuery(currentZone);

    console.log(data);
    setCurrentZoneCountries(data);

    return (
        <div className="text-center">
            <div className="flex justify-center items-center">
                <img src={logo} />
            </div>
            {isError
                ?
                <div className="flex justify-center items-center text-center text-2xl font-bold mt-16 p-16 text-white">
                    Désolé, les données n'ont pas pu être récupérées.<br /><br />
                    Veuillez rafraîchir la page ou réessayer plus tard.
                </div>
                :
                <div>
                    <button className="text-xl font-bold text-amber-500 italic mt-12">Zones</button>
                    <ZoneSelector isFetching={isFetching}/>
                    <button 
                        disabled={isFetching }
                        className="text-white font-extrabold px-4 py-2 mt-12 sm:mt-16 bg-amber-500 rounded-md"
                    >
                        Démarrer le Quiz
                    </button>
                </div>
            }
        </div>
    );
}



export default HomePage;