import React, {useEffect, useState} from 'react';
import {theme} from '~/theme';
import {AvatarCard, Navigation} from '~/framework/molecules';
import * as S from "./SideBar.style";
import {useNavigate} from 'react-router-dom';
import {ChevronsLeft} from "@atoms/Icons/ChevronsLeft.icon";
import {ExitRight} from "@atoms/Icons/ExitRight.icon";
import {SidebarMode} from "~/models/dataview/sidebar-mode.enum";
import SideBarProps from "@organisms/SideBar/SideBar.interface";

export const SideBar: React.FC<SideBarProps> = ({mode, setMode}) => {
    const navigate = useNavigate();

    const [width, setWidth] = useState<string | number>(400);

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

    useEffect(() => {
        switch (mode) {
            case SidebarMode.EXPANDED: setWidth(400);
                break;
            case SidebarMode.REDUCED: setWidth(200);
                break;
            case SidebarMode.MOBILE: setWidth('100%')
                break;
        }
    }, [mode]);

    const toggleSidebarExpand = () => {
        if (mode === SidebarMode.EXPANDED) {
            setMode(SidebarMode.REDUCED);
        } else {
            setMode(SidebarMode.EXPANDED);
        }
    }

    return <S.Container style={{width: width}}>
        <S.Main>
            <div style={{"display": "inline", "cursor": "pointer"}} onClick={() => navigate("/")}>
                <S.SigeLogo src="/logo.svg" alt="Logo do SIGE"/>
            </div>
            <Navigation mode={mode} />
        </S.Main>
        <S.Footer>
            <AvatarCard mode={mode} />
            <S.Logout>
                <S.Div onClick={handleLogout}>
                    <ExitRight color={theme.palette.dark.tint}/>
                    <S.Text>Sair</S.Text>
                </S.Div>
                <S.Div onClick={toggleSidebarExpand}>
                    <ChevronsLeft color={theme.palette.dark.tint} />
                </S.Div>
            </S.Logout>
        </S.Footer>
    </S.Container>
}
