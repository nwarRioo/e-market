import { FC } from "react";
import IModel from "../../../interfaces/IModel";
import styles from "./Model.module.css";

interface IModelProps {
    model: IModel
}

const Model: FC<IModelProps> = ({model}) => {
    return (
        <div className={styles.model}>
            <img src={`../../../src/assets/images/clothes/jeans/${model.image}`} alt={model.name} />
            <p className={styles.modelName}>{model.name}</p>
            <p className={styles.modelName}>${model.price}</p>
        </div>
    )
}

export default Model;