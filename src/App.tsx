import { FC, ReactElement } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout/Layout"

const App: FC = (): ReactElement => {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<h1>HELLO</h1>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
