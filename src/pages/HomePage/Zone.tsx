
import { useAppDispatch } from '../../redux/hooks';
import { setCurrentZone, setCurrentZoneName } from "../../redux/features/countries/countries-slice";
import { setQuizLength } from '../../redux/features/quiz/quiz-slice';

type ZoneProps = {
    name: string;
    zone: string;
    currentZone: string;
    isFetching: boolean;
}

const Zone = ({name, zone, currentZone, isFetching}:ZoneProps) => {

    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(setCurrentZone(zone));
        dispatch(setCurrentZoneName(name));
        if(name === "Monde") {
            dispatch(setQuizLength(10));
        } else {
            dispatch(setQuizLength(7));
        }
    }
    
    return (
        <li 
            className={`border-solid border-2 border-white m-4 rounded py-1 px-2 cursor-pointer font-bold text-white hover:bg-amber-500 ${
                isFetching
                ? "pointer-events-none"
                : ""
            }
            ${
                currentZone === zone
                ? "bg-amber-500"
                : ""
            }
            `}
            onClick={handleClick}
        >
            {name}
        </li>
    )
}


export default Zone;