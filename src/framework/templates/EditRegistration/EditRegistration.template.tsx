import React, {useEffect, useState} from "react";
import {NewRegistrationProps} from "@templates/NewRegistration/NewRegistration.interface";
import * as S from "@templates/NewRegistration/NewRegistration.style";
import {Header, InputInLabel} from "@molecules";
import {Button, SelectInLabel, VariantButtonEnum} from "@atoms";
import {anoOptions, formaPagamentoOptions, simOuNaoOptions} from "@templates/NewRegistration/NewRegistration.logic";
import {SearchSelect} from "@atoms/SearchSelect/SearchSelect.atom";
import {InputDate} from "@atoms/InputDate/InputDate.atom";
import {removeCurrencyPrefix} from "~/utils/removeCurrencyPrefix";
import moment from "moment";
import {
    getActivitiesApiService,
    getAllStudentsApiService,
    getClassesApiService,
    getRegistrationApiService
} from "@service/api";
import {useParams} from "react-router-dom";

export const EditRegistration: React.FC<NewRegistrationProps> = ({handleSubmit}) => {
    const { id } = useParams();

    const [data, setData] = useState<any>();

    const [classes, setClasses] = useState<any>([]);
    const [students, setStudents] = useState([]);
    const [activities, setActivities] = useState([]);

    const [ano, setAno] = useState('');
    const [turma, setTurma] = useState();
    const [aluno, setAluno] = useState<any>();
    const [dataInicio, setDataInicio] = useState<Date>(new Date());
    const [divulgacaoDadosAutorizada, setDivulgacaoDadosAutorizada] = useState('FALSE');
    const [divulgacaoImagemRede, setDivulgacaoImagemRede] = useState('FALSE');
    const [optouAlmoco, setOptouAlmoco] = useState<any>();
    const [optouJantar, setOptouJantar] = useState<any>();
    const [valorMatricula, setValorMatricula] = useState('');
    const [valorMensalidade, setValorMensalidade] = useState('');
    const [valorRefeicao, setValorRefeicao] = useState('');
    const [valorHoraExtra, setValorHoraExtra] = useState('');
    const [valorProjetoNutricional, setValorProjetoNutricional] = useState('');
    const [valorMaterialDidatico, setValorMaterialDidatico] = useState('');
    const [valorMaterialPedagogico, setValorMaterialPedagogico] = useState('');
    const [formaPagamentoParcelas, setFormaPagamentoParcelas] = useState('');
    const [atividades, setAtividades] = useState([]);

    useEffect(() => {
        getClassesApiService()
            .then((response: any) => {
                const FORMATTED_DATA = response.data.map((it: any) => {return {label: it.descricao, value: it.id}});
                setClasses([{label: 'Selecione a turma', value: ''}, ...FORMATTED_DATA]);
            }).catch(error => console.error(error));

        getAllStudentsApiService()
            .then((response: any) => setStudents(response.data.map((it: any) => {return {label: it.nome, value: it.id}})))
            .catch(err => console.error(err));

        getActivitiesApiService()
            .then((response: any) => setActivities(response.data.filter((it: any) => !!it?.ativo)))
            .catch(err => console.error(err));

        getRegistrationApiService(Number(id))
            .then(({data}) => setData(data))
            .catch(err => console.error(err));
    }, []);

    const isActivitySelected = (value: string): boolean => value === 'TRUE';

    const handleActivitiesSelected = (activity: any, value: string) => {
        if (isActivitySelected(value)) {
            // @ts-ignore
            setAtividades([...atividades, activity?.id]);
        }
    }

    return (
        <S.Container>
            <S.Header>
                <Header title="Editar Matrícula" />
            </S.Header>
            <S.Body>
                <S.InputSection>
                    <S.InputContainer>
                        <SelectInLabel label="Ano *" options={anoOptions} onChange={(v: any) => setAno(v.value)} selectedValue={ano} />
                        <SelectInLabel label="Turma *" options={classes} onChange={(v: any) => setTurma(v.value)} selectedValue={turma} />
                    </S.InputContainer>
                    <S.InputContainer>
                        <div style={{"width":"100%", "marginTop":"4px"}}>
                            <SearchSelect label="Pesquisar aluno *" options={students} onChange={(v: any) => setAluno(v)} value={aluno} />
                        </div>
                        <InputDate label="Data de Início *" onChange={setDataInicio} value={dataInicio} />
                    </S.InputContainer>
                    <S.InputContainer>
                        <SelectInLabel label="Autoriza divulgação de dados pessoais"
                                       selectedValue={divulgacaoDadosAutorizada} onChange={(v: any) => setDivulgacaoDadosAutorizada(v.value)}
                                       options={simOuNaoOptions} />
                        <SelectInLabel label="Autoriza a divulgação de sua imagem nas redes sociais da escola"
                                       selectedValue={divulgacaoImagemRede} onChange={(v: any) => setDivulgacaoImagemRede(v.value)}
                                       options={simOuNaoOptions} />
                    </S.InputContainer>
                    <S.InputContainer>
                        <SelectInLabel label="Almoço" selectedValue={optouAlmoco} onChange={(v: any) => setOptouAlmoco(v.value)}
                                       options={simOuNaoOptions} />
                        <SelectInLabel label="Jantar" selectedValue={optouJantar} onChange={(v: any) => setOptouJantar(v.value)}
                                       options={simOuNaoOptions} />
                    </S.InputContainer>
                    <S.InputContainer>
                        <InputInLabel label="Valor matrícula *" placeholder="R$" type="currency"
                                      value={valorMatricula} onChange={setValorMatricula} />
                        <InputInLabel label="Valor mensalidade *" value={valorMensalidade} placeholder="R$"
                                      onChange={setValorMensalidade} type="currency" />
                        <InputInLabel label="Valor refeição" value={valorRefeicao} placeholder="R$"
                                      onChange={setValorRefeicao} type="currency" />
                    </S.InputContainer>
                    <S.InputContainer>
                        <InputInLabel label="Valor material didático" value={valorMaterialDidatico} placeholder="R$"
                                      onChange={setValorMaterialDidatico} type="currency" />
                        <InputInLabel label="Valor material pedagógico" value={valorMaterialPedagogico} placeholder="R$"
                                      onChange={setValorMaterialPedagogico} type="currency" />
                        <InputInLabel label="Valor projeto nutricional" value={valorProjetoNutricional} placeholder="R$"
                                      onChange={setValorProjetoNutricional} type="currency" />
                    </S.InputContainer>
                    <S.InputContainer>
                        <InputInLabel label="Valor hora extra" value={valorHoraExtra} placeholder="R$"
                                      onChange={setValorHoraExtra} type="currency" />
                        <SelectInLabel label="Forma de pagamento *" options={formaPagamentoOptions}
                                       selectedValue={formaPagamentoParcelas} onChange={(v: any) => setFormaPagamentoParcelas(v.value)} />
                    </S.InputContainer>
                    <S.GridContainer>
                        {activities.map((it: any) => (
                            <SelectInLabel key={'activity-'+it.id} label={it?.descricao} options={simOuNaoOptions}
                                           onChange={(select: any) => handleActivitiesSelected(it, select.value)} />
                        ))}
                    </S.GridContainer>
                </S.InputSection>

                <S.ButtonContainer>
                    <Button label="Salvar Matrícula" variant={VariantButtonEnum.SECONDARY} justifyText="center"
                            onClick={(e) => handleSubmit && handleSubmit(e, {
                                id: Number(id),
                                turma_id: !!turma ? Number(turma) : data?.turma?.id,
                                aluno_id: !!aluno ? aluno?.value : data?.aluno?.id,
                                ano: !!ano ? ano : data?.ano,
                                divulgacao_dados_autorizada: divulgacaoDadosAutorizada === 'TRUE',
                                divulgacao_imagem_rede: divulgacaoImagemRede === 'TRUE',
                                valor_matricula: !!valorMatricula ? removeCurrencyPrefix(valorMatricula) : data?.valor_matricula,
                                valor_mensalidade: !!valorMensalidade ? removeCurrencyPrefix(valorMensalidade) : data?.preco_negociado?.valor_mensalidade,
                                valor_refeicao: removeCurrencyPrefix(valorRefeicao),
                                valor_hora_extra: removeCurrencyPrefix(valorHoraExtra),
                                valor_projeto_nutricional: removeCurrencyPrefix(valorProjetoNutricional),
                                valor_material_didatico: removeCurrencyPrefix(valorMaterialDidatico),
                                valor_material_pedagogico: removeCurrencyPrefix(valorMaterialPedagogico),
                                data_inicio: !!dataInicio ? moment(dataInicio, 'DD/MM/YYYY').format('YYYY-MM-DD') : data?.data_inicio,
                                forma_pagamento_parcelas: !!formaPagamentoParcelas ? formaPagamentoParcelas : data?.forma_pagamento_parcelas,
                                optou_almoco: optouAlmoco === 'TRUE',
                                optou_jantar: optouJantar === 'TRUE',
                                atividades
                            })} />
                </S.ButtonContainer>
            </S.Body>
        </S.Container>
    );
}
