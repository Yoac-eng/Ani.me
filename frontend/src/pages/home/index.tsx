import { Link } from 'react-router-dom'
import AlphabetMenu from '../../components/AlphabetMenu'
import { AnimeCard } from '../../components/AnimeCard'
import { useQuery } from 'react-query'
import * as S from './styles'
import api from '../../services/Api'

type NewSeasonsData = {
  data:
    {
      trailer:{
        images:{
          large_image_url:string;
        }
      }
      title: string;
      synopsis: string;
    }[]
}

type NewEpisodeData = {
  data: 
    {
    entry:{
      mal_id: number;
      images:{
        jpg:{
          large_image_url: string;
        }
      }
      title: string;
    }
    episodes:{
      mal_id: number;
      title: string;
    }[]
  }[]
}

type PopularAnimeData = {
  data:
    {
      images:{
        jpg:{
          large_image_url: string;
        }
      }
      title: string;
    }[]
}

export default function HomePage() {
  
  //Getting new Anime season data
  const { data: anime } = useQuery<NewSeasonsData>('animeSeasonsData', async () =>{
    const response = await api.get('seasons/upcoming')

    return response.data;
  })
  const animeNewSeason = anime?.data[0];

  //Getting new Episodes data
  const { data: recentEpisodes } = useQuery<NewEpisodeData>('newEpisodeData', async () => {
    const response = await api.get('watch/episodes')

    return response.data
  })
  const episodesDataList = recentEpisodes?.data;

  //Getting Animes by popularity
  const { data: popularAnimes } = useQuery<PopularAnimeData>('popularAnimeData',async () => {
    const response = await api.get('top/anime?filter=bypopularity')

    return response.data
  })
  const popularAnimesList =  popularAnimes?.data;

  return (
    <S.HomeWrapper>
      <AlphabetMenu />
      <S.HomeMain trailerBackgroundImage={animeNewSeason?.trailer.images.large_image_url}>
        <header>
          <strong className="title">Últimas novidades</strong>
          <p>O que você vai assistir hoje?</p>
        </header>
        <Link to="#">
          <div>
            <strong>{animeNewSeason?.title} TERÁ NOVA TEMPORADA</strong>
            <p>
              {animeNewSeason?.synopsis.substring(0, 250)}[...]
            </p>
          </div>
        </Link>
      </S.HomeMain>
      <S.LastUpdates>
        <strong className="title">Últimas atualizações</strong>
        <div className='grid'>
          {
            episodesDataList?.slice(0, 6).map((item) => (
              <AnimeCard 
                name={item.entry.title} 
                lastEpisode={item.episodes[0].title} 
                image={item.entry.images.jpg.large_image_url}
                hrefString={`/player/${item.entry.mal_id}/episodes/${item.episodes[0].mal_id}`}
              />
            ))
          }
        </div>
        <Link to="/" className="button">
          Ver mais
        </Link>
      </S.LastUpdates>
      <S.Recent>
        <strong className="title">Animes mais populares</strong>
        <div className='grid'>
          {
            popularAnimesList?.slice(0, 6).map((item) => (
              <AnimeCard 
                name={item.title} 
                image={item.images.jpg.large_image_url}
                hrefString={'/anime'}
                //hrefString={'/anime/${item.mal_id}'}
              />
            ))
          }
        </div>
      </S.Recent>
    </S.HomeWrapper>
  )
}