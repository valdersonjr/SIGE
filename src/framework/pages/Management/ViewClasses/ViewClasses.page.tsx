import React, { useEffect, useState } from "react";

import { ViewClasses } from "~/framework/templates";
import { datacore } from "~/models";

import { getClassesApiService } from "~/service/api";

import * as S from './ViewClasses.style';

const ViewClassesPage: React.FC = () => {
    const [classesList, setClassesList] = useState<datacore.ResponseClass[]>([]);
    
    useEffect(() => {
        getClassesApiService().then(response => {
            setClassesList(response.data);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <S.Container>
            <ViewClasses classesList={classesList} />
        </S.Container>
    )
}

export default ViewClassesPage;