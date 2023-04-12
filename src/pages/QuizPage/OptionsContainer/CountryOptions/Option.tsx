import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../redux/hooks';
import {
    setCountryIsChosen,
    setCountryChoiceIsCorrect,
    incrementGoodAnswers,
    displayCapitalOptions,
} from '../../../../redux/features/quiz/quiz-slice';

type optionProps = {
    countryName: string,
    correctOption: string
}

const Option: React.FC<optionProps> = ({countryName, correctOption}) => {
    const dispatch = useAppDispatch();
    const [backGroundColor, setBackGroundColor] = useState("bg-stone-100");
    const [nextStep, setNextStep] = useState(false);

    const countryIsChosen = useAppSelector((state) => state.quiz.countryIsChosen);
    const timeIsOver = useAppSelector((state) => state.quiz.timeIsOver);

    useEffect(() => {
        if(countryIsChosen && correctOption === countryName || timeIsOver && correctOption === countryName) {
            setBackGroundColor("bg-green-500");
        }
    }, [countryIsChosen, timeIsOver])

    

    useEffect(() => {
        if (nextStep) {
           setTimeout(() => {
               dispatch(displayCapitalOptions());
            }, 2500)
        }
    },[nextStep])
    
    
    const handleClick = () => {
        dispatch(setCountryIsChosen(true));
        setNextStep(true);
        if (countryName === correctOption) {
            dispatch(setCountryChoiceIsCorrect(true));
            dispatch(incrementGoodAnswers());
        } else {
            setBackGroundColor("bg-red-500");
            dispatch(setCountryChoiceIsCorrect(false));
        }
    }

    return (
        <button 
            disabled={countryIsChosen || timeIsOver}
            onClick={handleClick}
            className={`w-32 font-bold tracking-wide h-32 m-4 rounded p-2 text-ellipsis text-gray-800 overflow-hidden transition-colors duration-300 ${backGroundColor}`}
        >
            {countryName}
        </button>
    )
}


export default Option;