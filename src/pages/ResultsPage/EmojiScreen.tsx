import { useAppSelector } from "../../redux/hooks";
import EmojiData from "../../EmojisData";
import { handleEmojiDisplay } from "../../helpers";

const EmojiScreen: React.FC = () => {

const score = useAppSelector(state => state.quiz.score);
const potentialScore = useAppSelector(state => state.quiz.potentialScore);

const pointsPercentage = (score / potentialScore) * 100;

const data = handleEmojiDisplay(pointsPercentage, EmojiData);


    return(
        <div className="relative mt-12 w-full max-w-xl h-60">
            <div className="bg-white absolute inset-0 animate-spread">
                <div className="flex items-center justify-center">
                    <img className="w-28 m-8" src={data.emojis[0]}/>
                    <img className="w-28 m-8" src={data.emojis[1]}/>
                </div>
                <p className="text-lg text-center text-zinc-600 font-semibold italic">{data.comment}</p>
            </div>
        </div>
    )
}


export default EmojiScreen;