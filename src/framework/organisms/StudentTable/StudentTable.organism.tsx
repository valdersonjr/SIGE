import React from "react";
import {useNavigate} from "react-router-dom";
import {TableRow, TableRowTitle} from "~/framework/molecules";
import {StudentTableProps} from "./StudentTable.interface";
import {titleList} from './StudentTable.logic';
import * as S from './StudentTable.style';
import {setStudentActiveApiService, setStudentInactiveApiService} from "~/service/api";
import {toast} from "react-toastify";
import {NotFound} from "@organisms/NotFound/NotFound.organism";
import {Loading} from "@organisms/Loading/Loading.organism";
import {IRegister} from "~/models/datacore";

export const StudentTable: React.FC<StudentTableProps> = ({
                                                              data,
                                                              reload,
                                                              setReload,
                                                              confirmRemoveModal,
                                                              setConfirmRemoveModal,
                                                              setIdToDelete,
                                                              filtersLoading,
                                                              setFiltersLoading
                                                          }) => {
    const navigate = useNavigate();

    const handleActivityStatus = async (row: any) => {
        if (row?.ativo) await setStudentInactiveApiService(row?.id)
            .then((res: any) => {
                if (!!res?.message) return toast.error(res?.message);

                setReload(!reload);
            }).catch(err => toast.error(err));
        else await setStudentActiveApiService(row?.id)
            .then((res: any) => {
                if (!!res?.message) return toast.error(res?.message);

                setReload(!reload);
            }).catch(err => toast.error(err));
    }

    const handleDelete = (id: any) => {
        setConfirmRemoveModal(true);
        setIdToDelete(id);
    }

    const getClassType = (registers: IRegister[], yearFilter: string): string => {
        let classType = "Sem Turma Vinculada";

        registers.forEach(register => {
            if (register.ano === yearFilter) {
                classType = register.ensino;
            }
        });

        return classType;
    }

    const getPeriod = (registers: IRegister[], yearFilter: string): string => {
        let period = "Sem Turma Vinculada";

        registers.forEach(register => {
            if (register.ano === yearFilter) {
                if (register.descricao_periodo_turma) period = register.descricao_periodo_turma;
            }
        });

        return period;
    }

    return (
        <S.Container>
            <TableRowTitle titles={titleList}/>
            {!filtersLoading ? (data.length === 0 ? <NotFound description="Nenhum aluno encontrado..." /> :
            data.map((row, i) => (
                <TableRow key={row?.id} index={i}
                          fields={[{field: row?.nome, status: null}, {
                              field: "getPeriod(row.matriculas, String(filters.year))",
                              status: null
                          }, {field: "getClassType(row.matriculas, String(filters.year))", status: null}]}
                          status={row?.ativo ? "Ativo" : "Inativo"}
                          switchValue={row?.ativo}
                          onEyeClick={() => navigate(`/alunos/visualizar-aluno/${row?.id}`)}
                          onThrashClick={() => handleDelete(row?.id)}
                          onSwitchClick={() => handleActivityStatus(row)}/>
            ))) : <Loading height="40vh"/>}
        </S.Container>
    );
}
