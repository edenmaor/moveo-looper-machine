import React, {useRef, useState} from 'react';
import './Channel.css'


const Channel = (props) => {
    const {song} = props;

    const [currentTime, setCurrentTime] = React.useState(0);
    const [checked, setChecked] = useState(true);

    /**
     * in this callback function we set the current time state
     * to the sane as the audio DOM element in song attribute
     */
    song.file.ontimeupdate = () => {
        setCurrentTime(song.file.currentTime);
    }

    /**
     * function to indicate the progress of the cursor
     * @param progressProp
     * @returns {{left: string}}
     */
    const getCursorStyle = (progressProp) => {
        return {
            left: `${progressProp}%`,
        };
    }

    const formatTime = (seconds) => {
        return ([Math.floor(seconds / 60), // minutes
            Math.floor(seconds % 60), // remaining seconds
        ]
            .map(x => x.toString())
            .map(x => (x.length === 1 ? `0${x}` : x))
            .join(":"));
    }

    const handleToggleMute = () => {
        setChecked(!checked);
        song.file.muted = checked;
    }

    return (

        <div className={'channel-structure'}>
            <div>{formatTime(currentTime)}</div>
            <div className={'track-structure'} style={{background: song.color}}>
                <div className={'cursor'} style={getCursorStyle((currentTime / song.file.duration) * 100)}> </div>
            </div>

            <div>{formatTime(song.file.duration)}</div>

            <label className="switch">
                <input type={"checkbox"} onChange={handleToggleMute} checked={checked}/>
                <span className="slider round"/>
            </label>

        </div>


    )
}

export default Channel;