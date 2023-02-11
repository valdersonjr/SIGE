import React, {useEffect, useState} from "react";
import * as S from "./ViewRegistration.style";
import {ViewRegistrationProps} from "@templates/ViewRegistration/ViewRegistration.interface";
import {getRegistrationApiService, putRegistrationApiService} from "@service/api";
import {Header} from "@molecules";
import {Dropdown} from "@organisms";
import {PostIt} from "@atoms";
import EditClassData from "@organisms/Modals/EditClassData/EditClassData.organism";
import {EditRegisFormOneDataModal} from "@templates/ViewRegistration/EditRegisDataModalContent/FormOne/EditRegisFormOneDataModal.content";
import {
    EditRegisFormTwoDataModal
} from "@templates/ViewRegistration/EditRegisDataModalContent/FormTwo/EditRegisFormTwoDataModal.content";
import {
    EditRegisFormThreeDataModal
} from "@templates/ViewRegistration/EditRegisDataModalContent/FormThree/EditRegisFormThreeDataModal.content";
import {
    EditRegisFormFourDataModal
} from "@templates/ViewRegistration/EditRegisDataModalContent/FormFour/EditRegisFormFourDataModal.content";
import {removeCurrencyPrefix} from "~/utils/removeCurrencyPrefix";
import moment from "moment";

