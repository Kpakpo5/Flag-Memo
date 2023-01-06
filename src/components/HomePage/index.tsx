import { useFetchAllCountriesQuery } from "../../redux/features/countries/countries-api-slice";
import HomeHeader from "./HomeHeader";

const HomePage: React.FC = () => {
    const { data = [], isFetching } = useFetchAllCountriesQuery("all");

    console.log(data);

    return (
    <div>
        <HomeHeader />
        Home
    </div>
    );
}



export default HomePage;