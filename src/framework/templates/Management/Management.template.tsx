import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {ManagementPageBanner} from "~/framework/atoms/Icons";
import {Button, Title, VariantButtonEnum} from "~/framework/atoms";
import {Banner, ColumnCenterCard} from "~/framework/molecules";
import * as S from './Management.style';
import {
    getActivitiesApiService,
    getClassesApiService,
    getPeriodsApiService,
    getRegistrationsApiService
} from "@service/api";
import {Loading} from "@organisms/Loading/Loading.organism";

export const Management: React.FC = () => {
    const navigate = useNavigate();

    const [totalClasses, setTotalClasses] = useState<number>(0);
    const [totalActiveClasses, setTotalActiveClasses] = useState<number>(0);
    const [totalPeriods, setTotalPeriods] = useState<number>(0);
    const [totalActivePeriods, setTotalActivePeriods] = useState<number>(0);
    const [totalActivities, setTotalActivities] = useState<number>(0);
    const [totalActiveActivities, setTotalActiveActivities] = useState<number>(0);
    const [totalRegistrations, setTotalRegistrations] = useState<number>(0);
    const [totalActiveRegistrations, setTotalActiveRegistrations] = useState<number>(0);

    const [loading, setLoading] = useState<boolean>(true);
    const [isAllReqDone, setIsAllReqDone] = useState<boolean[]>([false, false, false, false]);

    useEffect(() => {
        getClassesApiService()
            .then((r: any) => {
                setTotalClasses(r?.data?.length);
                setTotalActiveClasses(r?.data?.filter((it: any) => !!it?.ativo)?.length);
                setIsAllReqDone(prev => [true, prev[1], prev[2], prev[3]]);
            }).catch(err => console.error(err));

        getPeriodsApiService()
            .then((r: any) => {
                setTotalPeriods(r?.data?.length);
                setTotalActivePeriods(r?.data?.length);
                setIsAllReqDone(prev => [prev[0], true, prev[2], prev[3]]);
            }).catch(err => console.error(err));

        getActivitiesApiService()
            .then((r: any) => {
                setTotalActivities(r?.data?.length);
                setTotalActiveActivities(r?.data?.filter((it: any) => !!it?.ativo)?.length);
                setIsAllReqDone(prev => [prev[0], prev[1], true, prev[3]]);
            }).catch(err => console.error(err));

        getRegistrationsApiService()
            .then((r: any) => {
                setTotalRegistrations(r?.data?.length);
                setTotalActiveRegistrations(r?.data?.length);
                setIsAllReqDone(prev => [prev[0], prev[1], prev[2], true]);
            }).catch(err => console.error(err));
    }, []);

    useEffect(() => {
        if (isAllReqDone.every(it => it)) setLoading(false);
    }, [isAllReqDone]);

    return (
        <S.Container>
            <Banner Icon={<ManagementPageBanner/>} type="gestao-escolar" title="Gestão Escolar"
                    text="Veja alguns números de como anda sua escola, edite, adicione turmas, crie novas atividades e veja como estão as matrículas atuais!"/>
            {!loading ? (
                <S.Body>
                    <S.Block>
                        <S.BlockTitle><Title>Atividades</Title></S.BlockTitle>
                        <S.BlockBody>
                            <ColumnCenterCard label="Total de Atividades" value={totalActivities} active={false}/>
                            <ColumnCenterCard label="Atividades Ativas" value={totalActiveActivities} active={true}/>
                        </S.BlockBody>
                        <S.BlockFooter>
                            <Button label="Cadastrar Nova Atividade" justifyText="center"
                                    variant={VariantButtonEnum.SECONDARY_TRANSPARENT}
                                    onClick={() => navigate('/gestao-escolar/nova-atividade')}/>
                            <Button label="Visualizar Dados" justifyText="center" variant={VariantButtonEnum.SECONDARY}
                                    onClick={() => navigate('/gestao-escolar/visualizar-atividades')}/>
                        </S.BlockFooter>
                    </S.Block>
                    <S.Block>
                        <S.BlockTitle><Title>Matrículas</Title></S.BlockTitle>
                        <S.BlockBody>
                            <ColumnCenterCard label="Total de Matrículas" value={totalRegistrations} active={false}/>
                            <ColumnCenterCard label="Total de Matrículas Ativas" value={totalActiveRegistrations}
                                              active={true}/>
                        </S.BlockBody>
                        <S.BlockFooter>
                            <Button label="Nova Matrícula de Aluno" justifyText="center"
                                    variant={VariantButtonEnum.SECONDARY_TRANSPARENT}
                                    onClick={() => navigate('/gestao-escolar/nova-matricula')}/>
                            <Button label="Visualizar Dados" justifyText="center" variant={VariantButtonEnum.SECONDARY}
                                    onClick={() => navigate('/gestao-escolar/visualizar-matriculas')}/>
                        </S.BlockFooter>
                    </S.Block>
                    <S.Block>
                        <S.BlockTitle><Title>Turmas</Title></S.BlockTitle>
                        <S.BlockBody>
                            <ColumnCenterCard label="Total de turmas" value={totalClasses} active={false}/>
                            <ColumnCenterCard label="Turmas Ativas" value={totalActiveClasses} active={true}/>
                            <ColumnCenterCard label="Total de Períodos" value={totalPeriods} active={false}/>
                            <ColumnCenterCard label="Períodos ativos" value={totalActivePeriods} active={true}/>
                        </S.BlockBody>
                        <S.BlockFooter>
                            <Button label="Cadastrar Nova Turma" variant={VariantButtonEnum.SECONDARY_TRANSPARENT}
                                    justifyText="center" onClick={() => navigate('/gestao-escolar/nova-turma')}/>
                            <Button label="Visualizar Dados" variant={VariantButtonEnum.SECONDARY} justifyText="center"
                                    onClick={() => navigate('/gestao-escolar/visualizar-turmas')}/>
                        </S.BlockFooter>
                    </S.Block>
                </S.Body>
            ) : <Loading/>}
        </S.Container>
    )
}
