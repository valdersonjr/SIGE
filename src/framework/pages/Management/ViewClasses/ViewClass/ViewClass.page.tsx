import React from "react";
import { useParams } from "react-router-dom";
import ViewClass from "~/framework/templates/ViewClass/ViewClass.template";
import * as S from './ViewClass.style';

const ViewClassPage: React.FC = () => {
    const { id } = useParams();

    return (
        <S.Container>
            <ViewClass classId={Number(id)} />
        </S.Container>
    )
}

export default ViewClassPage;
