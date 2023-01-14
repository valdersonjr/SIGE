import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { TableRow, TableRowTitle } from "~/framework/molecules";
import { datacore } from "~/models";
import { deleteClassApiService } from "~/service/api";

import { ClassesTableProps } from "./ClassesTable.interface";
import { titleList } from "./ClassesTable.logic";
import * as S from './ClassesTable.style';

export const ClassesTable: React.FC<ClassesTableProps> = ({ filters, data }) => {
    const navigate = useNavigate();

    const [idArray, setIdArray] = useState<number[]>([]);

    let filteredData: datacore.ResponseClass[] = [];

    if (data) {
        filteredData = data;
    }

    if (filters.class !== "" && filters.class) {
        filteredData = filteredData.filter((row) => {
            return row.ensino === filters.class;
        });
    }

    if (filters.period !== "" && filters.period) {
        filteredData = filteredData.filter((row) => {
            return row.periodo_turma_descricao === filters.period;
        });
    }

    if (filters.schedule !== "" && filters.schedule) {
        filteredData = filteredData.filter((row) => {
            return row.horario === filters.schedule;
        });
    }

    if (filters.status !== "" && filters.status) {
        filteredData = filteredData.filter((row) => {
            let status = row.ativo ? "Ativo" : "Inativo";
            return status === filters.status;
        });
    }

    const handleClassDeletion = async (id: number) => {
        await deleteClassApiService(id).then(response => {
            console.log(response);
            setIdArray([...idArray, id]);
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <S.Container>
            <TableRowTitle titles={titleList} />
            {filteredData.map((turma, index) => {
                if (idArray.includes(turma.id)) {
                    return;
                }
                return(
                    <TableRow index={index} fields={[turma.descricao, turma.periodo_turma_descricao, turma.horario]} status={turma.ativo ? "Ativo" : "Inativo"}
                        onEyeClick={() => navigate(`/gestao-escolar/visualizar-turmas/turma/${turma.id}`)}
                        onThrashClick={() => handleClassDeletion(turma.id)} />
                    )})}
        </S.Container>
    )
}
