import { CaretLeft, CaretRight } from 'phosphor-react'
import { useTheme } from 'styled-components'
import * as S from './styles'

interface PaginationProps {
  currentPage?: number
  lastPage?: number
  hasNextPage?: boolean
  onFirstPage: () => void
  onLastPage: () => void
  onPreviousPage: () => void
  onNextPage: () => void
}

interface ThemeType {
  iconColor: string
}

export default function Pagination({
  currentPage,
  lastPage,
  hasNextPage,
  onFirstPage,
  onLastPage,
  onPreviousPage,
  onNextPage,
}: PaginationProps) {
  // Get theme from theme provider
  const theme = useTheme() as ThemeType

  return (
    <S.PaginationWrapper>
      <li>
        <button onClick={onPreviousPage}>
          <CaretLeft size={24} color={`${theme.iconColor}`} />
        </button>
      </li>

      {/* show an option to go back to page 1 since we r on the third page */}
      {currentPage! > 2 && (
        <>
          <li onClick={onFirstPage}>1</li>
          <span>...</span>
        </>
      )}

      {/* Previous page if we have one */}
      {currentPage! > 1 && <li onClick={onPreviousPage}>{currentPage! - 1}</li>}

      <li className="current-page">{currentPage}</li>

      {/* next page if we have one */}
      {hasNextPage && <li onClick={onNextPage}>{currentPage! + 1}</li>}

      {/* check if we r not on the last page */}
      {currentPage !== lastPage && (
        <>
          <span>...</span>
          <li onClick={onLastPage}>{lastPage}</li>
        </>
      )}
      <li>
        <button onClick={onNextPage}>
          <CaretRight size={24} color={`${theme.iconColor}`} />
        </button>
      </li>
    </S.PaginationWrapper>
  )
}
