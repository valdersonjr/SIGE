import React from "react";

import { StudentTableRowProps } from "./StudentTableRow.interface";

import * as S from './StudentTable.style';
import { ActionIcons } from "../ActionIcons/ActionIcons.molecule";

export const StudentTableRow: React.FC<StudentTableRowProps> = ({ index, title, aluno, periodo, turma, situacao }) => {
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
                <S.Text>{situacao}</S.Text>
            </S.RowSection>
            <S.RowSection>
                <ActionIcons />
            </S.RowSection>
        </S.Container>
    )
}