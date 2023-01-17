import React, { useEffect, useState } from "react";
import { ViewClasses } from "~/framework/templates";
import { datacore } from "~/models";
import { getClassesApiService } from "~/service/api";
import * as S from './ViewClasses.style';

const ViewClassesPage: React.FC = () => {
    const [classes, setClasses] = useState<datacore.ResponseClass[]>([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        getClassesApiService().then(response => {
            setClasses(response.data);
        }).catch(error => console.error(error));
    }, [reload]);

    return (
        <S.Container>
            <ViewClasses classes={classes} reload={reload} setReload={setReload} />
        </S.Container>
    )
}

export default ViewClassesPage;
