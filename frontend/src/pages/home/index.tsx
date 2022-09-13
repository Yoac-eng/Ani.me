import { Link } from 'react-router-dom'
import AlphabetMenu from '../../components/AlphabetMenu'
import { AnimeCard } from '../../components/AnimeCard'
import * as S from './styles'

export default function HomePage() {
    return (
        <>
            <AlphabetMenu />
            <S.HomeMain>
                <header>
                    <strong className="title">Últimas novidades</strong>
                    <p>O que você vai assistir hoje?</p>
                </header>
                <Link to="#">
                    <div>
                        <strong>ONE PUNCH MAN TERÁ 3 TEMPORADA</strong>
                        <p>Como relatado anteriormente, a franquia baseada no mangá escrito por ONE e ilustrado por Yusuke Murata, One Punch […]</p>
                    </div>
                </Link>
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
                <Link to="/" className="button">
                    Ver mais
                </Link>
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
        </>
    )
}