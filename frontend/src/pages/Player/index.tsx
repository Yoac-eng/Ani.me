import { AnimeCard } from "../../components/AnimeCard"
import { Comments } from "../../components/Comments"
import { PlayerBox } from "../../components/PlayerBox"
import * as S from "./styles"

export default function PlayerPage() {
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
                            <AnimeCard name={'Hunter x Hunter'} />
                        ))
                    }
                </div>
            </S.Related>
        </S.PlayerWrapper>
    )
}