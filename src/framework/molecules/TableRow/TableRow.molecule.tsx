import React from "react";

import { GlowingCircle } from "~/framework/atoms";
import { ActionIcons } from "~/framework/molecules";

import * as S from './Table.style';
import { TableRowProps } from "./TableRow.interface";

export const TableRow: React.FC<TableRowProps> = ({ index, aluno, periodo, turma, situacao, onEyeClick, onSwitchClick, onThrashClick }) => {
    return (
        <S.Container index={index}>
            {!!aluno && <S.RowSection><S.Text>{aluno}</S.Text></S.RowSection>}
            {!!periodo && <S.RowSection><S.Text>{periodo}</S.Text></S.RowSection>}
            {!!turma && <S.RowSection><S.Text>{turma}</S.Text></S.RowSection>}
            {!!situacao &&
              <S.RowSection>
                <S.SituationContainer>
                    {situacao ? <GlowingCircle type={situacao} /> : <></>}
                  <S.Text>{situacao}s</S.Text>
                </S.SituationContainer>
              </S.RowSection>
            }
            <S.RowSection>
                <ActionIcons onEyeClick={onEyeClick} onSwitchClick={onSwitchClick} onThrashClick={onThrashClick} />
            </S.RowSection>
        </S.Container>
    )
}
