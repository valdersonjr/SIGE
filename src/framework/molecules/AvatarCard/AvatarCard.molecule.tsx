import React from 'react';

import { Button, VariantButtonEnum } from '~/framework/atoms';

import * as S from "./AvatarCard.style";

export const AvatarCard: React.FC = () => {
    return (
        <S.Container>
            <S.UserInfo>
                <S.UserInfo>
                    <div>Avatar</div>
                    <S.TextContainer>
                        <S.Text isTitle={true}>Valderson Junior</S.Text>
                        <S.Text isTitle={false}>Admin</S.Text>
                    </S.TextContainer>
                </S.UserInfo>
            </S.UserInfo>
            <Button type='button' label='Ver meus dados' variant={VariantButtonEnum.PRIMARY} />
        </S.Container>
    )
}