import IModel from "../../../interfaces/IModel";
import {FC, ReactElement} from "react";
import styles from "./CartItem.module.css";

interface ICartItemProps {
    model: IModel
}

const CartItem: FC<ICartItemProps> = ({model}): ReactElement => {
    return (
        <div className={styles.cartItem}>
            <div className={styles.image}>
                <img src={`../../../src/assets/images/clothes/jeans/${model.image}`} alt={model.name} />
            </div>
            <div className={styles.itemInfo}>
                <h2>{model.name}</h2>
                <p>Article: {model.article}</p>
                <p>Price: <b>${model.price}</b></p>
                <p>Quantity: {model.quantity}</p>
            </div>
        </div>
    )
}

export default CartItem;