import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../redux/hooks';
import { setCapitalIsChosen, setCapitalChoiceIsCorrect } from '../../../../redux/features/quiz/quiz-slice';

type optionProps = {
    capital: string,
    correctOption: string
}

const CapitalOption: React.FC<optionProps> = ({capital, correctOption}) => {
    const dispatch = useAppDispatch();
    const [backGroundColor, setBackGroundColor] = useState("bg-white");
    const capitalIsChosen = useAppSelector(state => state.quiz.capitalIsChosen);

    useEffect(() => {
        if (capitalIsChosen && correctOption === capital) {
            setBackGroundColor("bg-green-500");
        }
    },[capitalIsChosen])
    
    
    const handleClick = () => {
        dispatch(setCapitalIsChosen(true));
        if (capital === correctOption) {
            dispatch(setCapitalChoiceIsCorrect(true));
        } else {
            setBackGroundColor("bg-red-500");
            dispatch(setCapitalChoiceIsCorrect(false));
        }
    }

    return (
        <button 
            disabled={capitalIsChosen}
            onClick = {handleClick}
            className={`w-80 text-lg font-bold h-12 m-4 rounded ${backGroundColor}`}
        >
            {capital}
        </button>
    )
}


export default CapitalOption;