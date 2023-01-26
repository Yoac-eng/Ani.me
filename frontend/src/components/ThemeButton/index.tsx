import * as S from './styles'
import { Moon, Sun } from 'phosphor-react'

interface ThemeButtonProps {
  toggleTheme(): void
}
export function ThemeButton({ toggleTheme }: ThemeButtonProps) {
  return (
    <S.Switch>
      <input type="checkbox" />
      <span onClick={toggleTheme}>
        <div id="icons">
          <Moon size={18} color="#ffffff" />
          <Sun size={18} color="#ffffff" />
        </div>
      </span>
    </S.Switch>
  )
}
