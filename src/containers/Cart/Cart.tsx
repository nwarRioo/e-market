import { FC, ReactElement } from "react";
import styles from "./Cart.module.css";
import { shallowEqual, useSelector } from "react-redux";
import { AppState } from "../../store/store";
import { Container } from "../../components/UI/Container/Container";
import CartItem from "./CartItem/CartItem";

const Cart: FC = (): ReactElement => {
    const { models } = useSelector((state: AppState) => state.shoppingCart, shallowEqual);
    
    return (
        <Container>
            <div className={styles.cart}>
                {models.length ? models.map(item => {
                    return <CartItem model={item}/>
                }): <h1>YOUR SHOPPING CART IS EMPTY</h1>}
            </div>
        </Container>
        
    )
}

export default Cart