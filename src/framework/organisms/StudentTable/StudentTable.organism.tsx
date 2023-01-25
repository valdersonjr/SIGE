import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { TableRow, TableRowTitle } from "~/framework/molecules";

import { StudentTableProps } from "./StudentTable.interface";
import { titleList } from './StudentTable.logic';
import * as S from './StudentTable.style';

import { deleteStudentApiService, getClassApiService, setStudenActivetApiService, setStudenInactivetApiService } from "~/service/api";
import { IRegister, ResponseStudent } from "~/models/datacore";


export const StudentTable: React.FC<StudentTableProps> = ({ data, filters, reload, setReload }) => {
    const navigate = useNavigate();
    const [deletedStudentIdArray, setDeletedStudentIdArray] = useState<number[]>([]);

    let filteredData:ResponseStudent[] = [];

    if(data){
        filteredData = data;
    }

    useEffect(() => {
        getClassApiService(2).then((response:any) => {
            if(response.message){
                console.log(response.message);
            }
        })
    },[data]);

    if (filters.name !== "" && filters.name) {
        filteredData = filteredData.filter((row) => {
            return row.nome.includes(filters.name);
        });
    }

    // if (filters.period !== "" && filters.period) {
    //     filteredData = filteredData.filter((row) => {
    //         return row.period === filters.period;
    //     });
    // }

    if (filters.class !== "" && filters.class) {
        filteredData = filteredData.filter((row) => {
            return row.matriculas[0].descricao_turma === filters.class;
        });
    }

    if (filters.status !== "" && filters.status) {
        filteredData = filteredData.filter((row) => {
            const status = filters.status === "Ativo" ? true : false;
            return row.ativo === status;
        });
    }


    const getClassType = (registers: IRegister[], yearFilter:string):string => {
        let classType = "Sem Turma Vinculada";
        
        registers.forEach(register => {
            if(register.ano === yearFilter){
                classType = register.descricao_turma;
            }
        });

        return classType;
    }

    const handleDeleteStudent = async (id:number, name:string) => {
        deleteStudentApiService(id).then((response:any) => {
            if(response.message){
                alert(`Não foi possível excluir ${name}`);
            }
            else {
                setDeletedStudentIdArray([...deletedStudentIdArray, id]);
            }
        })
    }

    const handleSwitchClick = (id:number, active:boolean) => {
        if(active){
            setStudenInactivetApiService(id).then((response:any) => {
                if(response.message){
                    console.log(response.message);
                }
                else {
                    setReload && setReload(!reload);
                }
            })
        }
        else {
            setStudenActivetApiService(id).then((response:any) => {
                if(response.message){
                    console.log(response.message);
                }
                else {
                    setReload && setReload(!reload);
                }
            })
        }
    }

    return (
        <S.Container>
            <TableRowTitle titles={titleList} />
            {filteredData.length > 0 && filteredData.map((row, index) => {
                if(!deletedStudentIdArray.includes(row.id)){
                    return(
                        <TableRow key={row.id} index={index} fields={[row.nome, "-", getClassType(row.matriculas, "2022")]} status={row.ativo ? "Ativo" : "Inativo"}
                            switchValue={row.ativo}
                            onEyeClick={() => navigate(`/alunos/visualizar-aluno/${row.id}`)}
                            onThrashClick={() => handleDeleteStudent(row.id, row.nome)} 
                            onSwitchClick={() => handleSwitchClick(row.id, row.ativo)} />
                    )
                }
            })}
        </S.Container>
    )
}
