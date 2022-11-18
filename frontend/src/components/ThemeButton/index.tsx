import * as S from './styles'
import React from 'react'

interface ThemeButtonProps {
  toggleTheme(): void
}
export function ThemeButton({ toggleTheme }: ThemeButtonProps) {
  return (
    <S.Switch>
      <input type="checkbox" />
      <span onClick={toggleTheme} />
    </S.Switch>
  )
}
