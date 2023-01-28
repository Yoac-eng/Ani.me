import { Link, useSearchParams } from 'react-router-dom'
import * as S from './styles'

export default function AlphabetMenu() {
  const Alphabet = [
    'A',
    'B',
    'C',
    'D',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ]

  const [searchParams, setSearchParams] = useSearchParams() //
  const letterSearchParam = searchParams.get('letter') || ''

  return (
    <S.ScrollMenu>
      <Link className="scroll-element showall-element" to={`/search?page=${1}`}>
        Todos
      </Link>
      {Alphabet.map((item) => (
        <Link
          key={item}
          className={`${
            item === letterSearchParam.toUpperCase() ? 'highlighted' : ''
          } scroll-element`}
          to={`/search?letter=${item.toLowerCase()}&page=${1}`}
        >
          {item}
        </Link>
      ))}
    </S.ScrollMenu>
  )
}
