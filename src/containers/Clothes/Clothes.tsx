import { NavLink, Outlet } from "react-router-dom";
import { Container } from "../../components/UI/Container/Container";
import styles from "./Clothes.module.css";
import { FC, ReactElement, useState } from "react";


const Clothes: FC = (): ReactElement => {
    return (
        <Container>
            <div className={styles.clothes}>
                <div className={styles.links}>
                    <NavLink to={"/"} className={styles.link}>All</NavLink>
                    <NavLink to={"/men"} className={styles.link}>Men</NavLink>
                    <NavLink to={"/women"} className={styles.link}>Women</NavLink>
                </div>
                <Outlet />
            </div>
        </Container>
    )
}

export default Clothes;