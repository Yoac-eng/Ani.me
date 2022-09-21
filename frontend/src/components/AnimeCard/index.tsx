import * as S from './styles'

interface AnimeCardProps {
    name: string
    lastEpisode?: string
    image: string
}

export function AnimeCard({ name, lastEpisode, image }: AnimeCardProps) {
    return (
        <S.AnimeCardWrapper backgroundImage={image}>
            {/* Decidir se troco isso pra link ou não */}
            <a href="/player">
                {lastEpisode && <p>{lastEpisode}</p>}
            </a>
            <strong>{name}</strong>
        </S.AnimeCardWrapper>
    )
}