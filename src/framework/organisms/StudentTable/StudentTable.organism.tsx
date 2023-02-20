import React, {useEffect} from "react";

import {useNavigate} from "react-router-dom";

import {TableRow, TableRowTitle} from "~/framework/molecules";

import {StudentTableProps} from "./StudentTable.interface";
import {titleList} from './StudentTable.logic';
import * as S from './StudentTable.style';

import {getClassApiService, setStudenActivetApiService, setStudenInactivetApiService} from "~/service/api";
import {IRegister} from "~/models/datacore";

export const StudentTable: React.FC<StudentTableProps> = ({
                                                              data,
                                                              filters,
                                                              reload,
                                                              setReload,
                                                              confirmRemoveModal,
                                                              setConfirmRemoveModal,
                                                              setIdToDelete
                                                          }) => {
    const navigate = useNavigate();

    useEffect(() => {
        getClassApiService(2).then((response: any) => {
            if (response.message) {
                console.log(response.message);
            }
        })
    }, [data]);

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

    const handleSwitchClick = (id: number, active: boolean) => {
        if (active) {
            setStudenInactivetApiService(id).then((response: any) => {
                if (response.message) {
                    console.log(response.message);
                } else {
                    setReload && setReload(!reload);
                }
            })
        } else {
            setStudenActivetApiService(id).then((response: any) => {
                if (response.message) {
                    console.log(response.message);
                } else {
                    setReload && setReload(!reload);
                }
            })
        }
    }

    return (
        <S.Container>
            <TableRowTitle titles={titleList}/>
            {data && data.length > 0 && data.map((row, index) => {
                return (
                    <TableRow key={row.id} index={index}
                              fields={[{
                                  field: row.nome,
                                  status: null
                              }, {
                                  field: getPeriod(row.matriculas, String(filters.year)),
                                  status: null
                              }, {field: getClassType(row.matriculas, String(filters.year)), status: null}]}
                              status={row.ativo ? "Ativo" : "Inativo"}
                              switchValue={row.ativo}
                              onEyeClick={() => navigate(`/alunos/visualizar-aluno/${row.id}`)}
                              onThrashClick={() => {
                                  setConfirmRemoveModal(!confirmRemoveModal);
                                  setIdToDelete(row.id);
                              }}
                              onSwitchClick={() => handleSwitchClick(row.id, row.ativo)}/>
                )
            })}
        </S.Container>
    )
}
