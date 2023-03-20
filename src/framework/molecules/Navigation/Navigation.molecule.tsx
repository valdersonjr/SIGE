import React from "react";
import {Link} from "react-router-dom";
import {VariantButtonEnum} from "~/framework/atoms";
import {sections} from "./Navigation.logic";
import * as S from "./Navigation.style";
import {setSelectedSection} from "~/utils/setSelectedSection";
import {theme} from "@theme";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBriefcase, faFileLines, faGraduationCap, faHome, faUsers} from '@fortawesome/free-solid-svg-icons';
import {NavigationProps} from "@molecules/Navigation/Navigation.interface";
import {SidebarMode} from "~/models/dataview/sidebar-mode.enum";
import {NavButton} from "@atoms/NavButton/NavButton.atom";

export const Navigation: React.FC<NavigationProps> = ({mode}) => {
    const getSectionIcon = (key: string, selected: boolean) => {
        switch (key) {
            case '0':
                return <FontAwesomeIcon icon={faHome} color={selected ? theme.palette.medium.tint : theme.palette.dark.shade} />;
            case '1':
                return <FontAwesomeIcon icon={faGraduationCap} color={selected ? theme.palette.medium.tint : theme.palette.dark.shade} />;
            case '2':
                return <FontAwesomeIcon icon={faBriefcase} color={selected ? theme.palette.medium.tint : theme.palette.dark.shade} />;
            case '3':
                return <FontAwesomeIcon icon={faUsers} color={selected ? theme.palette.medium.tint : theme.palette.dark.shade} />;
            case '4':
                return <FontAwesomeIcon icon={faFileLines} color={selected ? theme.palette.medium.tint : theme.palette.dark.shade} />;
        }
    };

    return (
        <S.container>
            {sections.map((section) => {
                let selected = localStorage.getItem('selectedSection') === section.key;

                return (
                    <Link key={section.key} to={section.path}
                          style={{textDecoration: 'none', width: mode === SidebarMode.EXPANDED ? "100%" : 50,
                              alignItems: "center", justifyContent: "center", display: "flex"}}>
                        <NavButton selected={selected} label={mode === SidebarMode.EXPANDED ? section.name : ""}
                                justifyText={mode === SidebarMode.EXPANDED ? "start" : "center"}
                                variant={VariantButtonEnum.GRADIENT_PRIMARY} disabled={false}
                                leftIcon={getSectionIcon(section.key, selected)}
                                onClick={() => setSelectedSection(section.key)} />
                    </Link>
                );
            })}
        </S.container>
    );
};
