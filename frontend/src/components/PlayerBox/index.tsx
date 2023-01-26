import * as S from './styles'
import { Player, Ui, Spinner, Poster, Youtube } from '@vime/react'
import { useEffect, useState } from 'react'
import { Loading } from '../Loading'
import { Link } from 'react-router-dom'

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
    animeImage?: string
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
      <div className="player-container">
        {/* thats actually the worst classname ever but its the one i got rn later ill change it */}
        <div className="player-animes-container">
          <div className="player">
            {anime.episodeTitle ? (
              <h1>
                {anime.name} - Episódio {anime.episode} - {anime.episodeTitle}
              </h1>
            ) : (
              <h1>
                {anime.name} - Episódio {anime.episode}
              </h1>
            )}
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
          {/* This container will basically be mocked data because the api wont return data the way that i want for this case */}
          <div className="animeCardContainer">
            <label>Mais assistidos</label>
            <Link className="animeHorizontalCard" to={`/anime/1735`}>
              <img
                src="https://cdn.myanimelist.net/images/anime/1565/111305l.jpg"
                alt=""
              />
              <div className="cardInfos">
                <p>Naruto: Shippuuden</p>
                <span>2007</span>
              </div>
            </Link>
            <Link className="animeHorizontalCard" to={`/anime/21`}>
              <img
                src="https://cdn.myanimelist.net/images/anime/6/73245l.jpg"
                alt=""
              />
              <div className="cardInfos">
                <p>One Piece</p>
                <span>1999</span>
              </div>
            </Link>
            <Link className="animeHorizontalCard" to={`/anime/48583`}>
              <img
                src="https://cdn.myanimelist.net/images/anime/1948/120625l.jpg"
                alt=""
              />
              <div className="cardInfos">
                <p>Shingeki No Kyojin</p>
                <span>2013</span>
              </div>
            </Link>
            <Link className="animeHorizontalCard" to={`/anime/136`}>
              <img
                src="https://cdn.myanimelist.net/images/anime/1305/132237l.jpg"
                alt=""
              />
              <div className="cardInfos">
                <p>Hunter x Hunter</p>
                <span>1999</span>
              </div>
            </Link>
          </div>
        </div>
        {/* Container created to style image that will be showed on larger screens */}
        <div className="desc-container">
          <img src={anime.animeImage} alt="" />
          <div className="desc">
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
                  <span className="desc-item">Gênero:</span>{' '}
                  {genres?.join(', ')}
                </li>
              )}
            </ul>
            <p>
              {handleViewMore ? (
                <>
                  {anime.synopsis}
                  <span className="viewMore-link" onClick={toggleViewMore}>
                    {' '}
                    View less
                  </span>
                </>
              ) : anime?.synopsis?.length! > 350 ? (
                <>
                  {anime?.synopsis?.substring(0, 350) + ' [...]'}
                  <span className="viewMore-link" onClick={toggleViewMore}>
                    {' '}
                    View more
                  </span>
                </>
              ) : (
                <>{anime.synopsis}</>
              )}
            </p>
          </div>
        </div>
      </div>
    </S.PlayerBoxWrapper>
  )
}
