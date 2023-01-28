import { Link } from 'react-router-dom'
import * as S from './styles'

interface AnimeCardProps {
  name: string
  lastEpisode?: string
  image?: string
  hrefString?: string
}

export function AnimeCard({
  name,
  lastEpisode,
  image,
  hrefString,
}: AnimeCardProps) {
  return (
    <S.AnimeCardWrapper backgroundImage={image}>
      <Link to={hrefString!}>{lastEpisode && <p>{lastEpisode}</p>}</Link>
      <strong>{name}</strong>
    </S.AnimeCardWrapper>
  )
}
