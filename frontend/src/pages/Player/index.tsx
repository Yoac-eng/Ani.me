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
        trailer:{
          embed_url: string
          images:{
            large_image_url:string;
          }
        }
        title: string;
        synopsis: string;
        //adicionar o resto
      }[]
  }
  
export default function PlayerPage() {    
    const { id } = useParams();

    const { data: episode } = useQuery<EpisodeData>('episodeData', async () =>{
        const response = await api.get(`anime/${id}`)
    
        return response.data;
    })
    const episodeData = episode?.data;
    console.log(episodeData)
    
    return (
        <S.PlayerWrapper>
            <PlayerBox anime={{
                name: "Darling in the franxx",
                studio: "Trigger",
                genders: ["Drama", "Ficcao", "Romance"],
                synopsis: "Meu nome é Sasuke Uchiha.Eu odeio um monte de coisas. O que eu tenho não é um sonho,porque eu vou torná-lo uma realidade. Vou restaurar meu clã, e matar um certo alguém."
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