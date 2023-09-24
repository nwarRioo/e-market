import { FC, ReactElement } from "react";
import styles from "./Cart.module.css";
import { shallowEqual, useSelector } from "react-redux";
import { AppState } from "../../store/store";
import { Container } from "../../components/UI/Container/Container";
import CartItem from "./CartItem/CartItem";

const Cart: FC = (): ReactElement => {
    const { models, totalCount } = useSelector((state: AppState) => state.shoppingCart, shallowEqual);
    const totalPrice = models.reduce((a, c) => a + c.price * c.quantity!, 0)
    return (
        <Container>
            <div className={styles.cartTop}>
                <p className={styles.cartTitle}>SHOPPING BAG ({totalCount} ITEMS)</p>
                <p className={styles.cartTitle}>TOTAL PRICE: {totalPrice} $</p>
            </div>
            
            
            <div className={styles.cart}>
                {models.length ? models.map(item => {
                    return <CartItem model={item} key={item.id}/>
                }): <h1>YOUR SHOPPING CART IS EMPTY</h1>}
            </div>
        </Container>
        
    )
}

export default Cart