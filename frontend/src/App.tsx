import { BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/home";
import Login from "./pages/Login";
import PlayerPage from "./pages/PlayerPage";
import Register from "./pages/Register";

export function App() {
  return (
    <div className="wrapper">
      <BrowserRouter> 
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/player" element={<PlayerPage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}