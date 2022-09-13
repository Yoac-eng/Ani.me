import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/home";
import Login from "./pages/Login";
import PlayerPage from "./pages/PlayerPage";

export function App() {


  return (
    <div className="wrapper">
      <BrowserRouter> 
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/player" element={<PlayerPage/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}