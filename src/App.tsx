import { FC, ReactElement } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Clothes from "./containers/Clothes/Clothes"
import Models from "./containers/Models/Models"
import { EGender } from "./enums/EGender"

const App: FC = (): ReactElement => {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Clothes />}>
            <Route index path="/" element={<Models gender={EGender.MEN}/>} />
            <Route path="women" element={<Models gender={EGender.WOMEN}/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
