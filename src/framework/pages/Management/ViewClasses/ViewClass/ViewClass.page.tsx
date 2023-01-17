import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ViewClass from "~/framework/templates/ViewClass/ViewClass.template";
import { getClassApiService } from "@service/api";
import * as S from './ViewClass.style';
import { datacore } from "~/models";

const ViewClassPage: React.FC = () => {
    const { id } = useParams();
    const [classs, setClasss] = useState<datacore.ResponseClass>();

    useEffect(()=>{
        getClassApiService(Number(id)).then(response => {
            setClasss(response.data);
        }).catch(error => {
            console.log(error);
        });
    },[]);

    return (
        <S.Container>
            <ViewClass _class={classs} />
        </S.Container>
    )
}

export default ViewClassPage;
