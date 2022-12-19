import React from "react";

import { useNavigate } from "react-router-dom";

import { ManagementPageBanner } from "~/framework/atoms/Icons";
import { Button, Title, VariantButtonEnum } from "~/framework/atoms";
import { Banner, ColumnCenterCard } from "~/framework/molecules";

import { activities, classes, professors, registration } from "./Management.logic";

import * as S from './Management.style';

export const Management: React.FC = () => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <Banner Icon={<ManagementPageBanner />} type="gestao-escolar" title="Gestão Escolar" text="Veja alguns números de como anda sua escola, edite, adicione turmas, crie novas atividades e veja como estão as matrículas atuais!" />
            <S.Body>
                <S.Block>
                    <S.BlockTitle><Title>Turmas</Title></S.BlockTitle>
                    <S.BlockBody>
                        {classes.map((item) => (
                            <ColumnCenterCard key={item.key} label={item.label} value={item.value} active={item.active} />
                        ))}
                    </S.BlockBody>
                    <S.BlockFooter>
                        <Button label="Cadastrar Nova Turma" variant={VariantButtonEnum.SECONDARY_TRANSPARENT} />
                        <Button label="Visualizar Dados" variant={VariantButtonEnum.SECONDARY} onClick={() => navigate('/gestao-escolar/visualizar-turmas')} />
                    </S.BlockFooter>
                </S.Block>
                <S.Block>
                    <S.BlockTitle><Title>Atividades</Title></S.BlockTitle>
                    <S.BlockBody>
                        {activities.map((item) => (
                            <ColumnCenterCard key={item.key} label={item.label} value={item.value} active={item.active} />
                        ))}
                    </S.BlockBody>
                    <S.BlockFooter>
                        <Button label="Cadastrar Nova Atividade" variant={VariantButtonEnum.SECONDARY_TRANSPARENT} />
                        <Button label="Visualizar Dados" variant={VariantButtonEnum.SECONDARY} />
                    </S.BlockFooter>
                </S.Block>
                <S.Block>
                    <S.BlockTitle><Title>Matrículas</Title></S.BlockTitle>
                    <S.BlockBody>
                        {registration.map((item) => (
                            <ColumnCenterCard key={item.key} label={item.label} value={item.value} active={item.active} />
                        ))}
                    </S.BlockBody>
                    <S.BlockFooter>
                        <Button label="Nova Matrícula de Aluno" variant={VariantButtonEnum.SECONDARY_TRANSPARENT} />
                        <Button label="Visualizar Dados" variant={VariantButtonEnum.SECONDARY} />
                    </S.BlockFooter>
                </S.Block>
                <S.Block>
                    <S.BlockTitle><Title>Professores</Title></S.BlockTitle>
                    <S.BlockBody>
                        {professors.map((item) => (
                            <ColumnCenterCard key={item.key} label={item.label} value={item.value} active={item.active} />
                        ))}
                    </S.BlockBody>
                    <S.BlockFooter>
                        <Button label="Nova Matrícula de Aluno" variant={VariantButtonEnum.SECONDARY_TRANSPARENT} />
                        <Button label="Visualizar Dado" variant={VariantButtonEnum.SECONDARY} />
                    </S.BlockFooter>
                </S.Block>
            </S.Body>
        </S.Container>
    )
}