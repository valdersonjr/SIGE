import React from "react";
import {useNavigate} from "react-router-dom";
import {TableRow, TableRowTitle} from "~/framework/molecules";
import {activeClassApiService, inactiveClassApiService} from "~/service/api";
import {ClassesTableProps} from "./ClassesTable.interface";
import {titleList} from "./ClassesTable.logic";
import * as S from './ClassesTable.style';
import {Loading} from "@organisms/Loading/Loading.organism";
import {NotFound} from "@organisms/NotFound/NotFound.organism";
import {toast} from "react-toastify";

export const ClassesTable: React.FC<ClassesTableProps> = ({
                                                              data,
                                                              reload,
                                                              setReload,
                                                              filtersLoading,
                                                              setConfirmRemoveModal,
                                                              setIdToDelete
                                                          }) => {
    const navigate = useNavigate();

    const handleSwitchStatus = async (data: any) => {
        if (data?.ativo) await inactiveClassApiService(data?.id)
            .then((res: any) => {
                if (!!res?.message) return toast.error(res?.message);

                setReload(!reload);
            }).catch(err => toast.error(err));
        else await activeClassApiService(data?.id)
            .then((res: any) => {
                if (!!res?.message) return toast.error(res?.message);

                setReload(!reload);
            }).catch(err => toast.error(err));
    }

    const handleDelete = (id: any) => {
        setConfirmRemoveModal(true);
        setIdToDelete(id);
    }

    return (
        <S.Container>
            <TableRowTitle titles={titleList}/>
            {!filtersLoading ? (data.length === 0 ? <NotFound description="Nenhuma turma encontrada..."/> : (
                data.map((it, index) => (
                    <TableRow index={index}
                              fields={[{field: it?.descricao, status: null}, {field: it?.ensino, status: null}]}
                              status={it.ativo ? "Ativo" : "Inativo"}
                              onSwitchClick={() => handleSwitchStatus(it)} switchValue={it?.ativo}
                              onEyeClick={() => navigate(`/gestao-escolar/visualizar-turmas/turma/${it.id}`)}
                              onThrashClick={() => handleDelete(it?.id)}
                    />
                ))
            )) : <Loading height="40vh"/>}
        </S.Container>
    )
}
