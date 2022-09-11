import { useEffect, useState } from "react"
import * as S from "./styles"

interface PlayerProps {
    anime: {
        name: string
        studio: string
        genders: Array<string>
        synopsis: string
    }
}

export function PlayerBox({ anime }: PlayerProps) {
    const [episodeData, setEpisodeData] = useState({ duration: 0, number: 0 });

    useEffect(() => {
        //get the episode data per slug param
    }, [anime]);

    return (
        <S.PlayerBoxWrapper>
            <h1>{anime.name} - Episódio {episodeData.number}</h1>
            <div className="player-container">
                <div className="player-video">
                    
                </div>
                <div className="desc">
                    <ul>
                        <li><span className="desc-item">Duração:</span> {episodeData.duration} Min.</li>
                        <li><span className="desc-item">Estudio:</span> {anime.studio}</li>
                        <li><span className="desc-item">Genero:</span> {anime.genders.join(", ")}</li>
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