import './App.css';
import Channel from "./components/Channel";
import React, {useState, useEffect} from 'react'
import audioFiles from "./components/Track";
import moveoLogo from './moveo.jpg'

function App() {
    const [checked, setChecked] = useState(true);

    const playAll = () => {
        audioFiles.forEach((song) => {
            song.file.play();
        })
    }
    const stopAll = () => {
        audioFiles.forEach((song) => {
            song.file.pause()
            song.file.currentTime = 0;
        })
    }
    const toggleLoop = () => {
        audioFiles.forEach((song) => {
            setChecked(!checked);
            song.file.loop = checked;
        })
    }


    return (
        <div className="App">
        <header className={'header'}>
            <img className={'logo'} src={moveoLogo}/>
            <div className={'title'}>
               Moveo Looper Machine
            </div>
        </header>

        {
            audioFiles.map((song) => {

                return (<Channel key={song.id} song={song}/>);
            })}

        <footer className={'buttons'}>

            <button className={'stop-button'} onClick={stopAll}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-stop" viewBox="0 0 16 16">
                    <path
                        d="M3.5 5A1.5 1.5 0 0 1 5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5zM5 4.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5H5z"/>
                </svg>
            </button>

            <button className={'play-button'} onClick={playAll}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-play" viewBox="0 0 16 16">
                    <path
                        d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                </svg>
            </button>
            <label className={'loop-container'}>
                <input type={"checkbox"} onClick={toggleLoop} id={'loop-checkbox'}/>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                        d="M2 12c0 .999.381 1.902.989 2.604l-1.098.732-.587.392c-.814-1.025-1.304-2.318-1.304-3.728 0-3.313 2.687-6 6-6h9v-3l6 4-6 4v-3h-9c-2.206 0-4 1.794-4 4zm20.696-3.728l-.587.392-1.098.732c.608.702.989 1.605.989 2.604 0 2.206-1.795 4-4 4h-9v-3l-6 4 6 4v-3h9c3.313 0 6-2.687 6-6 0-1.41-.489-2.703-1.304-3.728z"/>
                </svg>
            </label>
        </footer>
    </div>);
}

export default App;
