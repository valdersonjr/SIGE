import React, {useState} from 'react';
import {NewActivityProps} from "@templates/NewActivity/NewActivity.interface";
import * as S from './NewActivity.style';
import {Header, InputInLabel} from "@molecules";
import {Button, VariantButtonEnum} from "@atoms";
import {createActivityApiService} from "@service/api/activity.service";

export const NewActivity: React.FC<NewActivityProps> = () => {
    const [description, setDescription] = useState('');

    const save = async () => {
        if (description.trim().length === 0) {
            alert("O campo nome não pode ser vazio.");
        } else {
            await createActivityApiService({description})
        }
    }

    return (
        <S.Container>
            <S.Header>
                <Header title="Nova Atividade" />
            </S.Header>
            <S.Body>
                <S.InputSection>
                    <S.InputContainer>
                        <InputInLabel label="Nome" value={description} placeholder="Digite aqui" onChange={(e) => setDescription(e)} />
                    </S.InputContainer>
                </S.InputSection>

                <Button label="Criar atividade" variant={VariantButtonEnum.SECONDARY} justifyText="center"
                        onClick={save} />
            </S.Body>
        </S.Container>
    );
}
