import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../redux/hooks';
import { withdrawCurrentCountry } from '../../../../redux/features/countries/countries-slice'
import { setCapitalIsChosen, setCapitalChoiceIsCorrect, setNextRound } from '../../../../redux/features/quiz/quiz-slice';

type optionProps = {
    capital: string,
    correctOption: string
}

const CapitalOption: React.FC<optionProps> = ({capital, correctOption}) => {
    const dispatch = useAppDispatch();
    
    const [backGroundColor, setBackGroundColor] = useState("bg-white");
    const [ nextFlag, setNextFlag] = useState(false);
    
    const capitalIsChosen = useAppSelector((state) => state.quiz.capitalIsChosen);
    useEffect(() => {
        if(capitalIsChosen && capital === correctOption) {
            setBackGroundColor("bg-green-500");
        }
    }, [capitalIsChosen])
    
    useEffect(() => {
        if (nextFlag) {
            setTimeout(() => {
                dispatch(setNextRound());
                dispatch(withdrawCurrentCountry());
            }, 2000)
        }
    },[nextFlag])
    
    
    const handleClick = () => {
        dispatch(setCapitalIsChosen(true));
        setNextFlag(true);
        if (capital === correctOption) {
            dispatch(setCapitalChoiceIsCorrect(true));
        } else {
            setBackGroundColor("bg-red-500");
            dispatch(setCapitalChoiceIsCorrect(false));
        }
    }

    return (
        <button 
            disabled={nextFlag}
            onClick = {handleClick}
            className={`w-80 text-lg font-bold h-12 m-4 rounded ${backGroundColor}`}
        >
            {capital}
        </button>
    )
}


export default CapitalOption;