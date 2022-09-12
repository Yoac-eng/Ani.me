import { Comments } from "../../components/Comments"
import { PlayerBox } from "../../components/PlayerBox"
import * as S from "./styles"

export default function PlayerPage() {
    return (
        <S.PlayerPageWrapper>
            <PlayerBox anime={{
                name: "Darling in the franxx",
                studio: "Trigger",
                genders: ["Drama", "Ficcao", "Romance"],
                synopsis: "Meu nome é Sasuke Uchiha.Eu odeio um monte de coisas. O que eu tenho não é um sonho,porque eu vou torná-lo uma realidade. Vou restaurar meu clã, e matar um certo alguém."
            }} />
            <Comments/>
        </S.PlayerPageWrapper>
    )
}