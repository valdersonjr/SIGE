import React from 'react';
import * as S from './NewRegistration.style';
import {NewRegistrationProps} from "@templates/NewRegistration/NewRegistration.interface";
import {Header, InputInLabel} from "@molecules";
import {Button, SelectInLabel, VariantButtonEnum} from "@atoms";

export const NewRegistration: React.FC<NewRegistrationProps> = () => {
    return (
        <S.Container>
            <S.Header>
                <Header title="Nova Matrícula" />
            </S.Header>
            <S.Body>
                <S.InputSection>
                    <S.InputContainer>
                        <SelectInLabel label="Ano" options={[]} />
                        <SelectInLabel label="Turma" options={[]} />
                        <InputInLabel label="Pesquisar aluno" value="" placeholder="Digite aqui" onChange={() => {}} />
                    </S.InputContainer>
                    <S.InputContainer>
                        <InputInLabel label="Id do Aluno" value="" disabled={true} placeholder="Digite aqui" onChange={() => {}} />
                        <InputInLabel label="Nome do Aluno" value="" disabled={true} placeholder="Digite aqui" onChange={() => {}} />
                    </S.InputContainer>
                    <S.InputContainer>
                        <InputInLabel label="Data de Início" value="" disabled={true} placeholder="00/00/0000" onChange={() => {}} />
                        <SelectInLabel label="Autoriza divulgação de dados pessoais" options={[]} />
                        <SelectInLabel label="Autoriza a divulgação de sua imagem nas redes sociais da escola" options={[]} />
                    </S.InputContainer>
                    <S.InputContainer>
                        <SelectInLabel label="Almoço" options={[]} />
                        <SelectInLabel label="Jantar" options={[]} />
                    </S.InputContainer>
                    <S.InputContainer>
                        <InputInLabel label="Valor matrícula" value="" placeholder="R$" onChange={() => {}} />
                        <InputInLabel label="Valor mensalidade" value="" placeholder="R$" onChange={() => {}} />
                        <InputInLabel label="Valor refeição" value="" placeholder="R$" onChange={() => {}} />
                    </S.InputContainer>
                    <S.InputContainer>
                        <InputInLabel label="Valor material didático" value="" placeholder="R$" onChange={() => {}} />
                        <InputInLabel label="Valor material pedagógico" value="" placeholder="R$" onChange={() => {}} />
                        <InputInLabel label="Valor projeto nutricional" value="" placeholder="R$" onChange={() => {}} />
                    </S.InputContainer>
                    <S.InputContainer>
                        <InputInLabel label="Valor hora extra" value="" placeholder="R$" onChange={() => {}} />
                        <SelectInLabel label="Forma de pagamento" options={[]} />
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

                <Button label="Criar Matrícula" variant={VariantButtonEnum.SECONDARY} justifyText="center"
                        onClick={() => {}} />
            </S.Body>
        </S.Container>
    );
}
