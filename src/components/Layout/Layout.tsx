import { Outlet } from "react-router-dom";
import { FC, ReactElement } from "react";
import Header from "../Header/Header";

const Layout: FC = (): ReactElement => {
    return (
        <>
            <Header />
            <main>
               <Outlet /> 
            </main>
        </>
    )
}

export default Layout;