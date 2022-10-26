import { ChatText, Play } from 'phosphor-react'
import * as S from './styles'

interface EpisodeProps {
  episodeInfo: {
    animeId?: number
    animeName?: string
    episodeName?: string
    episodeNumber?: number
    episodeImageUrl?: string
    duration: number
    type?: string
    commentaries: number
  }
}

export default function Episode({ episodeInfo }: EpisodeProps) {
  return (
    <S.EpisodeWrapper>
      <a
        id="episode-banner"
        href={`/player/${episodeInfo.animeId}/episodes/${episodeInfo.episodeNumber}`}
      >
        <Play to="/" size={24} />
        <div id="episode-duration">{episodeInfo.duration}m</div>
      </a>
      <div className="container">
        <a id="anime-name">
          <span>{episodeInfo.animeName}</span>
        </a>
        <a href="/" id="episode-name">
          E{episodeInfo.episodeNumber} - {episodeInfo.episodeName}
        </a>
        <div className="minor-container">
          <span>{episodeInfo.type}</span>
          <a href="/">
            <span>
              {episodeInfo.commentaries} <ChatText size={14} />
            </span>
          </a>
        </div>
      </div>
    </S.EpisodeWrapper>
  )
}
