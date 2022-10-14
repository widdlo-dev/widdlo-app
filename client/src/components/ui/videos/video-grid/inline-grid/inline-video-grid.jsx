import {useState, useEffect} from "react";

import {api} from "../../../../../shared/utils/token/api.js";
import {Link} from "react-router-dom";

import style from "./inline-video-grid.module.css";

export default function InlineVideoGrid() {

    const [loaded, setLoaded] = useState(false);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        api('GET', 'video').then(res => {
            setVideos(res);
            setLoaded(true);
        })
    }, []);

    if (loaded) {
        return (
            <div className={style["wrapper"]}>
                {
                    videos.videos.map((video, key) =>
                        <Link to={"/watch/" + video.id}>
                            <div key={key} className={style["video-card"]}>
                                <img width={150} height={100}
                                     src={`https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/abstract-big.png`} />
                                <div className={style["container"]}>
                                    <div className={style["wrapper"]}>
                                        <p>{video.title}</p>
                                        <p>{video.views} views</p>
                                        <p>{video.channel.name}</p>
                                        <p>{video.channel.followers} followers</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
        );
    }
}