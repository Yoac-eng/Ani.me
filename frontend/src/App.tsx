import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { ThemeProvider } from 'styled-components'
import themes from './styles/themes'
import { useMemo, useState } from 'react'
import { GlobalStyle } from './styles/global'

export function App() {
  // Color theme on the app
  const [theme, setTheme] = useState('dark')

  // Vamos ter aqui um useMemo pra guardar na memória qual o tema está nosso site
  // e esse valor só irá ser alterado quando o valor do nosso estado for alterado
  const currentTheme = useMemo(() => {
    // estamos acessando o objeto themes que contem os temas e selecionando o atributo
    // do tema que  queremos, pois themes['dark'] == themes.dark
    return themes[theme] || themes.dark
    // setamos um || themes.dark pro caso de ele não encontrar o themes[theme] e esse ser o padrão
  }, [theme])

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'))
  }
  return (
    <div className="wrapper">
      <BrowserRouter>
        <ThemeProvider theme={currentTheme}>
          {/* Actually doing some prop drilling right here but im fixing it later hehe */}
          <GlobalStyle />
          <Router toggleTheme={handleToggleTheme} />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}
