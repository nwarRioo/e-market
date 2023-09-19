import { FC, ReactElement } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Clothes from "./containers/Clothes/Clothes"

const App: FC = (): ReactElement => {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Clothes />}>
            <Route index path="/" element={<h1>all</h1>} />
            <Route path="men" element={<h1>man</h1>} />
            <Route path="women" element={<h1>woman</h1>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
