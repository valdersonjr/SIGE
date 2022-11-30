import React from 'react';
import { HomePageBanner } from '~/framework/atoms/Icons';
import { Banner } from '~/framework/molecules';

import * as S from './Students.style';

const StudentsPage: React.FC = () => {
    return (
        <S.Container>
            <Banner type="students" title='Plataforma que Simplifica a vida!' text="Faça uma busca minuciosa e encontre seu aluno com muito mais simplicidade." buttonLabel="Novo Aluno" />
        </S.Container>
    )
}

export default StudentsPage;