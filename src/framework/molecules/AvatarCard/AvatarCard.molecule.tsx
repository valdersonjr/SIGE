import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, VariantButtonEnum } from '~/framework/atoms';
import { Avatar } from '~/framework/atoms/Avatar/Avatar.style';
import { FetchUserResponse } from '~/models/datacore';
import { getAuthenticatedUser } from '~/service/api';

import * as S from "./AvatarCard.style";

export const AvatarCard: React.FC = () => {
    const [loggedUser, setLoggedUser] = useState<FetchUserResponse>();
    const navigate = useNavigate();

    useEffect(() => {
        getAuthenticatedUser().then((response) => {
            setLoggedUser(response.data);
        })
    },[]);

    return (
        <S.Container>
            <S.UserInfo>
                <S.UserInfo>
                    <Avatar src='https://www.cvasolutions.com/wp-content/uploads/2017/03/sem-avatar.jpg' alt={`${loggedUser?.nome}`} />
                    <S.TextContainer>
                        <S.Text isTitle={true}>{loggedUser?.nome}</S.Text>
                            {loggedUser?.perfis.map(element => <S.Text key={element.sigla} isTitle={false}>{element.descricao}</S.Text>)}
                    </S.TextContainer>
                </S.UserInfo>
            </S.UserInfo>
            <Button onClick={() => navigate(`/usuarios/visualizar-usuario/${loggedUser?.id}`)} type='button' label='Ver meus dados' variant={VariantButtonEnum.SMALL_SECONDARY} justifyText="center" />
        </S.Container>
    )
}
