import React from "react";

import { useNavigate } from "react-router-dom";

import { TableRow, TableRowTitle } from "~/framework/molecules";
import { datacore } from "~/models";
import {putClassApiService} from "~/service/api";

import { ClassesTableProps } from "./ClassesTable.interface";
import { titleList } from "./ClassesTable.logic";
import * as S from './ClassesTable.style';

export const ClassesTable: React.FC<ClassesTableProps> = (
    { filters,
        data,
        reload,
        setReload,
        setConfirmRemoveModal,
        confirmRemoveModal,
        setIdToDelete
    }
) => {
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

    const handleSwitchStatus = async (data: any) => {
        await putClassApiService(data?.id, data)
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
                        onThrashClick={() => {
                            setConfirmRemoveModal(!confirmRemoveModal);
                            setIdToDelete(it?.id);
                        }}
                    />
                )})}
        </S.Container>
    )
}
