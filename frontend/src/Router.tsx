import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layout/default'
import Anime from './pages/Anime'
import Home from './pages/home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Player from './pages/Player'
import Register from './pages/Register'
import SearchAnime from './pages/SearchAnime'

interface RouterProps {
  toggleTheme(): void
}

export function Router({ toggleTheme }: RouterProps) {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout toggleTheme={toggleTheme} />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/player/:animeId/episodes/:episodeId"
          element={<Player />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/anime/:animeId" element={<Anime />} />
        <Route path="/search" element={<SearchAnime />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
