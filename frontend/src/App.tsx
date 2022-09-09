import NavBar from "./components/NavBar";
import Home from "./pages/home";
import Player from "./pages/player";

export function App() {
  return (
    <div className="wrapper">
      <NavBar/>
      <Home />
    </div>
  )
}