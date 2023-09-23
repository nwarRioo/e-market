import { FC, ReactElement } from "react";
import styles from "./Models.module.css";
import ModelsList from "../../components/ModelsList/ModelsList";
import IGender from "../../interfaces/IGender";

const Models: FC<IGender> = ({gender}): ReactElement => {
    return (
        <div className={styles.models}>
            <ModelsList gender={gender}/>
        </div>
    )
}

export default Models;