import React from 'react';

import { useNavigate } from 'react-router-dom';

import { ChevronLeftCircle } from '~/framework/atoms/Icons';
import { Button, PostIt, Title, VariantButtonEnum } from '~/framework/atoms';
import { Dropdown } from '~/framework/organisms';

import { contatosDeEmergenciaSection, dadosCadastraisSection, dadosDoAlunoSection } from './ViewStudent.logic';

import * as S from './ViewStudent.style';

const ViewStudent: React.FC = () => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <S.Header>
                <S.BackButton onClick={() => navigate(-1)}>
                    <ChevronLeftCircle />
                </S.BackButton>
                <Title>Visualizar Aluno</Title>
                <S.EditDataButton>
                    <Button label='Editar dados do Aluno' variant={VariantButtonEnum.SECONDARY} />
                </S.EditDataButton>
            </S.Header>
            <S.DropdownContainer>
                <Dropdown title='Dados do Aluno' >
                    {dadosDoAlunoSection.map((item) => (
                        <PostIt title={item.title} content={item.content} />
                    ))}
                </Dropdown>
                <Dropdown title='Dados Cadastrais'>
                    {dadosCadastraisSection.map((item) => (
                        <PostIt title={item.title} content={item.content} />
                    ))}
                </Dropdown>
                <Dropdown title='Dados dos Responsáveis'>
                    {dadosCadastraisSection.map((item) => (
                        <PostIt title={item.title} content={item.content} />
                    ))}
                </Dropdown>
                <Dropdown title='Contatos de Emergência'>
                    {contatosDeEmergenciaSection.map((item) => (
                        <PostIt title={item.title} content={item.content} />
                    ))}
                </Dropdown>
            </S.DropdownContainer>
        </S.Container>
    )
}

export { ViewStudent };