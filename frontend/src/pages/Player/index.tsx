import * as S from "./styles"
import { AnimeCard } from "../../components/AnimeCard"
import { Comments } from "../../components/Comments"
import { PlayerBox } from "../../components/PlayerBox"

import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import api from "../../services/Api";

type EpisodeData = {
    data:
      {
        // mal_id:number;
        trailer:{
          embed_url: string
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
  
export default function PlayerPage() {    
    const { id } = useParams();

    const { data: episode } = useQuery<EpisodeData>('episodeData', async () =>{
        const response = await api.get(`anime/${id}`)
    
        return response.data;
    })
    const episodeData = episode?.data;
    
    return (
      <S.PlayerWrapper>
          <PlayerBox anime={{
              name: episodeData?.title,
              studios: episodeData?.studios,
              genres: episodeData?.genres,
              synopsis: episodeData?.synopsis,
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