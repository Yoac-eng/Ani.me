import * as S from './styles'
import pageNotFoundImage from '../../assets/pageNotFoundImage.png'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <S.NotFoundWrapper>
      <img src={pageNotFoundImage} alt="Anime Girl Confused Png, Transparent" />
      <div id="notfound-label">
        <h1>Algo está errado aqui.</h1>
        <p>
          Não conseguimos encontrar essa página, tente voltar à{' '}
          <Link className="page-link" to="/">
            Página Inicial
          </Link>
        </p>
      </div>
    </S.NotFoundWrapper>
  )
}
