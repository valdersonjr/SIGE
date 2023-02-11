import React, {useEffect, useState} from "react";
import * as S from "./ViewRegistration.style";
import {ViewRegistrationProps} from "@templates/ViewRegistration/ViewRegistration.interface";
import {getRegistrationApiService} from "@service/api";
import {Header} from "@molecules";
import {Dropdown} from "@organisms";
import {PostIt} from "@atoms";
import {useNavigate} from "react-router-dom";

const ViewRegistration: React.FC<ViewRegistrationProps> = ({registrationId}) => {
    const navigate = useNavigate();

    const [data, setData] = useState<any>();

    useEffect(() => {
        getRegistrationApiService(registrationId)
            .then(({data}) => {
                setData({
                    turma: data?.turma, aluno: data?.aluno, ano: data?.ano,
                    data_inicio: data?.data_inicio,
                    divulgacao_dados_autorizada: data?.divulgacao_dados_autorizada,
                    divulgacao_imagem_rede: data?.divulgacao_imagem_rede,
                    optou_almoco: data?.optou_almoco,
                    optou_jantar: data?.optou_jantar,
                    valor_matricula: data?.valor_matricula,
                    valor_mensalidade: data?.preco_negociado?.valor_mensalidade,
                    valor_hora_extra: data?.preco_negociado?.valor_hora_extra,
                    valor_projeto_nutricional: data?.preco_negociado?.valor_projeto_nutricional,
                    valor_material_didatico: data?.preco_negociado?.valor_material_didatico,
                    valor_material_pedagogico: data?.preco_negociado?.valor_material_pedagogico,
                    valor_refeicao: data?.preco_negociado?.valor_refeicao,
                    forma_pagamento_parcelas: data?.forma_pagamento_parcelas
                });
            })
            .catch(err => console.error(err));
    }, []);

    const translateYesOrNo = (value: boolean): string => { return value ? 'Sim' : 'Não'; }

    return (
        <S.Container>
            <Header title="Matrícula" buttonText="Editar Matrícula" onButtonClick={() => navigate(`/gestao-escolar/editar-matricula/${registrationId}`)} />

            <Dropdown title="Dados da Matrícula">
                <PostIt title="Ano" content={[data?.ano]} />
                <PostIt title="Turma" content={[data?.turma?.descricao]} />
                <PostIt title="Aluno" content={[data?.aluno?.nome]} />
                <PostIt title="Data de Início" content={[data?.data_inicio]} />
            </Dropdown>

            <Dropdown title="Dados do Aluno">
                <PostIt title="Autoriza divulgação de dados pessoais" content={[translateYesOrNo(data?.divulgacao_dados_autorizada)]} />
                <PostIt title="Autoriza a divulgação de sua imagem" content={[translateYesOrNo(data?.divulgacao_imagem_rede)]} />
                <PostIt title="Almoço" content={[translateYesOrNo(data?.optou_almoco)]} />
                <PostIt title="Jantar" content={[translateYesOrNo(data?.optou_jantar)]} />
            </Dropdown>

            <Dropdown title="Valores de Matrícula">
                <PostIt title="Valor matrícula" content={[data?.valor_matricula]} />
                <PostIt title="Valor mensalidade" content={[data?.valor_mensalidade]} />
                <PostIt title="Valor hora extra" content={[data?.valor_hora_extra]} />
                <PostIt title="Forma de pagamento" content={[data?.forma_pagamento_parcelas]} />
            </Dropdown>

            <Dropdown title="Valores Extras">
                <PostIt title="Valor refeição" content={[data?.valor_refeicao]} />
                <PostIt title="Valor material didático" content={[data?.valor_material_didatico]} />
                <PostIt title="Valor material pedagógico" content={[data?.valor_material_pedagogico]} />
                <PostIt title="Valor projeto nutricional" content={[data?.valor_projeto_nutricional]} />
            </Dropdown>
        </S.Container>
    );
}

export default ViewRegistration;
