import React from "react";
import {useParams} from "react-router-dom";
import * as S from "./ViewRegistration.style";
import ViewRegistration from "@templates/ViewRegistration/ViewRegistration.template";

const ViewRegistrationPage: React.FC = () => {
    const { id } = useParams();

    return (
        <S.Container>
            <ViewRegistration registrationId={Number(id)}></ViewRegistration>
        </S.Container>
    );
}

export default ViewRegistrationPage;
