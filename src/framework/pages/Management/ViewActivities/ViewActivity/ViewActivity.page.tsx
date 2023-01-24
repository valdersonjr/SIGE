import React from 'react';
import * as S from "./ViewActivity.style";
import ViewActivity from "@templates/ViewActivity/ViewActivity.template";
import {useParams} from "react-router-dom";

const ViewActivityPage: React.FC = () => {
    const { id } = useParams();

    return (
        <S.Container>
            <ViewActivity activityId={Number(id)} />
        </S.Container>
    );
}

export default ViewActivityPage;
