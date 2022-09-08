import { Player } from "../../components/Player"
import * as S from "./styles"

export default function PlayerPage() {
    return (
        <S.PlayerPageWrapper>
            <Player anime={{
                name: "Darling in the franxx",
                studio: "Trigger",
                genders: ["Drama", "Ficcao", "Romance"],
                synopsis: "lorem ipsum dolor sit amet, consectetur adipiscing"
            }} />
        </S.PlayerPageWrapper>
    )
}