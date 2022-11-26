import React from "react";

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
                    <Button selected={selected} key={section.key} label={section.name} type="button" variant={VariantButtonEnum.GRADIENT_PRIMARY} onClick={() => setSelectedSection(section.key)} />
                )
            })}
        </S.container>
    )
}