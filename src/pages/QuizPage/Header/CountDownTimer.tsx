import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { setScore } from "../../../redux/features/quiz/quiz-slice";

const TIME_IN_MILISECONDS_TO_COUNTDOWN = 15*1000;

const CountDownTimer: React.FC = () => {
    const dispatch = useAppDispatch();

    const [ remainingTime, setRemainingTime] = useState(TIME_IN_MILISECONDS_TO_COUNTDOWN);
    const [referenceTime, setReferenceTime] = useState(Date.now());
    const remainingSeconds = Math.round(remainingTime/1000);
    
    const countryIsChosen = useAppSelector((state) => state.quiz.countryIsChosen);
    const countryChoiceIsCorrect = useAppSelector((state) => state.quiz.countryChoiceIsCorrect);
    const capitalIsChosen = useAppSelector((state) => state.quiz.capitalIsChosen);
    const capitalChoiceIsCorrect = useAppSelector((state) => state.quiz.capitalChoiceIsCorrect);

    useEffect(() => {
        const countDown = () => {
            setRemainingTime(prevTime => {
                if (prevTime < 1) return 0;
                const currentTime = Date.now();
                const interval = currentTime - referenceTime;
                setReferenceTime(currentTime);
                return prevTime - interval;
            });
        }

        
        const timer = setTimeout(countDown, 1000);

        if (countryIsChosen || capitalIsChosen) {
            clearTimeout(timer);
        }

    }, [remainingTime, countryIsChosen, capitalIsChosen]);


    useEffect(() => {
        if ((countryIsChosen && countryChoiceIsCorrect) || (capitalIsChosen && capitalChoiceIsCorrect)) {
            if (remainingSeconds >= 10) {
                dispatch(setScore(10));
            } else {
                dispatch(setScore(remainingSeconds));
            }
        }
    }, [countryIsChosen, countryChoiceIsCorrect, capitalIsChosen, capitalChoiceIsCorrect]);

    
    
    return (
        <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center text-2xl font-bold ${
            remainingSeconds > 9
            ? "border-green-500"
            : remainingSeconds > 0
                ? "border-red-500"
                : "border-neutral-400 text-neutral-400"
        }`}>
            {remainingSeconds}
        </div>
    )
}



export default CountDownTimer;