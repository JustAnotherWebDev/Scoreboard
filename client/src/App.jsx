import { BrowserRouter, Routes, Route } from "react-router-dom"
import Scoreboard from "./components/Scoreboard"
import Home from "./components/Home"
import "./index.css"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/scoreboard" element={<Scoreboard />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
