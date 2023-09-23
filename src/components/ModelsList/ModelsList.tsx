import { FC, ReactElement, useEffect, useState } from "react";
import IGender from "../../interfaces/IGender";
import db from "../../../db.json";
import styles from "./ModelsList.module.css";
import IModel from "../../interfaces/IModel";
import Model from "./Model/Model";

const ModelsList: FC<IGender> = ({gender}): ReactElement => {
    const [models, setModels] = useState<IModel[]>([])

    useEffect(() => {
        const menModels = db.models.filter((model) => model.category === gender);
        setModels(menModels);
    }, [gender])

    return (
        <div className={styles.modelsList}>
            {models.length && models.map((model, i) => {
                return <Model key={i} model={model}/>
            })}
        </div>
    )
}

export default ModelsList;