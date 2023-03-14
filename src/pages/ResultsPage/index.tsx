import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router";
import { quizIsOver } from "../../redux/features/quiz/quiz-slice";


const ResultsPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [displayPage, setDisplayPage] = useState(true);

    const displayResultsPage = useAppSelector(state => state.quiz.displayResultsPage);
    useEffect(() => {
        if (!displayResultsPage) {
            setDisplayPage(false);
            console.log("result page will not display")         
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

  
    return (
        <div className="text-white">
            <div>
                <div>
                    <p><span className="text-yellow-300 font-bold">{score}</span> points obtenus sur {ZoneName === "Monde" ? 200 : 140} possibles</p>
                </div>
                <div>
                    <p><span className="text-yellow-300 font-bold">{goodAnswers}</span> bonnes réponses sur {ZoneName === "Monde" ? 20 : 14} possibles</p>
                </div>
            </div>
            <div>
                <p>Bien joué</p>
                <div>
                    <img />
                    <img />
                </div>
            </div>
            <div>
                <button>Rejouer</button>
                <button>Accueil</button>
            </div>
        </div>
    );
}



export default ResultsPage;
