import React, {useState} from 'react';

import { PostIt } from '~/framework/atoms';
import { Header } from '~/framework/molecules';
import { Dropdown } from '~/framework/organisms';

import { calculateAge } from './ViewStudent.logic';

import * as S from './ViewStudent.style';
import {ChooseImage} from "@molecules/Inputs/ChooseImage/ChooseImage.molecule";
import { ViewStudentProps } from './ViewStudent.interface';

const ViewStudent: React.FC<ViewStudentProps> = ({ student }) => {
    const [studentImage, setStudentImage] = useState('');

    const handleChangeImage = (e: any) => {
        setStudentImage(e.target.files[0]);
    };

    return (
        <S.Container>
            <S.Header>
                <Header title="Visualizar Aluno" buttonText="Editar dados do Aluno" onButtonClick={() => {}} />
            </S.Header>
            <S.ImageInputContainer>
                <ChooseImage label="clique para adicionar uma foto do aluno" value={studentImage}
                             onChange={handleChangeImage} />
            </S.ImageInputContainer>
            <S.DropdownContainer>
                <Dropdown title='Dados do Aluno' >
                    {student?.nome && <PostIt title="Nome" content={[student.nome]} />}
                    {student?.data_nascimento && <PostIt title="Data de nascimento" content={[student.data_nascimento]} />}
                    {student?.data_nascimento && <PostIt title="Idade" content={[calculateAge(student.data_nascimento)]} /> }
                </Dropdown>
                <Dropdown title='Dados Cadastrais'>
                    {student?.matriculas && student.matriculas.map(matricula => {
                        return <PostIt title="Turma Vinculada" content={[matricula.descricao_turma, `(${matricula.ano})`]} />
                    })}
                    {student?.matriculas && student.matriculas.map((/*matricula*/) => {
                        return <PostIt title="Período" content={["ajustar back"]} /> 
                    })}
                    <PostIt title="Atividades Extras" content={["O que seria?"]} />
                </Dropdown>
                <Dropdown title='Dados dos Responsáveis'>
                    {student?.mae && <PostIt title="Mãe "content={[student.mae.nome]} />}
                    {student?.pai && <PostIt title="Pai "content={[student.pai.nome]} />}
                </Dropdown>
                <Dropdown title='Contatos de Emergência'>
                    {student?.mae && <PostIt title="Telefone da Mãe" content={[student.mae.telefone, student.mae.telefone_celular]} />}
                    {student?.pai && <PostIt title="Telefone da Mãe" content={[student.pai.telefone, student.pai.telefone_celular]} />}
                </Dropdown>
            </S.DropdownContainer>
        </S.Container>
    )
}

export { ViewStudent };
