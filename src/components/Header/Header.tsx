import styles from "./Header.module.css";
import { FC, ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container } from "../UI/Container/Container";
import "./Header.css";
import { shallowEqual, useSelector } from "react-redux";
import { AppState } from "../../store/store";

const Header: FC = (): ReactElement => {
    const { models } = useSelector((state: AppState) => state.shoppingCart, shallowEqual);

    return (
        <header>
            <Container> 
                <div className={styles.header_content}>
                    <Link to={"/"} className={styles.logo} />
                    <div className={styles.navbar}>
                        <NavLink to={"/cart"} className={"linkCart"}>
                            <div className={styles.shopping_cart}>
                                <div className={`${styles.count} ${models.length > 0 && styles.showCount}`}>{models.length > 0 ? models.length : null}</div>
                            </div>
                            Shopping cart
                        </NavLink>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header;