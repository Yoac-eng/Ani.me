import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/home";
import Player from "./pages/player";

export function App() {
  return (
    <div className="wrapper">
      <BrowserRouter> 
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/player" element={<Player/>}/>
          </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}