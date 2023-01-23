import React from 'react';
import {useNavigate} from "react-router-dom";
import * as S from "./RegistrationsTable.style";
import {TableRow, TableRowTitle} from "@molecules";
import {RegistrationsTableProps} from "@organisms/RegistrationsTable/RegistrationsTable.interface";
import {titleList} from "@organisms/RegistrationsTable/RegistrationsTable.logic";
import {deleteRegistrationApiService} from "@service/api/registration.service";

export const RegistrationsTable: React.FC<RegistrationsTableProps> = ({data, filters}) => {
    const navigate = useNavigate();

    let filteredData: any[] = [];

    if (data) {
        filteredData = data;
    }

    if (!!filters?.register) {
        filteredData = filteredData.filter(row => String(row?.id)?.includes(filters.register));
    }

    if (!!filters?.studentName) {
        filteredData = filteredData.filter(row => row?.aluno?.nome.toLowerCase().includes(filters.studentName.toLowerCase()));
    }

    const handleRegistrationDeletion = async (id: number) => {
        await deleteRegistrationApiService(id)
            .then(() => { }).catch(err => console.error(err));
    }

    return (
        <S.Container>
            <TableRowTitle titles={titleList} />
            {filteredData?.map((row, index) => (
                <TableRow index={index} fields={[row?.id, row?.aluno?.nome, row?.aluno?.matriculas[0]?.ano]} status={row?.aluno?.ativo ? 'Ativo' : 'Inativo'}
                          onEyeClick={() => navigate("/gestao-escolar/visualizar-turmas/turma")}
                          onSwitchClick={() => {}}
                          onThrashClick={() => handleRegistrationDeletion(row?.id)}
                />
            ))}
        </S.Container>
    );
}
