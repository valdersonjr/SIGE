import React from 'react';

import { Banner } from '~/framework/molecules';

import { StudentTable } from '~/framework/organisms';
import { FormStudentQuery } from '~/framework/organisms';
import { StudentsPageBanner } from '~/framework/atoms/Icons';

import * as S from './Students.style';

export const Students: React.FC = () => {
    return (
        <S.Container>
            <Banner Icon={<StudentsPageBanner />} type="students" title='Área de Alunos' text="Faça uma busca minuciosa e encontre seu aluno com muito mais simplicidade. Caso desejar cadastre um novo aluno cliquando ao lado." buttonLabel="Novo Aluno" />
            {/* <S.StudentQuery></S.StudentQuery> */}
            <FormStudentQuery />
            <StudentTable />
        </S.Container>
    )
}