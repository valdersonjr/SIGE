import React from 'react';

import { PostIt } from '~/framework/atoms';
import { Header } from '~/framework/molecules';
import { Dropdown } from '~/framework/organisms';

import { contatosDeEmergenciaSection, dadosCadastraisSection, dadosDoAlunoSection } from './ViewStudent.logic';

import * as S from './ViewStudent.style';

const ViewStudent: React.FC = () => {
    return (
        <S.Container>
            <S.Header>
                <Header title="Visualizar Aluno" buttonText="Editar dados do Aluno" onButtonClick={() => {}} />
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
