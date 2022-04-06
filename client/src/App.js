import React, { useEffect, useState } from "react"
import Home from "./components/Home/Home"
import { Routes, Route } from "react-router"
import Auth from "./components/Auth/Auth"
import Header from "./components/header/Header"
import Reservation from "./components/reservation/Reservation"

const App = () => {
  const [coords, setCoords] = useState({})

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude })
      }
    )
  }, [])

  return (
    <>
      <Header setCoords={setCoords} />
      <Routes>
        <Route
          path="/"
          element={<Home setCoords={setCoords} coords={coords} />}
        />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  )
}

export default App
