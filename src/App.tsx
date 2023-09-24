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
          <Route path="/e-market/" element={<Clothes />}>
            <Route index element={<Models gender={EGender.MEN}/>} />
            <Route path="/e-market/women" element={<Models gender={EGender.WOMEN}/>} />
          </Route>
          <Route path="/e-market/cart" element={<Cart />} />
        </Route>
      </Routes>
  )
}

export default App
