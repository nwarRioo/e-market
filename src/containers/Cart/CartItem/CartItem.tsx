import IModel from "../../../interfaces/IModel";
import {FC, ReactElement} from "react";
import styles from "./CartItem.module.css";
import { AppDispatch, AppState } from "../../../store/store";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { add } from "../../../store/shoppingCart/shoppingCart.slice";

interface ICartItemProps {
    model: IModel
}

const CartItem: FC<ICartItemProps> = ({model}): ReactElement => {
    const dispatch: AppDispatch = useDispatch();    
    const { models } = useSelector((state: AppState) => state.shoppingCart, shallowEqual);
    
    const addToBag = (model: IModel) => {
        const same = models.find(item => item.id === model.id)
        if(same) {
            dispatch(add(
                models.map(item => item.id === model.id ? 
                    {...same, quantity: same.quantity! + 1} : item)
            ))
        } else {
            dispatch(add([...models, {...model, quantity: 1}]))
        }
    }

    const removeFromBag = (model: IModel) => {
        const same = models.find(item => item.id === model.id)
        if(same?.quantity === 1) {
            dispatch(add(models.filter(item => item.id !== model.id)))
        } else {
            dispatch(add(
                models.map(item => item.id === model.id ?
                    {...same, quantity: same?.quantity! -1} : item)
            ))
        }
    }

    return (
        <div className={styles.cartItem}>
            <div className={styles.image}>
                <img src={`./clothes/jeans/${model.image}`} alt={model.name} />
            </div>
            <div className={styles.itemInfo}>
                <h2>{model.name}</h2>
                <p>Article: {model.article}</p>
                <p>Price: <b>${model.price}</b></p>
                <div className={styles.qty}>
                    <p>Quantity:</p>
                    <div className={styles.qtyBox}>
                        <p onClick={() => removeFromBag(model)}>-</p>
                        {model.quantity}
                        <p onClick={() => addToBag(model)}>+</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default CartItem;