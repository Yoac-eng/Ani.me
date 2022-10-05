import * as S from "./styles"
import { Player, Video, Ui, ClickToPlay, Spinner, Poster, Youtube} from '@vime/react';

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
        episodeTrailerYTid?: string;
    }
}

export function PlayerBox({ anime }: PlayerProps) {

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
            <h1>{anime.name} - Episódio {anime.episode}</h1>
            <div className="player-container">
                <div className="player-video">
                <Player controls>
                    <Youtube videoId={anime.episodeTrailerYTid} />
                  <Ui>
                    {/* Vime components. */}
                    <Spinner />
                    <Poster />
                  </Ui>
                </Player>
                </div>
                <div className="desc">
                    <ul>
                        <li><span className="desc-item">Duração:</span> {anime.episodeDuration ? anime.episodeDuration + " Min" : "Indefinida"}</li>
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