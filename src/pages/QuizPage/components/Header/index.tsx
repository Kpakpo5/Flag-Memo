
import CountDownTimer from "./CountDownTimer";

const Header: React.FC = () => {
    return (
        <div className="text-white bg-amber-300 bg-opacity-20 w-full flex items-center justify-between border-white border-y-2 mt-4 h-20 p-6 mb-8">
            <div>
                Logo
            </div>
            <div>
                Points
            </div>
            <CountDownTimer />
        </div>
    )
}



export default Header;