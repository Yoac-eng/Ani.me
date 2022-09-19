import AnimeInfo from '../../components/AnimeInfo'
import Episode from '../../components/Episode'
import * as S from './styles'

export default function Anime() {
    return (
        <S.AnimeWrapper>
          <S.AnimeBanner>
              <img id="bg-image" src="testando.jpg" alt="" />
              <img id="main-image" src="testando.jpg" alt="" />
          </S.AnimeBanner>
          <AnimeInfo anime={{
                name: "Darling in the franxx",
                videos: 87,
                version: "Dublado",
                studio: "Trigger",
                genders: ["Drama", "Ficcao", "Romance"],
                synopsis: "Meu nome é Sasuke Uchiha. Eu odeio um monte de coisas. O que eu tenho não é um sonho, porque eu vou torná-lo uma realidade. Vou restaurar meu clã, e matar um certo alguém."
            }} />       
          <Episode/>
        </S.AnimeWrapper>
    )
}