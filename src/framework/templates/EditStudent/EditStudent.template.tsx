import React, {useEffect, useState} from 'react';
import {EditStudentProps} from "@templates/EditStudent/EditStudent.interface";
import * as S from "@templates/RegisterStudent/RegisterStudent.style";
import {Header, InputInLabel} from "@molecules";
import {Button, SelectInLabel, Title, VariantButtonEnum} from "@atoms";
import {InputDate} from "@atoms/InputDate/InputDate.atom";
import moment from "moment/moment";

export const EditStudent: React.FC<EditStudentProps> = ({handleSubmit, data}) => {
    const [studentName, setStudentName] = useState(data?.nome);
    const [birthdayDate, setBirthdayDate] = useState<Date>(new Date(data?.data_nascimento));

    const [financialResponsible, setFinancialResponsible] = useState(data?.responsavel_financeiro);
    const [parentsTogether, setParentsTogether] = useState(data?.pais_juntos);
    const [daddyName, setDaddyName] = useState(data?.pai?.nome);
    const [mommyName, setMommyName] = useState(data?.mae?.nome);

    const [medicalInsurance, setMedicalInsurance] = useState(data?.nome_convenio_medico);
    const [preferredHospital, setPreferredHospital] = useState(data?.nome_hospital_preferencia);

    const [description, setDescription] = useState(data?.observacoes_medicas);

    useEffect(() => {
        console.log('data', data);
    }, []);

    return (
        <S.Container>
            <S.Header>
                <Header title="Editar Aluno" />
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
                                       onChange={(e) => setFinancialResponsible(e)} selectedValue={financialResponsible} />
                        <SelectInLabel options={[{label: 'Sim', value: true}, {label: 'Não', value: false}]} label="Pais Vivem Juntos"
                                       onChange={(e) => setParentsTogether(e)} selectedValue={parentsTogether} />
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
}
