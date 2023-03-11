import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAppSelector, useAppDispatch } from '../../../../redux/hooks';
import { withdrawCurrentCountry } from '../../../../redux/features/countries/countries-slice'
import {
    setCapitalIsChosen,
    setCapitalChoiceIsCorrect,
    setNextRound,
    endQuiz
} from '../../../../redux/features/quiz/quiz-slice';

type optionProps = {
    capital: string,
    correctOption: string
}

const CapitalOption: React.FC<optionProps> = ({capital, correctOption}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    
    const [backGroundColor, setBackGroundColor] = useState("bg-white");
    const [ nextFlag, setNextFlag] = useState(false);
    
    const capitalIsChosen = useAppSelector((state) => state.quiz.capitalIsChosen);
    const timeIsOver = useAppSelector((state) => state.quiz.timeIsOver);
    const round = useAppSelector((state) => state.quiz.round);
    const quizLength = useAppSelector(state => state.quiz.quizLength);


    useEffect(() => {
        if(capitalIsChosen && capital === correctOption || timeIsOver && capital === correctOption) {
            setBackGroundColor("bg-green-500");
        }
    }, [capitalIsChosen, timeIsOver])
    
    useEffect(() => {
        if (nextFlag) {
            setTimeout(() => {
                if(round === quizLength) {
                    dispatch(endQuiz());
                    navigate("/resultats");
                } else {
                dispatch(setNextRound());
                dispatch(withdrawCurrentCountry());
                }
            }, 2500);
        }
    },[nextFlag, round, quizLength])
    
    
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
            disabled={nextFlag || timeIsOver}
            onClick = {handleClick}
            className={`w-80 text-lg font-bold h-12 m-4 rounded ${backGroundColor}`}
        >
            {capital}
        </button>
    )
}


export default CapitalOption;