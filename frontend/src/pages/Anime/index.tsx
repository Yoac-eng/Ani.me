import AnimeInfo from '../../components/AnimeInfo'
import Episode from '../../components/Episode'
import * as S from './styles'
import { Comments } from '../../components/Comments'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import api from '../../services/Api'
import { useState } from 'react'
import SeeMoreButton from '../../components/SeeMoreButton'
import { Loading } from '../../components/Loading'

type AnimeData = {
  data: {
    mal_id: number
    images: {
      jpg: {
        large_image_url: string
      }
    }
    trailer: {
      youtube_id: string
      images: {
        medium_image_url: string
      }
    }
    title: string
    type: string
    synopsis: string
    episodes: number
    studios: {
      name: string
    }[]
    genres: {
      mal_id: number
      name: string
    }[]
  }
}

type EpisodeListData = {
  data: {
    mal_id: number
    title: string
  }[]
}

export default function Anime() {
  const { animeId } = useParams()

  const [smallerSlice, setSmallerSlice] = useState(true)
  const [seeMoreButtonStatus, setSeeMoreButtonStatus] = useState(false)

  function toggleSliceSize() {
    setSmallerSlice((prevState) => !prevState)
    setSeeMoreButtonStatus((prevState) => !prevState)
  }

  // Anime request
  const { data: anime, isLoading: animeDataIsLoading } = useQuery<AnimeData>(
    ['animeData', animeId],
    async () => {
      if (animeId === 'random') {
        const response = await api.get(`random/anime`)
        return response.data
      } else {
        const response = await api.get(`anime/${animeId}`)
        return response.data
      }
    },
    {
      refetchOnWindowFocus: false,
    },
  )
  const animeData = anime?.data

  // Episodes request
  const { data: episodes } = useQuery<EpisodeListData>(
    ['episodesList', animeId],
    async () => {
      if (animeId !== 'random') {
        const response = await api.get(`anime/${animeId}/episodes`)

        return response.data
      }
    },
  )
  const episodesList = episodes?.data

  return (
    <S.AnimeWrapper>
      {animeDataIsLoading ? (
        <Loading />
      ) : (
        <>
          <S.AnimeBanner>
            <img
              id="bg-image"
              src={animeData?.images?.jpg.large_image_url}
              alt=""
            />
            <img
              id="main-image"
              src={animeData?.images?.jpg.large_image_url}
              alt=""
            />
          </S.AnimeBanner>
          <AnimeInfo
            anime={{
              name: animeData?.title,
              videos: animeData?.episodes,
              type: animeData?.type,
              studios: animeData?.studios,
              genres: animeData?.genres,
              synopsis: animeData?.synopsis,
              firstEpisodeLink: `/player/${animeData?.mal_id}/episodes/1`,
            }}
          />
        </>
      )}
      <S.EpisodesWrapper>
        {episodesList?.slice(0, smallerSlice ? 8 : 12).map((item) => (
          <Episode
            key={item.mal_id}
            episodeInfo={{
              animeId: animeData?.mal_id,
              animeName: animeData?.title,
              episodeName: item.title,
              episodeNumber: item.mal_id,
              episodeImageUrl: animeData?.trailer.images.medium_image_url,
              duration: 23,
              type: animeData?.type,
              commentaries: 6,
            }}
          />
        ))}
      </S.EpisodesWrapper>
      {episodesList?.length! >= 6 && (
        <SeeMoreButton
          onClick={toggleSliceSize}
          seeMoreButtonStatus={seeMoreButtonStatus}
        />
      )}
      <Comments />
    </S.AnimeWrapper>
  )
}
