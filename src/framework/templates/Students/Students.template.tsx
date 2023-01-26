import React, { useState } from 'react';

import { Banner } from '~/framework/molecules';
import { StudentTable } from '~/framework/organisms';
import { FormStudentQuery } from '~/framework/organisms';
import { StudentsPageBanner } from '~/framework/atoms/Icons';

// import { StudentsProps } from './Students.interface';

import { useNavigate } from 'react-router-dom';

import { StudentsProps } from './Students.interface';
import * as S from './Students.style';

export const Students: React.FC<StudentsProps> = ({ students, reload, setReload }) => {
    const navigate = useNavigate();
    const [tableFilters, setTableFilters] = useState({
        name: "",
        year: 2022,
        period: "",
        class: "",
        status: ""
    });

    return (
        <S.Container>
            <Banner Icon={<StudentsPageBanner />} type="students" title='Área de Alunos' text="Faça uma busca minuciosa e encontre seu aluno com muito mais simplicidade. Caso desejar, cadastre um novo aluno cliquando ao lado." buttonLabel="Novo Aluno" onButtonClick={() => navigate("/alunos/novo-aluno")} />
            <FormStudentQuery filters={tableFilters} setFilters={setTableFilters} />
            <StudentTable data={students} filters={tableFilters} reload={reload} setReload={setReload} />
        </S.Container>
    )
}
