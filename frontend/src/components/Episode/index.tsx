import { ChatText, Play } from 'phosphor-react'
import { Link } from 'react-router-dom'
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
    <S.EpisodeWrapper
      episodeImageUrl={
        episodeInfo.episodeImageUrl!
          ? episodeInfo.episodeImageUrl!
          : '/bigImageNotFound.jpeg'
      }
    >
      <Link
        id="episode-banner"
        to={`/player/${episodeInfo.animeId}/episodes/${episodeInfo.episodeNumber}`}
      >
        <Play size={24} />
        <div id="episode-duration">{episodeInfo.duration}m</div>
      </Link>
      <div className="container">
        <Link to={`/anime/${episodeInfo.animeId}`} id="anime-name">
          <span>{episodeInfo.animeName}</span>
        </Link>
        <Link
          to={`/player/${episodeInfo.animeId}/episodes/${episodeInfo.episodeNumber}`}
          id="episode-name"
        >
          E{episodeInfo.episodeNumber} -{' '}
          {episodeInfo.episodeName?.length! > 25
            ? episodeInfo.episodeName?.slice(0, 25) + '...'
            : episodeInfo.episodeName}
        </Link>
        <div className="minor-container">
          <span>{episodeInfo.type}</span>
          <Link
            to={`/player/${episodeInfo.animeId}/episodes/${episodeInfo.episodeNumber}`}
          >
            <span>
              {episodeInfo.commentaries} <ChatText size={14} />
            </span>
          </Link>
        </div>
      </div>
    </S.EpisodeWrapper>
  )
}
