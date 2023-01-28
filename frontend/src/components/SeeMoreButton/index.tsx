import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

interface SeeMoreButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  seeMoreButtonStatus?: Boolean
}

export default function SeeMoreButton({ ...rest }: SeeMoreButtonProps) {
  return (
    <S.SeeMoreButtonWrapper {...rest}>
      Ver {rest.seeMoreButtonStatus ? 'menos' : 'mais'}
    </S.SeeMoreButtonWrapper>
  )
}
