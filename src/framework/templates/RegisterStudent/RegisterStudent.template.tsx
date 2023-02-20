import React, {useState} from "react";

import {Button, SelectInLabel, Title, VariantButtonEnum} from "~/framework/atoms";
import { Header, InputInLabel } from "~/framework/molecules";

import { RegisterStudentProps } from "./RegisterStudent.interface";

import * as S from './RegisterStudent.style';
import {createStudentApiService} from "~/framework/pages/Students/student.service";
import {ChooseImage} from "@molecules/Inputs/ChooseImage/ChooseImage.molecule";

export const RegisterStudent: React.FC<RegisterStudentProps> = () => {
    const [studentImage, setStudentImage] = useState('');

    const [studentName, setStudentName] = useState('');
    const [birthdayDate, setBirthdayDate] = useState('');
    const [teaching, setTeaching] = useState('');
    const [period, setPeriod] = useState('');

    const [financialResponsible, setFinancialResponsible] = useState('pai');
    const [parentsTogether, setParentsTogether] = useState('sim');
    const [daddyName, setDaddyName] = useState('');
    const [mommyName, setMommyName] = useState('');

    const [medicalInsurance, setMedicalInsurance] = useState('');
    const [medicalInsuranceDocument, setMedicalInsuranceDocument] = useState('');
    const [preferredHospital, setPreferredHospital] = useState('');

    const [description, setDescription] = useState('');

    const save = () => {
        createStudentApiService({
            nome: studentName,
            data_nascimento: birthdayDate,
            ensino: teaching,
            periodo: period,
            responsavel_financeiro: financialResponsible,
            pais_juntos: parentsTogether,
            nome_pai: daddyName,
            nome_mae: mommyName,
            convenio_medico: medicalInsurance,
            documento_convenio_medico: medicalInsuranceDocument,
            hospital_preferencia: preferredHospital,
            descricao_status: description
        }).then(() => {})
    };

    const handleChangeImage = (e: any) => {
        setStudentImage(e.target.files[0]);
    };

    return (
        <S.Container>
            <S.Header>
                <Header title="Novo Aluno" />
            </S.Header>
            <S.Body>
                <S.ImageInputContainer>
                    <ChooseImage label="clique para adicionar uma foto do aluno" value={studentImage}
                                  onChange={handleChangeImage} />
                </S.ImageInputContainer>
                <S.InputSection>
                    <Title>Dados Pessoais do Aluno</Title>
                    <S.InputContainer>
                        <InputInLabel label="Nome do Aluno" value={studentName} placeholder="Digite aqui" onChange={setStudentName} />
                        <InputInLabel label="Data de Nascimento" value={birthdayDate} placeholder="00/00/0000" onChange={setBirthdayDate} />
                        <InputInLabel label="Ensino" value={teaching} placeholder="Digite aqui" onChange={setTeaching} />
                        <InputInLabel label="Periodo" value={period} placeholder="Digite aqui" onChange={setPeriod} />
                    </S.InputContainer>
                </S.InputSection>
                <S.InputSection>
                    <Title>Dados Financeiros</Title>
                    <S.InputContainer>
                        <SelectInLabel options={[{label: 'Pai', value: 'pai'}, {label: 'Mãe', value: 'mae'}]} label="Responsável Financeiro"
                                        onChange={(e) => setFinancialResponsible(e)} />
                        <SelectInLabel options={[{label: 'Sim', value: 'true'}, {label: 'Não', value: 'false'}]} label="Pais Vivem Juntos"
                                        onChange={(e) => setParentsTogether(e)} />
                        <InputInLabel label="Nome da Mãe" value={mommyName} placeholder="Digite aqui" onChange={(e) => setMommyName(e)} />
                        <InputInLabel label="Nome do Pai" value={daddyName} placeholder="Digite aqui" onChange={(e) => setDaddyName(e)} />
                    </S.InputContainer>
                </S.InputSection>
                <S.InputSection>
                    <Title>Dados Médicos</Title>
                    <S.InputContainer>
                        <InputInLabel label="Convênio Médico" value={medicalInsurance} placeholder="Digite aqui" onChange={(e) => setMedicalInsurance(e)} />
                        <InputInLabel label="Documento do Convênio Médico" value={medicalInsuranceDocument} placeholder="Digite aqui" onChange={(e) => setMedicalInsuranceDocument(e)} />
                        <InputInLabel label="Hospital de Preferência" value={preferredHospital} placeholder="Digite aqui" onChange={(e) => setPreferredHospital(e)} />
                    </S.InputContainer>
                </S.InputSection>
                <S.InputSection>
                    <S.InputContainer>
                        <S.MedicalInfoContainer>
                            Informações sobre alergia, medicação, necessidades especiais
                            <S.MedicalInfoInput value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Digite aqui..." />
                        </S.MedicalInfoContainer>
                    </S.InputContainer>
                </S.InputSection>

                <Button label="Criar aluno" variant={VariantButtonEnum.SECONDARY} justifyText="center"
                    onClick={save} />
            </S.Body>
        </S.Container>
    );
};
