import { Link } from 'react-router-dom'
import * as S from './styles'

interface AnimeCardProps {
    name: string
    lastEpisode?: string
    image: string
}

export function AnimeCard({ name, lastEpisode, image }: AnimeCardProps) {
    return (
        <S.AnimeCardWrapper backgroundImage={image}>
            {/* Decidir se troco isso pra link ou não */}
            <Link to="player">
                {lastEpisode && <p>{lastEpisode}</p>}
            </Link>
            <strong>{name}</strong>
        </S.AnimeCardWrapper>
    )
}