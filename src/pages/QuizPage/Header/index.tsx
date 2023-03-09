import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import CountDownTimer from "./CountDownTimer";

const Header: React.FC = () => {
    const dispatch = useAppDispatch();

    const zoneName = useAppSelector((state) => state.countries.currentZoneName)
    const score = useAppSelector((state) => state.quiz.score);
    const round = useAppSelector((state) => state.quiz.round);
    const countryOptionsDisplay = useAppSelector((state) => state.quiz.countryOptionsDisplay);
    const capitalOptionsDisplay = useAppSelector((state) => state.quiz.capitalOptionsDisplay);


    return (
        <div className="text-white bg-amber-300 bg-opacity-20 w-full flex items-center justify-between border-white border-y-2 mt-4 h-20 p-6 mb-8 md:border-x-2 md:rounded-full">
            <div className="flex flex-col items-center justify-center">
                <span>{zoneName}</span>
                <span className="tracking-wide font-bold">&#127937; {round}/{zoneName==="Monde"? 10 : 7}</span>
            </div>
            {countryOptionsDisplay && <CountDownTimer />}
            {capitalOptionsDisplay && <CountDownTimer /> }
            <div className="font-bold">
              {score} {score <= 1 ? "pt" : "pts"}
            </div>
            
        </div>
    )
}



export default Header;