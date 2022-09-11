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
                synopsis: "lorem ipsum dolor sit amet, consectetur adipiscing"
            }} />
        </S.PlayerPageWrapper>
    )
}