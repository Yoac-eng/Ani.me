import { Link } from 'react-router-dom'
import * as S from './styles'

interface AnimeCardProps {
    name: string
    lastEpisode?: string
    image?: string
    pathname: string
    episodeId?: number
}

export function AnimeCard({ name, lastEpisode, image, pathname, episodeId}: AnimeCardProps) {
    return (
        <S.AnimeCardWrapper backgroundImage={image}>
          {/* Possívelmente poderei tirar essa condição no futuro, só pra nao quebrar no momento */}
            {
              episodeId 
              ?
              <Link to={`${pathname}/${episodeId}`}>
                  {lastEpisode && <p>{lastEpisode}</p>}
              </Link>
              :
              <Link to={`${pathname}`}>
                  {lastEpisode && <p>{lastEpisode}</p>}
              </Link>
            }
            <strong>{name}</strong>
        </S.AnimeCardWrapper>
    )
}