const ViewRegistration: React.FC<ViewRegistrationProps> = ({registrationId}) => {
    const [formOneModalState, setFormOneModalState] = useState(false);
    const [formTwoModalState, setFormTwoModalState] = useState(false);
    const [formThreeModalState, setFormThreeModalState] = useState(false);
    const [formFourModalState, setFormFourModalState] = useState(false);
    const [data, setData] = useState<any>();
    const [dataToSave, setDataToSave] = useState<any>();
    const [canSave, setCanSave] = useState(false);
    const [reload, setReload] = useState(false);

    const [alunoCompleto, setAlunoCompleto] = useState<any>();
    const [turmaCompleto, setTurmaCompleto] = useState<any>();

    useEffect(() => {
        getRegistrationApiService(registrationId)
            .then(({data}) => {
                console.log('reload')
                // console.log('DATA INICIAL', data)
                setAlunoCompleto(data?.aluno);
                setTurmaCompleto(data?.turma);
                setDataToSave({
                    turma_id: data?.turma?.id, aluno_id: data?.aluno?.id, ano: data?.ano,
                    data_inicio: data?.data_inicio,
                    divulgacao_dados_autorizada: data?.divulgacao_dados_autorizada,
                    divulgacao_imagem_rede: data?.divulgacao_imagem_rede,
                    optou_almoco: data?.optou_almoco,
                    optou_jantar: data?.optou_jantar,
                    valor_matricula: data?.valor_matricula,
                    valor_mensalidade: data?.turma?.valor_mensalidade,
                    valor_hora_extra: data?.turma?.valor_hora_extra,
                    valor_projeto_nutricional: data?.turma?.valor_projeto_nutricional,
                    valor_material_didatico: data?.turma?.valor_material_didatico,
                    valor_material_pedagogico: data?.turma?.valor_material_pedagogico,
                    valor_refeicao: data?.turma?.valor_refeicao,
                    forma_pagamento_parcelas: data?.forma_pagamento_parcelas
                });
                setData(dataToSave);
                // console.log('dataToSave setted', dataToSave)
            })
            .catch(err => console.error(err));
    }, [reload]);

    // mudar forma de editar fluxo

    useEffect(() => {
        if (canSave) {
            console.log('dataToSave', dataToSave);
            console.log('data', data);
            putRegistrationApiService(registrationId, {
                turma_id: Number((!!dataToSave?.turma_id ? dataToSave?.turma_id : data?.turma_id)),
                aluno_id: (!!dataToSave?.aluno_id ? dataToSave?.aluno_id : data?.aluno_id),
                ano: (!!dataToSave?.ano ? dataToSave?.ano : data?.ano),
                divulgacao_dados_autorizada: (!!dataToSave?.divulgacao_dados_autorizada ? dataToSave?.divulgacao_dados_autorizada : data?.divulgacao_dados_autorizada),
                divulgacao_imagem_rede: (!!dataToSave?.divulgacao_imagem_rede ? dataToSave?.divulgacao_imagem_rede : data?.divulgacao_imagem_rede),
                valor_matricula: removeCurrencyPrefix((!!dataToSave?.valor_matricula ? dataToSave?.valor_matricula : data?.valor_matricula)),
                valor_mensalidade: removeCurrencyPrefix((!!dataToSave?.valor_mensalidade ? dataToSave?.valor_mensalidade : data?.valor_mensalidade)),
                valor_refeicao: removeCurrencyPrefix((!!dataToSave?.valor_refeicao ? dataToSave?.valor_refeicao : data?.valor_refeicao)),
                valor_hora_extra: removeCurrencyPrefix((!!dataToSave?.valor_hora_extra ? dataToSave?.valor_hora_extra : data?.valor_hora_extra)),
                valor_projeto_nutricional: removeCurrencyPrefix((!!dataToSave?.valor_projeto_nutricional ? dataToSave?.valor_projeto_nutricional : data?.valor_projeto_nutricional)),
                valor_material_didatico: removeCurrencyPrefix((!!dataToSave?.valor_material_didatico ? dataToSave?.valor_material_didatico : data?.valor_material_didatico)),
                valor_material_pedagogico: removeCurrencyPrefix((!!dataToSave?.valor_material_pedagogico ? dataToSave?.valor_material_pedagogico : data?.valor_material_pedagogico)),
                data_inicio: moment((!!dataToSave?.data_inicio || dataToSave?.data_inicio !== "Invalid date" ? dataToSave?.data_inicio : data?.data_inicio), 'DD/MM/YYYY').format('YYYY-MM-DD'),
                forma_pagamento_parcelas: (!!dataToSave?.forma_pagamento_parcelas ? dataToSave?.forma_pagamento_parcelas : data?.forma_pagamento_parcelas),
                optou_almoco: (!!dataToSave?.optou_almoco ? dataToSave?.optou_almoco : data?.optou_almoco),
                optou_jantar: (!!dataToSave?.optou_jantar ? dataToSave?.optou_jantar : data?.optou_jantar),
                atividades: []
            }).then((r: any) => {
                if (!r?.errors) {
                    console.log('funcionou AAAAAAAAAAA', r);
                    setData({
                        turma_id: data?.turma?.id, aluno_id: data?.aluno?.id, ano: data?.ano,
                        data_inicio: data?.data_inicio,
                        divulgacao_dados_autorizada: data?.divulgacao_dados_autorizada,
                        divulgacao_imagem_rede: data?.divulgacao_imagem_rede,
                        optou_almoco: data?.optou_almoco,
                        optou_jantar: data?.optou_jantar,
                        valor_matricula: data?.valor_matricula,
                        valor_mensalidade: data?.turma?.valor_mensalidade,
                        valor_hora_extra: data?.turma?.valor_hora_extra,
                        valor_projeto_nutricional: data?.turma?.valor_projeto_nutricional,
                        valor_material_didatico: data?.turma?.valor_material_didatico,
                        valor_material_pedagogico: data?.turma?.valor_material_pedagogico,
                        valor_refeicao: data?.turma?.valor_refeicao,
                        forma_pagamento_parcelas: data?.forma_pagamento_parcelas
                    });
                    setDataToSave(data);
                }
            }).catch(err => console.error(err));
            setCanSave(false);
        }
        setReload(!reload);
    }, [canSave]);


    const translateYesOrNo = (value: boolean): string => { return value ? 'Sim' : 'Não'; }

    return (
        <S.Container>
            {formOneModalState &&
              <EditClassData title="Editar Dados da Matrícula"
                             modalState={formOneModalState} setModalState={setFormOneModalState}
                             setCanSave={setCanSave}>
                <EditRegisFormOneDataModal data={dataToSave} setData={setDataToSave} />
              </EditClassData>}
            {formTwoModalState &&
              <EditClassData title="Editar Dados do Aluno"
                             modalState={formTwoModalState} setModalState={setFormTwoModalState}
                             setCanSave={setCanSave}>
                <EditRegisFormTwoDataModal data={dataToSave} setData={setDataToSave} />
              </EditClassData>}
            {formThreeModalState &&
              <EditClassData title="Editar Valores de Matrícula"
                             modalState={formThreeModalState} setModalState={setFormThreeModalState}
                             setCanSave={setCanSave}>
                <EditRegisFormThreeDataModal data={dataToSave} setData={setDataToSave} />
              </EditClassData>}
            {formFourModalState &&
              <EditClassData title="Editar Valores Extras"
                             modalState={formFourModalState} setModalState={setFormFourModalState}
                             setCanSave={setCanSave}>
                <EditRegisFormFourDataModal data={dataToSave} setData={setDataToSave} />
              </EditClassData>}

            <Header title="Matrícula" />

            <Dropdown title="Dados da Matrícula" buttonText="Editar Dados" onButtonClick={() => setFormOneModalState(!formOneModalState)}>
                <PostIt title="Ano" content={[data?.ano]} />
                <PostIt title="Turma" content={[turmaCompleto?.descricao]} />
                <PostIt title="Aluno" content={[alunoCompleto?.nome]} />
                <PostIt title="Data de Início" content={[data?.data_inicio]} />
            </Dropdown>

            <Dropdown title="Dados do Aluno" buttonText="Editar Dados" onButtonClick={() => setFormTwoModalState(!formTwoModalState)}>
                <PostIt title="Autoriza divulgação de dados pessoais" content={[translateYesOrNo(data?.divulgacao_dados_autorizada)]} />
                <PostIt title="Autoriza a divulgação de sua imagem" content={[translateYesOrNo(data?.divulgacao_imagem_rede)]} />
                <PostIt title="Almoço" content={[translateYesOrNo(data?.optou_almoco)]} />
                <PostIt title="Jantar" content={[translateYesOrNo(data?.optou_jantar)]} />
            </Dropdown>

            <Dropdown title="Valores de Matrícula" buttonText="Editar Dados" onButtonClick={() => setFormThreeModalState(!formThreeModalState)}>
                <PostIt title="Valor matrícula" content={[data?.valor_matricula]} />
                <PostIt title="Valor mensalidade" content={[data?.valor_mensalidade]} />
                <PostIt title="Valor hora extra" content={[data?.valor_hora_extra]} />
                <PostIt title="Forma de pagamento" content={[data?.forma_pagamento_parcelas]} />
            </Dropdown>

            <Dropdown title="Valores Extras" buttonText="Editar Dados" onButtonClick={() => setFormFourModalState(!formFourModalState)}>
                <PostIt title="Valor refeição" content={[data?.valor_refeicao]} />
                <PostIt title="Valor material didático" content={[data?.valor_material_didatico]} />
                <PostIt title="Valor material pedagógico" content={[data?.valor_material_pedagogico]} />
                <PostIt title="Valor projeto nutricional" content={[data?.valor_projeto_nutricional]} />
            </Dropdown>
        </S.Container>
    );
}

export default ViewRegistration;
