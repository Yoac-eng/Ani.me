import { ChatText, Play } from 'phosphor-react'
import * as S from './styles'

interface EpisodeProps {
  episodeInfo: {
    name: string
    episode: string
    season: number
    episodeNumber: number
    duration: number
    version: string
    commentaries: number
  }
}

export default function Episode({ episodeInfo }: EpisodeProps) {
  return (
    <S.EpisodeWrapper>
      <a id="episode-banner" href="/">
        <Play to="/" size={24} />
        <div id="episode-duration">{episodeInfo.duration}m</div>
      </a>
      <div className="container">
        <a id="anime-name">
          <span>{episodeInfo.name}</span>
        </a>
        <a href="/">
          S{episodeInfo.season} E{episodeInfo.episodeNumber} -{' '}
          {episodeInfo.episode}
        </a>
        <div className="minor-container">
          <span>{episodeInfo.version}</span>
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
