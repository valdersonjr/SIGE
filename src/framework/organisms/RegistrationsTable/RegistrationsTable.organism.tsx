import React from 'react';
import * as S from "./RegistrationsTable.style";
import {TableRow, TableRowTitle} from "@molecules";
import {RegistrationsTableProps} from "@organisms/RegistrationsTable/RegistrationsTable.interface";
import {titleList} from "@organisms/RegistrationsTable/RegistrationsTable.logic";
import {useNavigate} from "react-router-dom";
import {Loading} from "@organisms/Loading/Loading.organism";
import {NotFound} from "@organisms/NotFound/NotFound.organism";

export const RegistrationsTable: React.FC<RegistrationsTableProps> = ({
                                                                          data,
                                                                          setConfirmRemoveModal,
                                                                          setIdToDelete,
                                                                          filtersLoading
                                                                      }) => {
    const navigate = useNavigate();

    const handleDelete = (id: any) => {
        setConfirmRemoveModal(true);
        setIdToDelete(id);
    }

    return (
        <S.Container>
            <TableRowTitle titles={titleList}/>
            {!filtersLoading ? (data.length === 0 ? <NotFound description="Nenhuma matrícula encontrada..."/> : (
                data.map((row, index) => (
                    <TableRow index={index} fields={[{field: row?.id, status: null}, {
                        field: row?.aluno?.nome,
                        status: row?.aluno?.ativo
                    }, {field: row?.ano, status: null}]}
                              onEyeClick={() => navigate(`/gestao-escolar/visualizar-matriculas/matricula/${row.id}`)}
                              onThrashClick={() => handleDelete(row?.id)}/>
                ))
            )) : <Loading height="40vh"/>}
        </S.Container>
    );
}
