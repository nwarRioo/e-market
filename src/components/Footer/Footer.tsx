import { FC, ReactElement } from "react";
import { Container } from "../UI/Container/Container";
import styles from "./Footer.module.css";

const Footer: FC = (): ReactElement => {
    return (
        <footer>
            <Container>
                <div className={styles.footerContent}>
                    <p>© 2020-2023 MY SHOP. All rights reserved</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;