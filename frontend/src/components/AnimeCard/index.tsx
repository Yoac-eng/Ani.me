import { Link } from 'react-router-dom'
import * as S from './styles'

interface AnimeCardProps {
    name: string
    lastEpisode?: string
    image?: string
    pathname: string
    animeId?: number
    episodeId?: number
}

export function AnimeCard({ name, lastEpisode, image, pathname, animeId, episodeId}: AnimeCardProps) {
    return (
        <S.AnimeCardWrapper backgroundImage={image}>
          <Link to={`${pathname}/${animeId}/episodes/${episodeId}`}>
              {lastEpisode && <p>{lastEpisode}</p>}
          </Link>
          <strong>{name}</strong>
        </S.AnimeCardWrapper>
    )
}