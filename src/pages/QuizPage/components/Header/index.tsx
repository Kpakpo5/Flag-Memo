import { useAppSelector } from "../../../../redux/hooks";
import CountDownTimer from "./CountDownTimer";

const Header: React.FC = () => {
    const zoneName = useAppSelector((state) => state.countries.currentZoneName)
    const quiz = useAppSelector((state) => state.quiz);
    const score = quiz.score;
    const round = quiz.round;

    return (
        <div className="text-white bg-amber-300 bg-opacity-20 w-full flex items-center justify-between border-white border-y-2 mt-4 h-20 p-6 mb-8 md:border-x-2 md:rounded-full">
            <div className="flex flex-col items-center justify-center">
                <span>{zoneName}</span>
                <span className="tracking-wide font-bold">&#127937; {round}/{zoneName==="Monde"? 10 : 7}</span>
            </div>
            <CountDownTimer />
            <div className="font-bold">
              {score} {score <= 1 ? "pt" : "pts"}
            </div>
            
        </div>
    )
}



export default Header;