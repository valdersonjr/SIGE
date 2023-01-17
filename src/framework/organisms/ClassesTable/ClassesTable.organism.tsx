import React from "react";

import { useNavigate } from "react-router-dom";

import { TableRow, TableRowTitle } from "~/framework/molecules";
import { datacore } from "~/models";
import {deleteClassApiService, putClassApiService} from "~/service/api";

import { ClassesTableProps } from "./ClassesTable.interface";
import { titleList } from "./ClassesTable.logic";
import * as S from './ClassesTable.style';

export const ClassesTable: React.FC<ClassesTableProps> = ({ filters, data, reload, setReload }) => {
    const navigate = useNavigate();

    let filteredData: datacore.ResponseClass[] = [];

    if (data) {
        filteredData = data;
    }

    if (!!filters.ensino) {
        filteredData = filteredData.filter((row) => {
            return row.ensino === filters.ensino;
        });
    }

    if (!!filters.descricao) {
        filteredData = filteredData.filter(row => String(row?.descricao).toLowerCase().includes(filters.descricao.toLowerCase()));
    }

    if (filters.status !== "" && filters.status) {
        filteredData = filteredData.filter((row) => {
            let status = row.ativo ? "Ativo" : "Inativo";
            return status === filters.status;
        });
    }

    const handleClassDeletion = async (id: number) => {
        await deleteClassApiService(id)
            .then(() => setReload(!reload)).catch(error => console.error(error));
    }

    const handleSwitchStatus = async (data: any) => {
        function manageData (data: any): any {
            return {
                periodo_turma_id: data?.periodo_turma?.id,
                ensino: data?.ensino,
                descricao: data?.descricao,
                valor_mensalidade: data?.valor_mensalidade,
                valor_refeicao: data?.valor_refeicao,
                valor_hora_extra: data?.valor_hora_extra,
                valor_projeto_nutricional: data?.valor_projeto_nutricional,
                valor_material_didatico: data?.valor_material_didatico,
                valor_material_pedagogico: data?.valor_material_pedagogico,
                ativo: !data?.ativo
            }
        }

        await putClassApiService(data?.id, manageData(data))
            .then(() => setReload(!reload)).catch(err => console.error(err));
    }

    return (
        <S.Container>
            <TableRowTitle titles={titleList} />
            {filteredData.map((it, index) => {
                return(
                    <TableRow index={index} fields={[it?.ensino, it?.descricao, it.horario]} status={it.ativo ? "Ativo" : "Inativo"}
                        onSwitchClick={() => handleSwitchStatus(it)} switchValue={it?.ativo}
                        onEyeClick={() => navigate(`/gestao-escolar/visualizar-turmas/turma/${it.id}`)}
                        onThrashClick={() => handleClassDeletion(it.id)}
                    />
                )})}
        </S.Container>
    )
}
