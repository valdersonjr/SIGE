import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Title } from '~/framework/atoms';
import { ChevronLeftCircle } from '~/framework/atoms/Icons';

import { DropdownHeader } from '~/framework/molecules';

import * as S from './ViewStudent.style';

const ViewStudent: React.FC = () => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <S.Header>
                <S.Button onClick={() => navigate(-1)}>
                    <ChevronLeftCircle />
                </S.Button>
                <Title>Novo Aluno</Title>
            </S.Header>
            <img width={100} src='https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png' alt='fon' />
            <div style={{ "width": "100%" }} >
                <DropdownHeader title='Dados do Aluno' />
                <S.DropdownBody>
                    aowdkoawk
                </S.DropdownBody>
            </div>

        </S.Container>
    )
}

export { ViewStudent };