import Header from "./components/Header";
import CountryOptions from "./components/CountryOptions";
import CapitalOptions from "./components/CapitalOptions";
import flag from "../../assets/images/france.png"

const QuizPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center w-full">
            <Header />
        <div className="flex flex-col jutify-center items-center">
            <div className="h-32 w-56 mb-8">
                <img className="h-full w-full object-cover" src={flag} alt="quiz flag" />
            </div>
            <CountryOptions />
            <CapitalOptions />
        </div>
            
        </div>
    )
}



export default QuizPage;