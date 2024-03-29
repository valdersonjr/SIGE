import React from 'react';
import {NewActivityProps} from "@templates/NewActivity/NewActivity.interface";
import * as S from './NewActivity.style';
import {Header, InputInLabel} from "@molecules";
import {Button, VariantButtonEnum} from "@atoms";

export const NewActivity: React.FC<NewActivityProps> = ({ description, setDescription, onSubmit }) => {
    return (
        <S.Container>
            <S.Header>
                <Header title="Nova Atividade" />
            </S.Header>
            <S.Body>
                <S.InputSection>
                    <S.InputContainer>
                        <InputInLabel required label="Nome" value={description} placeholder="Digite aqui" onChange={(e) => setDescription(e)} />
                    </S.InputContainer>
                </S.InputSection>

                <Button type="submit" label="Criar atividade" variant={VariantButtonEnum.SECONDARY} justifyText="center"
                        onClick={onSubmit} />
            </S.Body>
        </S.Container>
    );
}
