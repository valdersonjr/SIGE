import React from "react";
import { Link } from "react-router-dom";

import { useRecoilState } from "recoil";

import { Button, VariantButtonEnum } from "~/framework/atoms";

import { selectedSidebar } from "~/recoil/sidebar/sidebar.atom";

import { sections } from "./Navigation.logic";

import * as S from "./Navigation.style";

export const Navigation: React.FC = () => {
    const [selectedSection, setSelectedSection] = useRecoilState(selectedSidebar);


    return (
        <S.container>
            {sections.map((section) => {
                let selected: boolean = false;

                if (selectedSection === section.key) {
                    selected = true;
                }

                return (
                    <Link key={section.key} to={section.path} style={{ textDecoration: 'none' }}>
                        <Button selected={selected} label={section.name} justifyText="start" type="button" variant={VariantButtonEnum.GRADIENT_PRIMARY} onClick={() => setSelectedSection(section.key)} />
                    </Link>
                )
            })}
        </S.container>
    )
}
