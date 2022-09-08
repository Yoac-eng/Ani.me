import { AnimeCard } from '../../components/AnimeCard'
import * as S from './styles'

export default function HomePage() {
    return (
        <>
            <S.HomeMain>
                <header>
                    <strong className="title">Últimas novidades</strong>
                    <p>O que você vai assistir hoje?</p>
                </header>
                <a href="#">
                    <div>
                        <strong>ONE PUNCH MAN TERÁ 3 TEMPORADA</strong>
                        <p>Como relatado anteriormente, a franquia baseada no mangá escrito por ONE e ilustrado por Yusuke Murata, One Punch […]</p>
                    </div>
                </a>
            </S.HomeMain>
            <S.LastUpdates>
                <strong className="title">Últimas atualizações</strong>
                <div className='grid'>
                    {
                        [1, 2, 3, 4, 5, 6].slice(0, 6).map((item) => (
                            <AnimeCard name={'JOJO'} lastEpisode={24} />
                        ))
                    }
                </div>
                <a href="#" className="button">
                    Ver mais
                </a>
            </S.LastUpdates>
            <S.Recent>
                <strong className="title">Animes recentes</strong>
                <div className='grid'>
                    {
                        [1, 2, 3, 4, 5, 6].slice(0, 6).map((item) => (
                            <AnimeCard name={'One Piece'} />
                        ))
                    }
                </div>
            </S.Recent>
            <S.Footer>
                Todos os direitos reservados aos criadores
                e produtores dos animes
            </S.Footer>
        </>
    )
}