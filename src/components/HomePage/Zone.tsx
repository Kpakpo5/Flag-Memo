
import { useAppDispatch } from '../../redux/hooks';
import { setCurrentZone } from "../../redux/features/countries/countries-slice";

type ZoneProps = {
    label: string;
    zone: string;
    currentZone: string;
    isFetching: boolean;
}

const Zone = ({label, zone, currentZone, isFetching}:ZoneProps) => {

    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(setCurrentZone(zone));
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
            {label}
        </li>
    )
}


export default Zone;