import * as S from "./styles"
import { AnimeCard } from "../../components/AnimeCard"
import { Comments } from "../../components/Comments"
import { PlayerBox } from "../../components/PlayerBox"

import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import api from "../../services/Api";

type AnimeData = {
    data:
      {
        // mal_id:number;
        trailer:{
          youtube_id: string;
          images:{
            large_image_url:string;
          }
        }
        title: string;
        synopsis: string;
        studios: {
          name:string;
        }[]
        genres: {
          mal_id:number;
          name:string;
        }[]
        //adicionar o resto
      }
  }

type EpisodeData = {
    data:
      {
        title: string;
        duration: number;
        synopsis: string;
      }
}

type AnimeByGenresData = {
    data:
      {
        mal_id: number;
      }[]
}
  
export default function PlayerPage() {    
    const { animeId, episodeId } = useParams();

    //Anime request
    const { data: anime } = useQuery<AnimeData>('animeData', async () =>{
        const response = await api.get(`anime/${animeId}`)
    
        return response.data;
    })
    const animeData = anime?.data;

    //Episode request
    const { data: episode } = useQuery<EpisodeData>('episodeData', async () =>{
        const response = await api.get(`anime/${animeId}/episodes/${episodeId}`)
    
        return response.data;
    })
    const episodeData = episode?.data;
    const episodeDuration = Math.floor(episodeData?.duration! / 60);

    
    //Getting the query params to the search
    const genresIdsArray = animeData?.genres.map((item) => {
      //Creating an array with the genresIds
      return item.mal_id;
    })
    const genresIdsString = String(genresIdsArray);

    //Animes search by genres
    const { data: animesByGenres } = useQuery<AnimeByGenresData>('animesByGenresData', async () => {
        const response = await api.get(`anime?genres=${genresIdsString}`)

        return response.data;
    })
    console.log(animesByGenres);
    

    
    return (
      <S.PlayerWrapper>
          <PlayerBox anime={{
              name: animeData?.title,
              studios: animeData?.studios,
              genres: animeData?.genres,
              synopsis: episodeData?.synopsis ? episodeData?.synopsis : animeData?.synopsis,
              episode: episodeId,
              episodeTitle: episodeData?.title,
              episodeDuration: episodeDuration,
              episodeTrailerYTid: animeData?.trailer.youtube_id,
          }} />
          <Comments/>
          <S.Related>
              <strong>Relacionados</strong>
              <div className='grid'>
                  {
                      [1, 2, 3, 4, 5, 6].slice(0, 6).map((item) => (
                          <AnimeCard 
                            name={'Hunter x Hunter'} 
                            pathname={'/anime'}
                          />
                      ))
                  }
              </div>
          </S.Related>
      </S.PlayerWrapper>
  )
}