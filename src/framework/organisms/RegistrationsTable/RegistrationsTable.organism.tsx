import React from 'react';
import * as S from "./RegistrationsTable.style";
import {TableRow, TableRowTitle} from "@molecules";
import {RegistrationsTableProps} from "@organisms/RegistrationsTable/RegistrationsTable.interface";
import {titleList} from "@organisms/RegistrationsTable/RegistrationsTable.logic";
import {deleteRegistrationApiService} from "@service/api/registration.service";

export const RegistrationsTable: React.FC<RegistrationsTableProps> = ({data, reload, setReload}) => {
    // const navigate = useNavigate();

    let filteredData: any[] = [];

    if (data) {
        filteredData = data;
    }

    // if (!!filters?.register) {
    //     filteredData = filteredData.filter(row => String(row?.id)?.includes(filters.register));
    // }

    // if (!!filters?.studentName) {
    //     filteredData = filteredData.filter(row => row?.aluno?.nome.toLowerCase().includes(filters.studentName.toLowerCase()));
    // }

    const handleRegistrationDeletion = async (id: number) => {
        await deleteRegistrationApiService(id)
            .then(() => setReload(!reload))
            .catch(err => console.error(err));
    }

    return (
        <S.Container>
            <TableRowTitle titles={titleList} />
            {filteredData?.map((row, index) => (
                <TableRow index={index} fields={[row?.id, row?.aluno?.nome, row?.ano]}
                          onEyeClick={() => {}} // navigate("/gestao-escolar/visualizar-turmas/turma")
                          onThrashClick={() => handleRegistrationDeletion(row?.id)}
                />
            ))}
        </S.Container>
    );
}
