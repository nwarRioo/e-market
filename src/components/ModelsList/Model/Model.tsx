import { FC } from "react";
import IModel from "../../../interfaces/IModel";
import styles from "./Model.module.css";
import { AppDispatch, AppState } from "../../../store/store";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { add } from "../../../store/shoppingCart/shoppingCart.slice";

interface IModelProps {
    model: IModel
}

const Model: FC<IModelProps> = ({model}) => {
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

    return (
        <div className={styles.model}>
            <div className={styles.modelTop}>
                <img src={`./clothes/jeans/${model.image}`} alt={model.name} />
                <div className={styles.modelButton}>
                    <button onClick={() => addToBag(model)}>ADD TO BAG</button>
                </div>
            </div>
            <p className={styles.modelName}>{model.name}</p>
            <p className={styles.modelName}>${model.price}</p>
        </div>
    )
}

export default Model;