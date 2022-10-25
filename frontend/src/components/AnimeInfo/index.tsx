import { Play } from 'phosphor-react'
import { Link } from 'react-router-dom'
import * as S from './styles'

interface AnimeInfoProps {
  anime: {
    name: string
    videos: number
    version: string
    studio: string
    genders: Array<string>
    synopsis: string
  }
}

export default function AnimeInfo({ anime }: AnimeInfoProps) {
  return (
    <S.AnimeInfoWrapper>
      <h1>{anime.name}</h1>
      <span>
        {anime.videos} Vídeos ◽ {anime.version}
      </span>
      <div className="desc">
        <ul>
          <li>
            <span className="desc-item">Estúdio:</span> {anime.studio}
          </li>
          <li>
            <span className="desc-item">Gênero:</span>{' '}
            {anime.genders.join(', ')}
          </li>
        </ul>
        <Link to="/" className="button">
          <Play size={20} color="#ffffff" /> COMEÇAR A ASSISTIR S1 E1
        </Link>
        <p>
          <span className="desc-item">Sinopse:</span>
          {anime.synopsis}
        </p>
      </div>
    </S.AnimeInfoWrapper>
  )
}
