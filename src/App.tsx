import { FC, ReactElement } from "react"
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Clothes from "./containers/Clothes/Clothes"
import Models from "./containers/Models/Models"
import { EGender } from "./enums/EGender"
import Cart from "./containers/Cart/Cart"

const App: FC = (): ReactElement => {

  return (
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Clothes />}>
            <Route index path="/" element={<Models gender={EGender.MEN}/>} />
            <Route path="women" element={<Models gender={EGender.WOMEN}/>} />
          </Route>
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
  )
}

export default App
