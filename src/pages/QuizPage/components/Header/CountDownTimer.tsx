import { useState, useEffect } from "react";

const TIME_IN_MILISECONDS_TO_COUNTDOWN = 15*1000;

const CountDownTimer: React.FC = () => {

    const [ remainingTime, setRemainingTime] = useState(TIME_IN_MILISECONDS_TO_COUNTDOWN);
    const [referenceTime, setReferenceTime] = useState(Date.now());

    useEffect(() => {
        const countDown = () => {
            setRemainingTime(prevTime => {
                if (prevTime <= 0) return 0;
                const currentTime = Date.now();
                const interval = currentTime - referenceTime;
                setReferenceTime(currentTime);
                return prevTime - interval;
            });
        }
        
        setTimeout(countDown, 1000);

    }, [remainingTime])

    return (
        <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center text-xl font-bold">
            {Math.round(remainingTime/1000)}
        </div>
    )
}



export default CountDownTimer;