import React, {useEffect, useState} from 'react';

import { PostIt, SelectInLabel } from '~/framework/atoms';
import { Header, InputInLabel } from '~/framework/molecules';
import { Dropdown } from '~/framework/organisms';

import { calculateAge } from './ViewStudent.logic';

import * as S from './ViewStudent.style';
import {ChooseImage} from "@molecules/Inputs/ChooseImage/ChooseImage.molecule";
import { ViewStudentProps } from './ViewStudent.interface';
import EditStudentData from '~/framework/organisms/Modals/EditStudent/EditStudentData/EditStudentData.organism';


const ViewStudent: React.FC<ViewStudentProps> = ({ student }) => {
    const [studentImage, setStudentImage] = useState('');

    const [editData, setEditData] = useState(false);
    const [editRegisteredData, setEditRegisteredData] = useState(false);
    const [editGuardianData, setEditGuardianData] = useState(false);
    const [emergencyContactData, setEmergencyContactData] = useState(false);

    const [selectedYear, setSelectedYear] = useState('2022');

    const handleChangeImage = (e: any) => {
        setStudentImage(e.target.files[0]);
    };

    return (
        <S.Container>
            { editData &&
                <EditStudentData title='Editar Dados do Aluno' modalState={editData} setModalState={setEditData} >
                    <InputInLabel value={student?.nome} required label="Nome" onChange={() => {}} />
                    <InputInLabel type='date' label="Data de Nascimento" onChange={() => {}} />
                </EditStudentData>
            }
            { editRegisteredData &&
                <EditStudentData title='Editar Dados Cadastrais' modalState={editRegisteredData} setModalState={setEditRegisteredData} >
                    <SelectInLabel label='Ano' options={[{label: "2022", value: "2022"}, {label: "2023", value: "2023"}]} onChange={(e:any) => { setSelectedYear(String(e.value)) }} />
                    {/* <SelectInLabel  /> */}
                </EditStudentData>
            }
            { editGuardianData &&
                <EditStudentData title='Editar Dados dos Responsáveis' modalState={editGuardianData} setModalState={setEditGuardianData} >
                    <InputInLabel value={student?.mae.nome} required label="Nome da mãe" onChange={() => {}} />
                    <InputInLabel value={student?.pai.nome} required label="Nome do pai" onChange={() => {}} />
                </EditStudentData>
            }
            { emergencyContactData &&
                <EditStudentData title='Editar Contatos de Emergência' modalState={emergencyContactData} setModalState={setEmergencyContactData} >
                    <InputInLabel mask='(99) 99999 9999' value={student?.mae.telefone_celular} required label="Telefone da Mãe" onChange={() => {}} />
                    <InputInLabel mask='(99) 99999 9999' value={student?.mae.telefone} required label="Telefone da Mãe" onChange={() => {}} />
                    <InputInLabel mask='(99) 99999 9999' value={student?.pai.telefone_celular} required label="Telefone do Pai" onChange={() => {}} />
                    <InputInLabel mask='(99) 99999 9999' value={student?.pai.telefone} required label="Telefone do Pai" onChange={() => {}} />
                </EditStudentData>
            }
            <S.Header>
                <Header title="Visualizar Aluno" buttonText="Editar dados do Aluno" />
            </S.Header>
            <S.ImageInputContainer>
                <ChooseImage label="clique para adicionar uma foto do aluno" value={studentImage}
                             onChange={handleChangeImage} />
            </S.ImageInputContainer>
            <S.DropdownContainer>
                <Dropdown title='Dados do Aluno' buttonText='Editar dados do aluno' onButtonClick={() => setEditData(!editData)} >
                    {student?.nome && <PostIt title="Nome" content={[student.nome]} />}
                    {student?.data_nascimento && <PostIt title="Data de nascimento" content={[student.data_nascimento]} />}
                    {student?.data_nascimento && <PostIt title="Idade" content={[calculateAge(student.data_nascimento)]} /> }
                </Dropdown>
                <Dropdown title='Dados Cadastrais' buttonText='Editar dados cadastrais' onButtonClick={() => setEditRegisteredData(!editRegisteredData)}>
                    {student?.matriculas && student.matriculas.map(matricula => {
                        return <PostIt title="Turma Vinculada" content={[matricula.descricao_turma, `(${matricula.ano})`]} />
                    })}
                    {student?.matriculas && student.matriculas.map((matricula) => {
                        return <PostIt title="Período" content={[matricula.descricao_periodo_turma, `(${matricula.ano})`]} /> 
                    })}
                    <PostIt title="Atividades Extras" content={["O que seria?"]} />
                </Dropdown>
                <Dropdown title='Dados dos Responsáveis' buttonText='Editar dados dos responsáveis' onButtonClick={() => setEditGuardianData(!editGuardianData)}>
                    {student?.mae && <PostIt title="Mãe "content={[student.mae.nome]} />}
                    {student?.pai && <PostIt title="Pai "content={[student.pai.nome]} />}
                </Dropdown>
                <Dropdown title='Contatos de Emergência' buttonText='Editar contatos de emergência' onButtonClick={() => setEmergencyContactData(!emergencyContactData)}>
                    {student?.mae && <PostIt title="Telefone da Mãe" content={[student.mae.telefone, student.mae.telefone_celular]} />}
                    {student?.pai && <PostIt title="Telefone do Pai" content={[student.pai.telefone, student.pai.telefone_celular]} />}
                </Dropdown>
            </S.DropdownContainer>
        </S.Container>
    )
}

export { ViewStudent };
