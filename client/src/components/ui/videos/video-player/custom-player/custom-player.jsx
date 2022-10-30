import style from "./custom-player.module.css";
import {useEffect, useState} from "react";

export default function CustomPlayer(props) {

    const alterPlay = () => {
        setPlaying(!playing);
        playing ? player.pause() : player.play();
    }

    const setVideoProgress = () => {
        player.currentTime = videoRange.value * player.duration / 100;
    }

    const [player, setPlayer] = useState(null);
    const [videoRange, setVideoRange] = useState(null);

    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        setPlayer(document.getElementById('video-player'));
        setVideoRange(document.getElementById('video-range'));
    }, []);


    return (
        <div className={style["container"]}>
            <video id="video-player" className={style["player"]} src={props.source} />
            <div className={style["wrapper"]}>
                <div className={style["header"]}>
                    <h1>a</h1>
                </div>
                <div className={style["controls"]}>
                    <button onClick={() => alterPlay()} className={style["control"]}>{playing ? <i className="fa-solid fa-pause" /> : <i className="fa-solid fa-play" />}</button>
                    <input id="video-range" type="range" onChange={() => setVideoProgress()} />
                </div>
            </div>
        </div>
    );
}