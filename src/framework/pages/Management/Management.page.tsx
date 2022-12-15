import React from 'react';

import { Management } from '~/framework/templates';

import * as S from './Management.style';

const ManagementPage: React.FC = () => {
    return (
        <S.Container>
            <Management/>
        </S.Container>
    )
}

export default ManagementPage;