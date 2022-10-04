import { useState } from "react"
import * as S from "./styles"
import { Player, Video, Ui, ClickToPlay, Spinner, Poster} from '@vime/react';

interface PlayerProps {
    anime: {
        name?: string
        studios?: {
            name: string;
        }[]
        genres?: {
            name: string;
        }[]
        synopsis?: string;
        episode?: string;
        episodeDuration?: number;
    }
}

export function PlayerBox({ anime }: PlayerProps) {
    const [episodeData, setEpisodeData] = useState({ duration: anime.episodeDuration, number: anime.episode });

    // useEffect(() => {
        //get the episode data per slug param
    // }, [anime]);

    //making an new array with the names of the studios
    const studios = anime?.studios?.map((item) => {
        return item.name
    })
    //making an new array with the names of the genres
    const genres = anime?.genres?.map((item) => {
        return item.name
    })

    return (
        <S.PlayerBoxWrapper>
            <h1>{anime.name} - Episódio {episodeData.number}</h1>
            <div className="player-container">
                <div className="player-video">
                <Player controls>
                  <Video crossOrigin="" poster="https://media.vimejs.com/poster.png">
                      {/* These are passed directly to the underlying HTML5 `<video>` element. */}
                      {/* Why `data-src`? Lazy loading, you can always use `src` if you prefer.  */}
                      <source
                      data-src="test.mp4"
                      type="video/mp4"
                      />
                      <track
                      default
                      kind="subtitles"
                      src="https://media.vimejs.com/subs/english.vtt"
                      srcLang="en"
                      label="English"
                      />
                  </Video>
                  <Ui>
                    {/* Vime components. */}
                    <ClickToPlay />
                    <Spinner />
                    <Poster />
                  </Ui>
                </Player>
                </div>
                <div className="desc">
                    <ul>
                        <li><span className="desc-item">Duração:</span> {episodeData.duration} Min</li>
                        <li><span className="desc-item">{"Estúdio(s):"}</span> {studios?.join(",")}</li>
                        <li><span className="desc-item">Gênero:</span> {genres?.join(", ")}</li>
                    </ul>
                    <p>
                        <span className="desc-item">Sinopse:</span>
                        {anime.synopsis}
                    </p>
                </div>
            </div>
        </S.PlayerBoxWrapper>
    )
}