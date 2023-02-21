import React, {useState} from "react";
import {Button, SelectInLabel, Title, VariantButtonEnum} from "~/framework/atoms";
import { Header, InputInLabel } from "~/framework/molecules";
import { RegisterStudentProps } from "./RegisterStudent.interface";
import * as S from './RegisterStudent.style';
import {InputDate} from "@atoms/InputDate/InputDate.atom";
import moment from "moment";

export const RegisterStudent: React.FC<RegisterStudentProps> = ({handleSubmit}) => {
    // const [studentImage, setStudentImage] = useState('');

    const [studentName, setStudentName] = useState('');
    const [birthdayDate, setBirthdayDate] = useState<Date>(new Date());

    const [financialResponsible, setFinancialResponsible] = useState('pai');
    const [parentsTogether, setParentsTogether] = useState('sim');
    const [daddyName, setDaddyName] = useState('');
    const [mommyName, setMommyName] = useState('');

    const [medicalInsurance, setMedicalInsurance] = useState('');
    const [preferredHospital, setPreferredHospital] = useState('');

    const [description, setDescription] = useState('');

    // const handleChangeImage = (e: any) => {
    //     setStudentImage(e.target.files[0]);
    // };

    return (
        <S.Container>
            <S.Header>
                <Header title="Novo Aluno" />
            </S.Header>
            <S.Body>
                {/*<S.ImageInputContainer>*/}
                {/*    <ChooseImage label="clique para adicionar uma foto do aluno" value={studentImage}*/}
                {/*                  onChange={handleChangeImage} />*/}
                {/*</S.ImageInputContainer>*/}
                <S.InputSection>
                    <Title>Dados Pessoais do Aluno</Title>
                    <S.InputContainer>
                        <InputInLabel label="Nome do Aluno" value={studentName} placeholder="Digite aqui" onChange={setStudentName} />
                        <InputDate label="Data de Nascimento" onChange={setBirthdayDate} value={birthdayDate} />
                    </S.InputContainer>
                </S.InputSection>
                <S.InputSection>
                    <Title>Dados Financeiros</Title>
                    <S.InputContainer>
                        <SelectInLabel options={[{label: 'Pai', value: 'pai'}, {label: 'Mãe', value: 'mae'}]} label="Responsável Financeiro"
                                        onChange={(e) => setFinancialResponsible(e)} />
                        <SelectInLabel options={[{label: 'Sim', value: 'TRUE'}, {label: 'Não', value: 'FALSE'}]} label="Pais Vivem Juntos"
                                        onChange={(e) => setParentsTogether(e)} />
                        <InputInLabel label="Nome da Mãe" value={mommyName} placeholder="Digite aqui" onChange={(e) => setMommyName(e)} />
                        <InputInLabel label="Nome do Pai" value={daddyName} placeholder="Digite aqui" onChange={(e) => setDaddyName(e)} />
                    </S.InputContainer>
                </S.InputSection>
                <S.InputSection>
                    <Title>Dados Médicos</Title>
                    <S.InputContainer>
                        <InputInLabel label="Convênio Médico" value={medicalInsurance} placeholder="Digite aqui" onChange={(e) => setMedicalInsurance(e)} />
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
                    onClick={(e) => handleSubmit(e, {
                        nome: studentName,
                        data_nascimento: moment(birthdayDate, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                        responsavel_financeiro: financialResponsible,
                        // @ts-ignore
                        pais_juntos: parentsTogether?.value === "TRUE",
                        nome_pai: daddyName,
                        nome_mae: mommyName,
                        nome_convenio_medico: medicalInsurance,
                        nome_hospital_preferencia: preferredHospital,
                        observacoes_medicas: description
                    })} />
            </S.Body>
        </S.Container>
    );
};
