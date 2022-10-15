import style from "./stream-view.module.css";
import Plyr from "plyr";
import {useEffect} from "react";
import {api} from "../../../../../../shared/utils/token/api.js";

export default function StreamView() {

    useEffect(() => {
        api('GET', 'video/').then(res => {
        })
    }, []);

    const controls = ['play', 'rewind', 'restart', 'mute', 'volume', 'pip', 'airplay', 'fullscreen'];
    new Plyr('.video-player', { controls });

    return (
        <div className={style["wrapper"]}>
            <div className={style["video-wrapper"]}>
                <link rel="stylesheet" href="https://cdn.plyr.io/3.7.2/plyr.css"/>
                <video className="video-player" autoPlay playsInline controls src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"/>
            </div>
            <h1>aaaa</h1>
        </div>
    );
}