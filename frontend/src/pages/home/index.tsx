import { Link } from 'react-router-dom'
import AlphabetMenu from '../../components/AlphabetMenu'
import { AnimeCard } from '../../components/AnimeCard'
import { useQuery } from 'react-query'
import * as S from './styles'
import api from '../../services/Api'
import SeeMoreButton from '../../components/SeeMoreButton'
import { useState } from 'react'
import { Loading } from '../../components/Loading'

type NewSeasonsData = {
  data: {
    mal_id: number
    images: {
      jpg: {
        large_image_url: string
      }
    }
    trailer: {
      images: {
        large_image_url: string
      }
    }
    title: string
    synopsis: string
  }[]
}

type NewEpisodeData = {
  data: {
    entry: {
      mal_id: number
      images: {
        jpg: {
          large_image_url: string
        }
      }
      title: string
    }
    episodes: {
      mal_id: number
      title: string
    }[]
  }[]
}

type PopularAnimeData = {
  data: {
    mal_id: number
    images: {
      jpg: {
        large_image_url: string
      }
    }
    title: string
  }[]
}

export default function HomePage() {
  // States and functions to deal with the See more button
  const [smallerSlice, setSmallerSlice] = useState(true)
  const [seeMoreButtonStatus, setSeeMoreButtonStatus] = useState(false)

  function toggleSliceSize() {
    setSmallerSlice((prevState) => !prevState)
    setSeeMoreButtonStatus((prevState) => !prevState)
  }

  // Getting new Anime season data
  const { data: anime, isLoading: animeNewSeasonIsLoading } =
    useQuery<NewSeasonsData>('animeSeasonsData', async () => {
      const response = await api.get('seasons/upcoming')

      return response.data
    })
  const animeNewSeason = anime?.data[0]

  // Getting new Episodes data
  const { data: recentEpisodes, isLoading: recentEpisodesIsLoading } =
    useQuery<NewEpisodeData>('newEpisodeData', async () => {
      const response = await api.get('watch/episodes')

      return response.data
    })
  const episodesDataList = recentEpisodes?.data

  // Getting Animes by popularity
  const { data: popularAnimes, isLoading: popularAnimesIsLoading } =
    useQuery<PopularAnimeData>('popularAnimeData', async () => {
      const response = await api.get('top/anime?filter=bypopularity')

      return response.data
    })
  const popularAnimesList = popularAnimes?.data

  return (
    <S.HomeWrapper>
      <AlphabetMenu />
      <S.HomeMain
        trailerBackgroundImage={
          animeNewSeason?.trailer.images.large_image_url
            ? animeNewSeason?.trailer.images.large_image_url
            : animeNewSeason?.images.jpg.large_image_url
        }
      >
        <header>
          <strong className="title">Últimas novidades</strong>
          <p>O que você vai assistir hoje?</p>
        </header>
        {animeNewSeasonIsLoading ? (
          <Loading />
        ) : (
          <Link to={`/anime/${animeNewSeason?.mal_id}`}>
            <div>
              <strong>{animeNewSeason?.title} TERÁ NOVA TEMPORADA</strong>
              <p>{animeNewSeason?.synopsis.substring(0, 250)}[...]</p>
            </div>
          </Link>
        )}
      </S.HomeMain>
      <S.LastUpdates>
        <strong className="title">Últimas atualizações</strong>
        {recentEpisodesIsLoading ? (
          <Loading />
        ) : (
          <div className="grid">
            {episodesDataList?.slice(0, smallerSlice ? 6 : 12).map((item) => (
              <AnimeCard
                key={item.entry.title}
                name={item.entry.title}
                lastEpisode={item.episodes[0].title}
                image={item.entry.images.jpg.large_image_url}
                hrefString={`/player/${item.entry.mal_id}/episodes/${item.episodes[0].mal_id}`}
              />
            ))}
          </div>
        )}
        <SeeMoreButton
          onClick={toggleSliceSize}
          seeMoreButtonStatus={seeMoreButtonStatus}
        />
      </S.LastUpdates>
      <S.MostPopular>
        <strong className="title">Animes mais populares</strong>
        {popularAnimesIsLoading ? (
          <Loading />
        ) : (
          <div className="grid">
            {popularAnimesList?.slice(0, 6).map((item) => (
              <AnimeCard
                key={item.title}
                name={item.title}
                image={item.images.jpg.large_image_url}
                hrefString={`/anime/${item.mal_id}`}
              />
            ))}
          </div>
        )}
      </S.MostPopular>
    </S.HomeWrapper>
  )
}
