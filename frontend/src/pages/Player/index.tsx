import * as S from './styles'
import { AnimeCard } from '../../components/AnimeCard'
import { Comments } from '../../components/Comments'
import { PlayerBox } from '../../components/PlayerBox'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import api from '../../services/Api'
import { useEffect, useState } from 'react'

type AnimeData = {
  data: {
    // mal_id:number;
    trailer: {
      youtube_id: string
      images: {
        large_image_url: string
      }
    }
    title: string
    synopsis: string
    studios: {
      name: string
    }[]
    genres: {
      mal_id: number
      name: string
    }[]
  }
}

type EpisodeData = {
  data: {
    title: string
    duration: number
    synopsis: string
  }
}

type AnimeByGenresData = {
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

export default function PlayerPage() {
  const { animeId, episodeId } = useParams()
  // State to store the related animes data, not the whole object
  const [relatedAnimes, setRelatedAnimes] = useState<AnimeByGenresData>()

  // Anime request
  const { data: anime } = useQuery<AnimeData>('animeData', async () => {
    const response = await api.get(`anime/${animeId}`)

    return response.data
  })
  const animeData = anime?.data

  // Episode by id request
  const { data: episode } = useQuery<EpisodeData>('episodeData', async () => {
    const response = await api.get(`anime/${animeId}/episodes/${episodeId}`)

    return response.data
  })
  const episodeData = episode?.data
  const episodeDuration = Math.floor(episodeData?.duration! / 60)

  // Getting the query params to the search
  const genresIdsArray = animeData?.genres.map((item) => {
    // Creating an array with the genresIds
    return item.mal_id
  })
  const genresIdsString =
    genresIdsArray?.length! > 0 ? String(genresIdsArray) : undefined

  // Animes search by genres
  useEffect(() => {
    if (genresIdsString) {
      async function request() {
        const response = await api.get(`anime?genres=${genresIdsString}`)
        setRelatedAnimes(response.data)
      }
      request()
    }
  }, [genresIdsString])
  const relatedAnimeData = relatedAnimes?.data

  return (
    <S.PlayerWrapper>
      <PlayerBox
        anime={{
          name: animeData?.title,
          studios: animeData?.studios,
          genres: animeData?.genres,
          synopsis: episodeData?.synopsis
            ? episodeData?.synopsis
            : animeData?.synopsis,
          episode: episodeId,
          episodeTitle: episodeData?.title,
          episodeDuration,
          episodeTrailerYTid: animeData?.trailer.youtube_id,
        }}
      />
      <Comments />
      <S.Related>
        {relatedAnimeData?.length! > 0 && (
          <>
            <strong>Relacionados</strong>
            <div className="grid">
              {relatedAnimeData?.slice(0, 6).map((item) => (
                <AnimeCard
                  key={item.mal_id}
                  name={item.title}
                  image={item.images.jpg.large_image_url}
                  hrefString={`/anime/${item.mal_id}`}
                />
              ))}
            </div>
          </>
        )}
      </S.Related>
    </S.PlayerWrapper>
  )
}
