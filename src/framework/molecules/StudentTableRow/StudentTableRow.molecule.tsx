import React from "react";

import { StudentTableRowProps } from "./StudentTableRow.interface";

import * as S from './StudentTable.style';
import { ActionIcons } from "../ActionIcons/ActionIcons.molecule";
import { GlowingCircle } from "~/framework/atoms";

export const StudentTableRow: React.FC<StudentTableRowProps> = ({ index, title, aluno, periodo, turma, situacao, onEyeClick, onSwitchClick, onThrashClick }) => {
    if (title) {
        return (
            <S.Container index={index}>
                <S.RowSection>
                    <S.Text>Aluno</S.Text>
                </S.RowSection>
                <S.RowSection>
                    <S.Text>Período</S.Text>
                </S.RowSection>
                <S.RowSection>
                    <S.Text>Turma</S.Text>
                </S.RowSection>
                <S.RowSection>
                    <S.Text>Situação</S.Text>
                </S.RowSection>
                <S.RowSection>
                    <S.Text>Ações</S.Text>
                </S.RowSection>
            </S.Container>
        )
    }
    return (
        <S.Container index={index}>
            <S.RowSection>
                <S.Text>{aluno}</S.Text>
            </S.RowSection>
            <S.RowSection>
                <S.Text>{periodo}</S.Text>
            </S.RowSection>
            <S.RowSection>
                <S.Text>{turma}</S.Text>
            </S.RowSection>
            <S.RowSection>
                <S.SituationContainer>
                    {situacao ? <GlowingCircle type={situacao} />  : ""}
                    <S.Text>{situacao}</S.Text>
                </S.SituationContainer>
            </S.RowSection>
            <S.RowSection>
                <ActionIcons onEyeClick={onEyeClick} onSwitchClick={onSwitchClick} onThrashClick={onThrashClick} />
            </S.RowSection>
        </S.Container >
    )
}