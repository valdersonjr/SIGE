import React from "react";
import {Link} from "react-router-dom";
import {Button, VariantButtonEnum} from "~/framework/atoms";
import {sections} from "./Navigation.logic";
import * as S from "./Navigation.style";
import {setSelectedSection} from "~/utils/setSelectedSection";

export const Navigation: React.FC = () => (
    <S.container>
        {sections.map((section) => {
            let selected = localStorage.getItem('selectedSection') === section.key;

            return (
                <Link key={section.key} to={section.path} style={{textDecoration: 'none'}}>
                    <Button selected={selected} label={section.name} justifyText="start" type="button"
                            variant={VariantButtonEnum.GRADIENT_PRIMARY}
                            onClick={() => setSelectedSection(section.key)}/>
                </Link>
            )
        })}
    </S.container>
);
