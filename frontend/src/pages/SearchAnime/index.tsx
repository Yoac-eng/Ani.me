import { useQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom'
import AlphabetMenu from '../../components/AlphabetMenu'
import { AnimeCard } from '../../components/AnimeCard'
import api from '../../services/Api'
import * as S from './styles'
import { Question } from 'phosphor-react'
import { Loading } from '../../components/Loading'

type AnimeSearch = {
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

export default function SearchAnime() {
  const [searchParams, setSearchParams] = useSearchParams()//eslint-disable-line
  const letterSearchParam = searchParams.get('letter') || ''
  const stringSearchParam = searchParams.get('q') || ''

  // Anime request
  const { data: animeSearchByFirstLetter, isLoading } = useQuery<AnimeSearch>(
    // Using letterSearchParam and stringSearchParam as the id for the request
    // Every time it changes it will do another request
    ['animeSearchByFirstLetter', [letterSearchParam, stringSearchParam]],

    async () => {
      if (stringSearchParam !== '') {
        const byStringSearchResponse = await api.get(
          `anime?q=${stringSearchParam}&order_by=popularity`,
        )
        return byStringSearchResponse.data
      } else {
        const byLetterSearchResponse = await api.get(
          `anime?letter=${letterSearchParam}`,
        )
        return byLetterSearchResponse.data
      }
    },
  )
  const animeData = animeSearchByFirstLetter?.data

  return (
    <S.SearchAnimeWrapper>
      <AlphabetMenu />
      <S.SearchResultsWrapper>
        <strong className="title">Resultados da busca: </strong>
        {isLoading ? (
          <Loading />
        ) : animeData?.length === 0 ? (
          <div className="not-found-container">
            <Question size={32} color="#ffffff" />
            <strong className="not-found-message">Sem resultados</strong>
          </div>
        ) : (
          <div className="grid">
            {animeData?.slice(0, 12).map((item) => (
              <AnimeCard
                key={item.title}
                name={item.title}
                image={item.images.jpg.large_image_url}
                hrefString={`/anime/${item.mal_id}`}
              />
            ))}
          </div>
        )}
      </S.SearchResultsWrapper>
    </S.SearchAnimeWrapper>
  )
}
