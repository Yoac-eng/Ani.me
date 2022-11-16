import ReactLoading from 'react-loading'
import * as S from './styles'

export function Loading() {
  return (
    <S.LoadingWrapper>
      <ReactLoading className="loading-stuff" type={'spin'} color={'#00A3FF'} />
    </S.LoadingWrapper>
  )
}
