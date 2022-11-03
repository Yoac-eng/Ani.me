import { useQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom'
import AlphabetMenu from '../../components/AlphabetMenu'
import { AnimeCard } from '../../components/AnimeCard'
import ReactLoading from 'react-loading'
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
  const { data: animeSearchByFirstLetter, isLoading } = useQuery<AnimeSearch>(
    // Using searchParam as the id for the request
    // Every time it changes it will do another request
    ['animeSearchByFirstLetter', searchParam],
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
        {isLoading ? (
          <ReactLoading type={'spin'} color={'#00A3FF'} />
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
