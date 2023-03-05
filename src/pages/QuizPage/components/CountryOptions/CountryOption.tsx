import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../redux/hooks';
import { setCountryIsChosen, setCountryChoiceIsCorrect} from '../../../../redux/features/quiz/quiz-slice'

type optionProps = {
    countryName: string,
    correctOption: string
}

const CountryOption: React.FC<optionProps> = ({countryName, correctOption}) => {
    const dispatch = useAppDispatch();
    const [backGroundColor, setBackGroundColor] = useState("bg-white");
    const countryIsChosen = useAppSelector(state => state.quiz.countryIsChosen);

    useEffect(() => {
        if (countryIsChosen && correctOption === countryName) {
            setBackGroundColor("bg-green-500");
        }
    },[countryIsChosen])
    
    
    const handleClick = () => {
        dispatch(setCountryIsChosen(true));
        if (countryName === correctOption) {
            dispatch(setCountryChoiceIsCorrect(true));
        } else {
            setBackGroundColor("bg-red-500");
            dispatch(setCountryChoiceIsCorrect(false));
        }
    }

    return (
        <button 
            disabled={countryIsChosen}
            onClick={handleClick}
            className={`w-32 text-lg font-bold h-32 m-4 rounded bg-white ${backGroundColor}`}
        >
            {countryName}
        </button>
    )
}


export default CountryOption;