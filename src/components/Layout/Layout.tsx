import { Outlet } from "react-router-dom";
import { FC, ReactElement } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout: FC = (): ReactElement => {
    return (
        <>
            <Header />
            <main>
               <Outlet /> 
            </main>
            <Footer />
        </>
    )
}

export default Layout;