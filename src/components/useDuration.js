import { useState, useEffect } from "react";
import audioFiles from "./Track";


const useDuration = (file) => {
    const [currentTime, setCurrentTime] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const [isReady, setIsReady] = useState(false);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        audioFiles.map(item => {
            item.audio.ontimeupdate = function () {
                const timeLeft = this.duration - this.currentTime;
                const progress = (this.currentTime / this.duration).toFixed(2);
                setPercentage(+(progress * 100).toFixed(2))
                //to fix the delay
                if ( timeLeft <= 1 && timeLeft > 0) {
                    this.currentTime = 0;
                    this.play();
                }
                if(item.audio.ended === true){
                    setPercentage(1);
                }
            };
            return item;
        });
    }, [isPlaying]);

}

export default useDuration;