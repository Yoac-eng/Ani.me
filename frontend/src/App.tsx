import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Anime from './pages/Anime'
import Home from './pages/home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Player from './pages/Player'
import Register from './pages/Register'
import SearchAnime from './pages/SearchAnime'

export function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <NavBar />
        <Routes>
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
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}
