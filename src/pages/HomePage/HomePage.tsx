import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { setCurrentZoneCountries } from "../../redux/features/countries/countries-slice";
import { resetQuiz, startQuiz } from "../../redux/features/quiz/quiz-slice";
import { useFetchZoneCountriesQuery } from "../../redux/features/countries/countries-api-slice";
import logo from '../../assets/images/app-logo.png';
import ZoneSelector from "./Zones/ZoneSelector";
import InfosModal from "./InfosModal";

const HomePage: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    const currentZone = useAppSelector((state) => state.countries.currentZone);
    const { data, isFetching, isError } = useFetchZoneCountriesQuery(currentZone);

    useEffect(() => {
        if(data) {
    dispatch(setCurrentZoneCountries(data));
        }
    }, [data]);

    useEffect(() => {
        dispatch(resetQuiz());
    }, [])
    
    const handleClick = () => {
        dispatch(startQuiz());
        navigate("/quiz");
    }

    const hideModal = () => {
        setModalIsOpen(false);
    }

    return (
        <div className="text-center">
            <div className="flex justify-center items-center">
                <img src={logo} />
            </div>
            {isError
                ?
                <div className="flex justify-center items-center text-center text-2xl font-bold mt-12 p-16 text-white">
                    Désolé, les données n'ont pas pu être récupérées.<br /><br />
                    Veuillez rafraîchir la page ou réessayer plus tard.
                </div>
                :
                <div className="flex flex-col justify-center items-center ">
                    <button 
                        onClick={() => setModalIsOpen(true)}
                        className="flex justify-center items-center border-solid border-amber-500 bg-stone-100 border-4 rounded-full w-10 h-10 p-5 mt-8">
                        <FontAwesomeIcon 
                            className="text-3xl font-bold text-black italic "
                            icon={faQuestion}
                        />
                    </button>
                    <ZoneSelector isFetching={isFetching}/>
                    <button 
                        disabled={isFetching }
                        onClick={handleClick}
                        className="text-white font-extrabold px-8 py-4 mt-10 sm:mt-16 bg-amber-500 shadow-inner shadow-white outline outline-1 outline-offset-1 outline-amber-400 hover:outline-offset-2"
                    >
                        Démarrer le Quiz
                    </button>
                </div>
            }
            <InfosModal 
                modalIsOpen={modalIsOpen}
                closeModal={() => hideModal()}
            />
        </div>
    );
}



export default HomePage;