import React from "react";

import { ViewClasses } from "~/framework/templates";

import * as S from './ViewClasses.style';

const ViewClassesPage: React.FC = () => {
    return (
        <S.Container>
            <ViewClasses />
        </S.Container>
    )
}

export default ViewClassesPage;