import { BrowserRouter, Routes, Route } from "react-router-dom"

import Cards from "./Components/Cards/Cards"
import Animedetail from "./Components/AnimeDetail/Animedetail"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/:pageNumber" element={<Cards />} />
          <Route path="/:anime/:id" element={<Animedetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
