import { Play } from 'phosphor-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import * as S from './styles'

interface AnimeInfoProps {
  anime: {
    name?: string
    videos?: number
    type?: string
    studios?: {
      name: string
    }[]
    genres?: {
      name: string
    }[]
    synopsis?: string
    firstEpisodeLink?: string
  }
}

export default function AnimeInfo({ anime }: AnimeInfoProps) {
  // state and function do handle view more actions
  const [handleViewMore, setHandleViewMore] = useState(false)
  function toggleViewMore() {
    setHandleViewMore((prevState) => !prevState)
  }

  // making an new array with the names of the studios
  const studios = anime?.studios?.map((item) => {
    return item.name
  })

  // making an new array with the names of the genres
  const genres = anime?.genres?.map((item) => {
    return item.name
  })

  return (
    <S.AnimeInfoWrapper>
      <h1>{anime.name}</h1>
      <span>
        {anime.videos} Vídeos ◽ {anime.type}
      </span>
      <div className="desc-wrapper">
        <div className="desc">
          <ul>
            {studios?.length! > 0 && (
              <li>
                <span className="desc-item">{'Estúdio(s):'}</span>{' '}
                {studios?.join(',')}
              </li>
            )}
            {genres?.length! > 0 && (
              <li>
                <span className="desc-item">Gênero:</span> {genres?.join(', ')}
              </li>
            )}
          </ul>
          <Link to={anime.firstEpisodeLink!} className="button">
            <Play size={20} color="#ffffff" /> COMEÇAR A ASSISTIR S1 E1
          </Link>
          <p>
            {handleViewMore ? (
              <>
                {anime.synopsis}
                <span onClick={toggleViewMore}> View less</span>
              </>
            ) : anime?.synopsis?.length! > 350 ? (
              <>
                {anime?.synopsis?.substring(0, 350) + ' [...]'}
                <span onClick={toggleViewMore}> View more</span>
              </>
            ) : (
              <>{anime.synopsis}</>
            )}
          </p>
        </div>
        <div className="desc-firstEpisode">
          <Link to={anime.firstEpisodeLink!} className="button">
            <Play size={20} color="#ffffff" /> COMEÇAR A ASSISTIR S1 E1
          </Link>
        </div>
      </div>
    </S.AnimeInfoWrapper>
  )
}
