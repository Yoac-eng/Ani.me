import * as S from './styles'

interface AnimeCardProps {
    name: string
    lastEpisode?: number
}

export function AnimeCard({ name, lastEpisode }: AnimeCardProps) {
    return (
        <S.AnimeCardWrapper>
            {/* Decidir se troco isso pra link ou não */}
            <a href="/player">
                {lastEpisode && <p>Episódio {lastEpisode}</p>}
            </a>
            <strong>{name}</strong>
        </S.AnimeCardWrapper>
    )
}