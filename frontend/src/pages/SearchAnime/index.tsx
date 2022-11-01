import { useQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom'
import AlphabetMenu from '../../components/AlphabetMenu'
import { AnimeCard } from '../../components/AnimeCard'
import api from '../../services/Api'
import * as S from './styles'

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
  const searchParam = searchParams.get('letter') || ''

  // Anime request
  const { data: animeSearchByFirstLetter } = useQuery<AnimeSearch>(
    'animeSearchByFirstLetter',
    async () => {
      const response = await api.get(`anime?letter=${searchParam}`)

      return response.data
    },
  )
  const animeData = animeSearchByFirstLetter?.data

  return (
    <S.SearchAnimeWrapper>
      <AlphabetMenu />
      <S.SearchResultsWrapper>
        <strong className="title">Resultados da busca: </strong>
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
      </S.SearchResultsWrapper>
    </S.SearchAnimeWrapper>
  )
}
