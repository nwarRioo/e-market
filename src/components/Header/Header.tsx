import styles from "./Header.module.css";
import { FC, ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container } from "../UI/Container/Container";

const Header: FC = (): ReactElement => {
    return (
        <header>
            <Container> 
                <div className={styles.header_content}>
                    <Link to={"/"} className={styles.logo} />
                    <div className={styles.navbar}>
                        <NavLink to={"/cart"} className={styles.link}>
                            <div className={styles.shopping_cart}/>
                            Shopping cart
                        </NavLink>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header;