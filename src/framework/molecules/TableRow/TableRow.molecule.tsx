import React, {useEffect, useState} from "react";

import {GlowingCircle} from "~/framework/atoms";
import {ActionIcons} from "~/framework/molecules";

import * as S from './Table.style';
import {TableRowProps} from "./TableRow.interface";

export const TableRow: React.FC<TableRowProps> = ({
                                                      index,
                                                      fields,
                                                      profiles,
                                                      status,
                                                      switchValue,
                                                      onEyeClick,
                                                      onSwitchClick,
                                                      onThrashClick
                                                  }) => {
    const [showActionsBtn, setShowActionsBtn] = useState(false);

    useEffect(() => {
        setShowActionsBtn(!!onEyeClick || !!onThrashClick || !!onSwitchClick);
    }, []);

    return (
        <S.Container index={index}>
            {fields.length > 0 && fields.map(field => (
                <S.RowSection><S.Text>{field}</S.Text></S.RowSection>
            ))}
            {profiles ? <S.RowSection>
                <div style={{"display": "flex", "flexDirection": "column", "gap": "4px", "padding": "4px"}}>
                    {profiles.map((profile) => (<S.Text>{profile.descricao}</S.Text>))}
                </div>
            </S.RowSection> : <></>}
            {!!status &&
              <S.RowSection>
                <S.SituationContainer>
                    {status ? <GlowingCircle type={status}/> : <></>}
                  <S.Text>{status}</S.Text>
                </S.SituationContainer>
              </S.RowSection>
            }
            {showActionsBtn && (
                <S.RowSection>
                    <ActionIcons onEyeClick={onEyeClick} onSwitchClick={onSwitchClick} onThrashClick={onThrashClick}
                                 switchValue={switchValue}/>
                </S.RowSection>
            )}
        </S.Container>
    )
}
