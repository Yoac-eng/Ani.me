import { Link } from 'react-router-dom'
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

  return (
    <S.ScrollMenu>
      <Link className="scroll-element showall-element" to="/">
        Todos
      </Link>
      {Alphabet.map((item) => (
        <Link key={item} className="scroll-element" to="/">
          {item}
        </Link>
      ))}
    </S.ScrollMenu>
  )
}
