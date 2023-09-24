import styles from "./Header.module.css";
import { FC, ReactElement, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container } from "../UI/Container/Container";
import "./Header.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../store/store";
import { calculateTotalQuantity } from "../../store/shoppingCart/shoppingCart.slice";

const Header: FC = (): ReactElement => {
    const { models, totalCount } = useSelector((state: AppState) => state.shoppingCart, shallowEqual);
    const dispatch: AppDispatch = useDispatch(); 
    useEffect(() => {
        dispatch(calculateTotalQuantity())
    }, [models])

    return (
        <header>
            <Container> 
                <div className={styles.header_content}>
                    <Link to={"/"} className={styles.logo} />
                    <div className={styles.navbar}>
                        <NavLink to={"/cart"} className={"linkCart"}>
                            <div className={styles.shopping_cart}>
                                <div className={`${styles.count} ${totalCount > 0 && styles.showCount}`}>{totalCount > 0 ? totalCount : null}</div>
                            </div>
                            <p>
                              Shopping cart  
                            </p>
                        </NavLink>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header;