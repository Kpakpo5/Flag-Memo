import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router";
import { quizIsOver, replay } from "../../redux/features/quiz/quiz-slice";
import EmojiScreen from "./EmojiScreen";

const ResultsPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [displayPage, setDisplayPage] = useState(true);

    const displayResultsPage = useAppSelector(state => state.quiz.displayResultsPage);
    useEffect(() => {
        if (!displayResultsPage) {
            setDisplayPage(false);        
        }
    }, []);
        
    
    useEffect(() => {
        if(!displayPage) {
            navigate("/");
        }
    }, [displayPage]);
  
    
    useEffect(() => {
        dispatch(quizIsOver());
    }, []);

    const ZoneName = useAppSelector(state => state.countries.currentZoneName);
    const score = useAppSelector(state => state.quiz.score);
    const goodAnswers = useAppSelector(state => state.quiz.goodAnswers);

    const backToHomePage = () => {
        navigate("/");
    }
  
    const playAgain = () => {
        dispatch(replay());
        navigate("/quiz");
    }

    return (
        <div className="flex flex-col items-center w-full">
            <div className="text-white">
                <div className="mt-8 animate-fade-in-up">
                    <p>
                        <span className="inline-block pt-1.5 m-2 w-10 h-10 align-middle text-center rounded-full border-2 border-yellow-300 text-yellow-300 font-extrabold">{score}</span>
                        points obtenus sur
                        <span className="inline-block pt-1.5 m-2 w-10 h-10 align-middle text-center rounded-full border-2 text-white font-extrabold">{ZoneName === "Monde" ? 200 : 140}</span>
                        possibles
                    </p>
                </div>
                <div className="mt-4 animate-fade-in-up">
                    <p>
                        <span className="inline-block pt-1.5 m-2 w-10 h-10 align-middle text-center rounded-full border-2 border-yellow-300 text-yellow-300 font-extrabold">{goodAnswers}</span>
                        bonnes réponses sur
                        <span className="inline-block pt-1.5 m-2 w-10 h-10 align-middle text-center rounded-full border-2 text-white font-extrabold">{ZoneName === "Monde" ? 20 : 14}</span>
                        possibles
                    </p>
                </div>
            </div>
            <EmojiScreen />
            <div className="mt-12 flex justify-center">
                <button onClick={playAgain}
                    className="px-6 py-3 m-8 rounded bg-amber-400 text-black font-bold outline outline-1 outline-white outline-offset-2 hover:brightness-75 animate-scale-in"
                >
                    Rejouer
                </button>
                <button onClick={backToHomePage}
                    className="px-6 py-3 m-8 rounded bg-white text-black font-bold outline outline-1 outline-offset-2 outline-amber-400 hover:brightness-75 animate-scale-in"
                >
                    Accueil
                </button>
            </div>
        </div>
    );
}



export default ResultsPage;
