import { FC, ReactElement, useEffect, useState } from "react";
import IGender from "../../interfaces/IGender";
import db from "../../../db.json";

interface IModel {
    name: string,
    image: string,
    price: number,
    article: string,
    available: boolean,
    category: string,
}
const ModelsList: FC<IGender> = ({gender}): ReactElement => {
    const [models, setModels] = useState<IModel[]>([])

    useEffect(() => {
        const menModels = db.models.filter((model) => model.category === gender);
        setModels(menModels);
    }, [gender])

    return (
        <>
            <p>{models.length && models[1].article}</p>
        </>
    )
}

export default ModelsList;