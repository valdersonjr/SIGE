import React from 'react';

import { theme } from '~/theme';

import { DashboardIcon } from '~/framework/atoms/Icons';

import { Navigation, AvatarCard } from '~/framework/molecules';

import * as S from "./SideBar.style";
import { useNavigate } from 'react-router-dom';
// import { getLogoutApiService } from '~/service/api';

export const SideBar: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // getLogoutApiService().then((response:any) => {
            // if(response.message){
            //     alert("Não foi possível realizar o logout");
            // }
            // else {
                localStorage.clear();
                navigate("/login");
        //     }
        // });   
    }

    return (
        <S.SideBarSkeleton>
            <S.Container>
                <div style={{"display":"inline", "cursor": "pointer"}} onClick={() => navigate("/")} >
                    <S.SigeLogo src="/logo.svg" alt="Logo do SIGE" />
                </div>
                <Navigation />
                <S.Footer>
                    <AvatarCard />
                    <S.Logout onClick={handleLogout}>
                        <DashboardIcon color={theme.palette.dark.tint} />
                        <S.Text>Sair</S.Text>
                    </S.Logout>
                </S.Footer>
            </S.Container>
        </S.SideBarSkeleton>
    )
}