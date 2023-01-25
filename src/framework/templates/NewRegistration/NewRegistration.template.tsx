import React, {useEffect, useState} from 'react';
import * as S from './NewRegistration.style';
import {NewRegistrationProps} from "@templates/NewRegistration/NewRegistration.interface";
import {Header, InputInLabel} from "@molecules";
import {Button, SelectInLabel, VariantButtonEnum} from "@atoms";
import {anoOptions, formaPagamentoOptions} from "@templates/NewRegistration/NewRegistration.logic";
import {getClassesApiService, getStudentsApiService} from "@service/api";
import {SearchSelect} from "@atoms/SearchSelect/SearchSelect.atom";

export const NewRegistration: React.FC<NewRegistrationProps> = () => {
    const [classes, setClasses] = useState([]);
    const [students, setStudents] = useState([]);

    const [ano, setAno] = useState<string>('');
    const [turma, setTurma] = useState<any>();
    const [aluno, setAluno] = useState<any>();
    const [dataInicio, setDataInicio] = useState();

    useEffect(() => {
        getClassesApiService()
            .then((response: any) => {
                setClasses(response.data.map((it: any) => {return {label: it.descricao, value: it.id}}));
            }).catch(error => console.error(error));

        getStudentsApiService()
            .then((response: any) => setStudents(response.data.map((it: any) => {return {label: it.nome, value: it.id}})))
            .catch(err => console.error(err));
    }, []);

    return (
        <S.Container>
            <S.Header>
                <Header title="Nova Matrícula" />
            </S.Header>
            <S.Body>
                <S.InputSection>
                    <S.InputContainer>
                        <SelectInLabel label="Ano *" options={anoOptions} onChange={setAno} selectedValue={ano} />
                        <SelectInLabel label="Turma *" options={classes} onChange={setTurma} selectedValue={turma} />
                    </S.InputContainer>
                    <S.InputContainer>
                        <div style={{"width":"100%", "marginTop":"4px"}}>
                            <SearchSelect label="Pesquisar aluno *" options={students} onChange={setAluno} value={aluno} />
                        </div>
                        <InputInLabel label="Data de Início *" placeholder="00/00/0000" onChange={setDataInicio} value={dataInicio} />
                    </S.InputContainer>
                    <S.InputContainer>
                        <SelectInLabel label="Autoriza divulgação de dados pessoais" options={[{label: 'Não', value: 'FALSE'}, {label: 'Sim', value: 'TRUE'}]} />
                        <SelectInLabel label="Autoriza a divulgação de sua imagem nas redes sociais da escola" options={[{label: 'Não', value: 'FALSE'}, {label: 'Sim', value: 'TRUE'}]} />
                    </S.InputContainer>
                    <S.InputContainer>
                        <SelectInLabel label="Almoço" options={[{label: 'Não', value: 'FALSE'}, {label: 'Sim', value: 'TRUE'}]} />
                        <SelectInLabel label="Jantar" options={[{label: 'Não', value: 'FALSE'}, {label: 'Sim', value: 'TRUE'}]} />
                    </S.InputContainer>
                    <S.InputContainer>
                        <InputInLabel label="Valor matrícula *" value="" placeholder="R$" onChange={() => {}} />
                        <InputInLabel label="Valor mensalidade *" value="" placeholder="R$" onChange={() => {}} />
                        <InputInLabel label="Valor refeição" value="" placeholder="R$" onChange={() => {}} />
                    </S.InputContainer>
                    <S.InputContainer>
                        <InputInLabel label="Valor material didático" value="" placeholder="R$" onChange={() => {}} />
                        <InputInLabel label="Valor material pedagógico" value="" placeholder="R$" onChange={() => {}} />
                        <InputInLabel label="Valor projeto nutricional" value="" placeholder="R$" onChange={() => {}} />
                    </S.InputContainer>
                    <S.InputContainer>
                        <InputInLabel label="Valor hora extra" value="" placeholder="R$" onChange={() => {}} />
                        <SelectInLabel label="Forma de pagamento *" options={formaPagamentoOptions} />
                    </S.InputContainer>
                    <S.InputContainer>
                        <SelectInLabel label="Estuda idiomas" options={[]} />
                        <SelectInLabel label="Faz natação" options={[]} />
                    </S.InputContainer>
                    <S.InputContainer>
                        <SelectInLabel label="Faz projeto nutricional" options={[]} />
                        <SelectInLabel label="Faz recreação" options={[]} />
                    </S.InputContainer>
                </S.InputSection>

                <S.ButtonContainer>
                    <Button label="Criar Matrícula" variant={VariantButtonEnum.SECONDARY} justifyText="center"
                            onClick={() => {}} />
                </S.ButtonContainer>
            </S.Body>
        </S.Container>
    );
}
