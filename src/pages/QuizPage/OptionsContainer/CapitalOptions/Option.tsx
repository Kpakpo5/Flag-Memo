import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAppSelector, useAppDispatch } from '../../../../redux/hooks';
import { withdrawCurrentCountry } from '../../../../redux/features/countries/countries-slice'
import {
    setCapitalIsChosen,
    setCapitalChoiceIsCorrect,
    incrementGoodAnswers,
    setNextRound,
    endQuiz
} from '../../../../redux/features/quiz/quiz-slice';

type optionProps = {
    capital: string,
    correctOption: string
}

const Option: React.FC<optionProps> = ({capital, correctOption}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    
    const [backGroundColor, setBackGroundColor] = useState("bg-white");
    const [ userHasClicked, setUserHasClicked] = useState(false);
    
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
        if (userHasClicked) {
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
    },[userHasClicked, round, quizLength])
    
    
    const handleClick = () => {
        dispatch(setCapitalIsChosen(true));
        setUserHasClicked(true);
        if (capital === correctOption) {
            dispatch(setCapitalChoiceIsCorrect(true));
            dispatch(incrementGoodAnswers());
        } else {
            setBackGroundColor("bg-red-500");
            dispatch(setCapitalChoiceIsCorrect(false));
        }
    }

    return (
        <button 
            disabled={capitalIsChosen || timeIsOver}
            onClick = {handleClick}
            className={`w-80 text-lg font-bold h-12 m-4 rounded p-2 text-ellipsis ${backGroundColor}`}
        >
            {capital}
        </button>
    )
}


export default Option;