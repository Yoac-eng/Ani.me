import * as S from "./styles"
import { AnimeCard } from "../../components/AnimeCard"
import { Comments } from "../../components/Comments"
import { PlayerBox } from "../../components/PlayerBox"

import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import api from "../../services/Api";
import { useEffect } from "react";

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
  
export default function PlayerPage() {    
    const { animeId, episodeId } = useParams();

    const { data: anime } = useQuery<AnimeData>('animeData', async () =>{
        const response = await api.get(`anime/${animeId}`)
    
        return response.data;
    })
    const animeData = anime?.data;

    const { data: episode } = useQuery<EpisodeData>('episodeData', async () =>{
        const response = await api.get(`anime/${animeId}/episodes/${episodeId}`)
    
        return response.data;
    })
    const episodeData = episode?.data;

    const episodeDuration = Math.floor(episodeData?.duration! / 60);
    
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