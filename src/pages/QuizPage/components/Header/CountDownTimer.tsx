import { useState, useEffect } from "react";

const TIME_IN_MILISECONDS_TO_COUNTDOWN = 15*1000;

const CountDownTimer: React.FC = () => {

    const [ remainingTime, setRemainingTime] = useState(TIME_IN_MILISECONDS_TO_COUNTDOWN);
    const [referenceTime, setReferenceTime] = useState(Date.now());

    useEffect(() => {
        const countDown = () => {
            setRemainingTime(prevTime => {
                if (prevTime < 1) return 0;
                const currentTime = Date.now();
                const interval = currentTime - referenceTime;
                setReferenceTime(currentTime);
                return prevTime - interval;
            });
        }
        
        setTimeout(countDown, 1000);

    }, [remainingTime])

    const remainingSeconds = Math.round(remainingTime/1000);

    return (
        <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center text-2xl font-bold ${
            remainingSeconds > 9
            ? "border-green-500"
            : remainingSeconds > 0
                ? "border-red-500"
                : "border-neutral-400 text-neutral-400"
        }`}>
            {remainingSeconds}
        </div>
    )
}



export default CountDownTimer;