import * as S from './styles'

interface AnimeCardProps {
    name: string
    lastEpisode?: string
    image?: string
    // pathname: string
    // animeId?: number
    // episodeId?: number
    hrefString?: string
}

export function AnimeCard({ name, lastEpisode, image, hrefString}: AnimeCardProps) {
    return (
        <S.AnimeCardWrapper backgroundImage={image}>
          <a href={hrefString}>
              {lastEpisode && <p>{lastEpisode}</p>}
          </a>
          <strong>{name}</strong>
        </S.AnimeCardWrapper>
    )
}