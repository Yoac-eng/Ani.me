import { useQuery } from 'react-query'
import { useNavigate, useSearchParams } from 'react-router-dom'
import AlphabetMenu from '../../components/AlphabetMenu'
import { AnimeCard } from '../../components/AnimeCard'
import api from '../../services/Api'
import * as S from './styles'
import { Question } from 'phosphor-react'
import { Loading } from '../../components/Loading'
import { useEffect, useState } from 'react'
import Pagination from '../../components/Pagination'

type AnimeSearch = {
  pagination: {
    last_visible_page: number
    has_next_page: boolean
    current_page: number
    items: {
      count: number
      total: number
      per_page: number
    }
  }
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
  const navigate = useNavigate()

  const [searchParams, setSearchParams] = useSearchParams()//eslint-disable-line
  const [currentPage, setCurrentPage] = useState(1)
  const letterSearchParam = searchParams.get('letter') || ''
  const stringSearchParam = searchParams.get('q') || ''
  const pagesSearchParam = searchParams.get('page') || ''

  useEffect(() => {
    setCurrentPage(parseInt(pagesSearchParam))
  }, [pagesSearchParam])

  // Anime request
  const { data: animeSearchByFirstLetterOrString, isLoading } =
    useQuery<AnimeSearch>(
      // Using letterSearchParam and stringSearchParam as the id for the request
      // Every time it changes it will do another request
      [
        'animeSearchByFirstLetterOrString',
        [letterSearchParam, stringSearchParam, currentPage],
      ],

      async () => {
        if (stringSearchParam !== '') {
          const byStringSearchResponse = await api.get(
            `anime?q=${stringSearchParam}&order_by=popularity&page=${pagesSearchParam}`,
          )
          return byStringSearchResponse.data
        } else {
          const byLetterSearchResponse = await api.get(
            `anime?letter=${letterSearchParam}&page=${pagesSearchParam}`,
          )
          return byLetterSearchResponse.data
        }
      },
    )
  const animeData = animeSearchByFirstLetterOrString?.data
  const animePagination = animeSearchByFirstLetterOrString?.pagination

  function handleNextPage() {
    if (animePagination?.has_next_page) {
      handlePageNavigate(currentPage + 1)
    }
  }

  function handlePreviousPage() {
    if (currentPage > 1) {
      handlePageNavigate(currentPage - 1)
    }
  }

  function handleLastPage() {
    handlePageNavigate(animePagination?.last_visible_page!)
  }

  function handleFirstPage() {
    handlePageNavigate(1)
  }

  // Deal with which type of url should the buttons navigate to
  function handlePageNavigate(page: Number) {
    if (stringSearchParam !== '' && letterSearchParam === '') {
      navigate(`/search?q=${stringSearchParam}&page=${page}`)
    } else if (letterSearchParam !== '') {
      navigate(`/search?letter=${letterSearchParam}&page=${page}`)
    } else {
      navigate(`/search?page=${page}`)
    }
  }

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
            {animeData
              ?.slice(0, parseInt(`${animePagination?.items.count! - 1}`))
              .map((item) => (
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
      <Pagination
        currentPage={animePagination?.current_page}
        lastPage={animePagination?.last_visible_page}
        hasNextPage={animePagination?.has_next_page}
        onFirstPage={handleFirstPage}
        onLastPage={handleLastPage}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
      />
    </S.SearchAnimeWrapper>
  )
}
