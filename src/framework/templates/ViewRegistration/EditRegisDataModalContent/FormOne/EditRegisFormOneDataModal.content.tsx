import React, {useEffect, useState} from "react";
import {
    EditRegisDataModelProps
} from "@templates/ViewRegistration/EditRegisDataModalContent/EditRegisDataModal.interface";
import {anoOptions} from "@templates/NewRegistration/NewRegistration.logic";
import {SelectInLabel} from "@atoms";
import {getAllStudentsApiService, getClassesApiService} from "@service/api";
import {SearchSelect} from "@atoms/SearchSelect/SearchSelect.atom";
import {InputDate} from "@atoms/InputDate/InputDate.atom";
import moment from "moment/moment";

export const EditRegisFormOneDataModal: React.FC<EditRegisDataModelProps> = ({data, setData}) => {
    const [classes, setClasses] = useState<any>([]);
    const [students, setStudents] = useState([]);

    const [ano, setAno] = useState();
    const [turmaId, setTurmaId] = useState();
    const [alunoId, setAlunoId] = useState<any>();
    const [dataInicio, setDataInicio] = useState<any>(new Date());

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getClassesApiService()
            .then((response: any) => {
                const FORMATTED_DATA = response?.data.map((it: any) => {return {label: it.descricao, value: it.id}});
                setClasses([{label: 'Selecione a turma', value: ''}, ...FORMATTED_DATA]);
            }).catch(error => console.error(error));

        getAllStudentsApiService()
            .then((response: any) => setStudents(response?.data.map((it: any) => {return {label: it.nome, value: it.id}})))
            .catch(err => console.error(err));

        setLoading(false);
    }, []);

    useEffect(() => {
        console.log('change', {ano, turma: turmaId, aluno: alunoId, dataInicio: moment(dataInicio, 'DD/MM/YYYY').format('YYYY-MM-DD')});
        setData({ ...data, ano, turma_id: turmaId, aluno_id: alunoId, data_inicio: dataInicio });
    }, [ano, turmaId, alunoId, dataInicio]);

    useEffect(() => {
        console.log('form one oninit', data);
    }, []);

    return (
        <React.Fragment>
            <SelectInLabel label="Ano *" options={anoOptions}
                           onChange={(v: any) => {
                               setAno(v.value);
                           }} selectedValue={ano} />
            <SelectInLabel label="Turma *" options={classes}
                           onChange={(v: any) => {
                               setTurmaId(v.value);
                           }} selectedValue={turmaId} />
            <div style={{"width":"100%", "marginTop":"4px"}}>
                <SearchSelect label="Pesquisar aluno *" options={students} onChange={(v: any) => {
                    console.log(v)
                    setAlunoId(v.value);
                }} value={students.filter((it: any) => it?.id === alunoId)[0]} />
            </div>
            <InputDate label="Data de Início *" onChange={setDataInicio} value={dataInicio} />
        </React.Fragment>
    );
}
