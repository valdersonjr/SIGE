import React from 'react';

import { Button, VariantButtonEnum } from '~/framework/atoms';
import { Avatar } from '~/framework/atoms/Avatar/Avatar.style';

import * as S from "./AvatarCard.style";

export const AvatarCard: React.FC = () => {
    return (
        <S.Container>
            <S.UserInfo>
                <S.UserInfo>
                    <Avatar src='https://criticalhits.com.br/wp-content/uploads/2019/07/natsu-1079068-1280x0.jpeg' alt='teste' />
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