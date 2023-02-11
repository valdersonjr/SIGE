import React from "react";
import { useNavigate } from "react-router-dom";
import { TableRow, TableRowTitle } from "~/framework/molecules";
import {activeClassApiService, inactiveClassApiService} from "~/service/api";
import { ClassesTableProps } from "./ClassesTable.interface";
import { titleList } from "./ClassesTable.logic";
import * as S from './ClassesTable.style';

export const ClassesTable: React.FC<ClassesTableProps> = (
    { data, reload, setReload, setConfirmRemoveModal, confirmRemoveModal, setIdToDelete }
) => {
    const navigate = useNavigate();

    const handleSwitchStatus = async (data: any) => {
        if (data?.ativo)
            await inactiveClassApiService(data?.id)
                .then(() => setReload(!reload)).catch(err => console.error(err));
        else await activeClassApiService(data?.id)
                .then(() => setReload(!reload)).catch(err => console.error(err));
    }

    return (
        <S.Container>
            <TableRowTitle titles={titleList} />
            {data.map((it, index) => (
                <TableRow index={index} fields={[it?.descricao, it?.ensino]} status={it.ativo ? "Ativo" : "Inativo"}
                    onSwitchClick={() => handleSwitchStatus(it)} switchValue={it?.ativo}
                    onEyeClick={() => navigate(`/gestao-escolar/visualizar-turmas/turma/${it.id}`)}
                    onThrashClick={() => {
                        setConfirmRemoveModal(!confirmRemoveModal);
                        setIdToDelete(it?.id);
                    }}
                />
            ))}
        </S.Container>
    )
}
