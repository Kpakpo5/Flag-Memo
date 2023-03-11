import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setTimeIsOver, displayCapitalOptions, setNextRound, endQuiz} from "../../redux/features/quiz/quiz-slice";
import { withdrawCurrentCountry } from "../../redux/features/countries/countries-slice";

const FlagContainer: React.FC<any> = ({currentFlag}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const timeIsOver = useAppSelector(state => state.quiz.timeIsOver);
    const countryOptionsAreDisplayed = useAppSelector(state => state.quiz.countryOptionsDisplay);
    const capitalOptionsAreDisplayed = useAppSelector(state => state.quiz.capitalOptionsDisplay);
    const round = useAppSelector(state => state.quiz.round);
    const quizLength = useAppSelector(state => state.quiz.quizLength);

    useEffect (() => {
        if (countryOptionsAreDisplayed && timeIsOver) {
            setTimeout(() => {
                dispatch(setTimeIsOver(false));
                dispatch(displayCapitalOptions());
            }, 2500)
        }
        if (capitalOptionsAreDisplayed && timeIsOver) {
            setTimeout(() => {
                dispatch(setTimeIsOver(false));
                if(round === quizLength) {
                    dispatch(endQuiz());
                    navigate("/resultats");
                } else {
                dispatch(setNextRound());
                dispatch(withdrawCurrentCountry());
                }
            }, 2500);
        }
    }, [timeIsOver, countryOptionsAreDisplayed, capitalOptionsAreDisplayed, round, quizLength])

    return (
        <div className="flex">
            <div className="h-32 w-56 mb-8 border-2 border-neutral-300">
                <img className="h-full w-full object-cover" src={currentFlag} alt="quiz flag" />
            </div>
            <div className="">
                <h3></h3>
            </div>
        </div>
    )
}


export default FlagContainer;