import React, {useState} from 'react';
import {Outlet} from 'react-router-dom';
import {SideBar} from '~/framework/organisms';
import * as S from './PageBase.style';
import {SidebarMode} from "~/models/dataview/sidebar-mode.enum";

const PageBase: React.FC = () => {
    const [mode, setMode] = useState<SidebarMode>(SidebarMode.EXPANDED);

    const containerStyle = mode === SidebarMode.MOBILE && {
        display: 'flex', flexDirection: "column-reverse"
    };

    return (
        <S.Container data-testid='route-layout' style={{...containerStyle}}>
            <SideBar mode={mode} setMode={setMode} />
            <Outlet />
        </S.Container>
    );
};
export default PageBase;
