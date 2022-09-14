import { BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Anime from "./pages/Anime";
import Home from "./pages/home";
import Login from "./pages/Login";
import Player from "./pages/Player";
import Register from "./pages/Register";

export function App() {
  return (
    <div className="wrapper">
      <BrowserRouter> 
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/player" element={<Player/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/anime" element={<Anime/>}/>
          </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}