import * as S from './styles'
import { Player, Ui, Spinner, Poster, Youtube } from '@vime/react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Loading } from '../Loading'

interface PlayerProps {
  anime: {
    name?: string
    studios?: {
      name: string
    }[]
    genres?: {
      name: string
    }[]
    synopsis?: string
    episode?: string
    episodeTitle?: string
    episodeDuration?: number
    episodeTrailerYTid?: string
  }
}

export function PlayerBox({ anime }: PlayerProps) {
  const [receivedTrailerId, setReceivedTrailerId] = useState(false)
  const [handleViewMore, setHandleViewMore] = useState(false)

  // making an new array with the names of the studios
  const studios = anime?.studios?.map((item) => {
    return item.name
  })
  // making an new array with the names of the genres
  const genres = anime?.genres?.map((item) => {
    return item.name
  })

  useEffect(() => {
    if (anime.episodeTrailerYTid) {
      setReceivedTrailerId(true)
    }
  }, [anime.episodeTrailerYTid])

  function toggleViewMore() {
    setHandleViewMore((prevState) => !prevState)
  }

  return (
    <S.PlayerBoxWrapper>
      <h1>{anime.name}</h1>
      <div className="player-container">
        <div className="player-video">
          <Player controls>
            {receivedTrailerId ? (
              <Youtube videoId={anime.episodeTrailerYTid!} />
            ) : (
              <Loading />
            )}
            <Ui>
              <Spinner />
              <Poster />
            </Ui>
          </Player>
        </div>
        <div className="desc">
          {anime.episodeTitle ? (
            <h1>
              E{anime.episode} - {anime.episodeTitle}
            </h1>
          ) : (
            <h1>Episódio - {anime.episode}</h1>
          )}
          <ul>
            {anime.episodeDuration ? (
              <li>
                <span className="desc-item">Duração:</span>
                {anime.episodeDuration + ' Min'}
              </li>
            ) : (
              ''
            )}
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
          <p>
            {handleViewMore ? (
              <>
                {anime.synopsis}
                <Link className="viewMore-link" to="#" onClick={toggleViewMore}>
                  {' '}
                  View less
                </Link>
              </>
            ) : anime?.synopsis?.length! > 350 ? (
              <>
                {anime?.synopsis?.substring(0, 350) + ' [...]'}
                <Link className="viewMore-link" to="#" onClick={toggleViewMore}>
                  {' '}
                  View more
                </Link>
              </>
            ) : (
              <>{anime.synopsis}</>
            )}
          </p>
        </div>
      </div>
    </S.PlayerBoxWrapper>
  )
}
