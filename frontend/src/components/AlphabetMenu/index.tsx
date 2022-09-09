
import * as S from './styles'

export default function AlphabetMenu() {

  const Alphabet = ["A","B","C","D","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  return (
    <S.ScrollMenu>
      <a className="scroll-element showall-element" href="">Todos</a>
      {Alphabet.map((item) => (
      <a className="scroll-element" href="">{item}</a>
      ))}
    </S.ScrollMenu>
    )
}