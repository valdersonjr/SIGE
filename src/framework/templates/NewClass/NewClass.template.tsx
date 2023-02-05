import React, { useEffect, useState } from 'react';

import { NewClassProps } from "@templates/NewClass/NewClass.interface";

import { Button, SelectInLabel, Title, VariantButtonEnum } from "@atoms";
import { Header, InputInLabel } from "@molecules";

import * as S from './NewClass.style';
import {ensinoOptions} from "~/utils/ensino-options";
import {getPeriodsApiService} from "@service/api/period.service";
import {removeCurrencyPrefix, replaceCommaWithDot} from "~/utils/removeCurrencyPrefix";

export const NewClass: React.FC<NewClassProps> = ({ handleSubmit }) => {
    const [periodo, setPeriodo] = useState('');
    const [ensino, setEnsino] = useState('');
    const [descricao, setDescricao] = useState('');
    const [mensalidade, setMensalidade] = useState('');
    const [refeicao, setRefeicao] = useState('');
    const [horaExtra, setHoraExtra] = useState('');
    const [nutricional, setNutricional] = useState('');
    const [didatico, setDidatico] = useState('');
    const [pedagogico, setPedagogico] = useState('');
    const [periodoOptions, setPeriodoOptions] = useState<any[]>([]);

    useEffect(() => {
        getPeriodsApiService()
            .then((response: any) => {
                setPeriodoOptions([{label: '', value: ''}, ...response?.data?.map((it: any) => {
                    return {label: `${it?.descricao} - ${it?.horario_entrada} às ${it?.horario_saida}`, value: it?.id};
                })]);
            }).catch(err => console.error(err));
    }, []);

    const sumTotal = (): number => {
        return removeCurrencyPrefix(mensalidade) + removeCurrencyPrefix(refeicao) +
            removeCurrencyPrefix(horaExtra) + removeCurrencyPrefix(nutricional) +
            removeCurrencyPrefix(didatico) + removeCurrencyPrefix(pedagogico);
    }

    return (
        <S.Container>
            <S.Header>
                <Header title="Nova Turma" />
            </S.Header>
            <S.Body>
                <S.InputSection>
                    <Title>Dados da Turma</Title>
                    <S.InputContainer>
                        <SelectInLabel label="Ensino" options={ensinoOptions}
                                       onChange={(select: any) => setEnsino(select?.value)} />
                        <InputInLabel required label="Nome" value={descricao} placeholder="Digite aqui..."
                                      onChange={setDescricao} />
                        <SelectInLabel label="Período" options={periodoOptions}
                                       onChange={(select: any) => setPeriodo(select?.value)} />
                    </S.InputContainer>
                </S.InputSection>
                <S.InputSection>
                    <Title>Dados Financeiros</Title>
                    <S.InputContainer>
                        <InputInLabel type="currency" label="Valor mensalidade" value={mensalidade}
                                      placeholder="R$" onChange={setMensalidade} />
                        <InputInLabel type="currency" label="Valor refeição" value={refeicao}
                                      placeholder="R$" onChange={setRefeicao} />
                        <InputInLabel type="currency" label="Valor hora extra" value={horaExtra}
                                      placeholder="R$" onChange={setHoraExtra} />
                    </S.InputContainer>
                    <S.InputContainer>
                        <InputInLabel type="currency" label="Valor projeto nutricional" value={nutricional}
                                      placeholder="R$" onChange={setNutricional} />
                        <InputInLabel type="currency" label="Valor material didático" value={didatico}
                                      placeholder="R$" onChange={setDidatico} />
                        <InputInLabel type="currency" label="Valor material pedagógico" value={pedagogico}
                                      placeholder="R$" onChange={setPedagogico} />
                    </S.InputContainer>
                    <S.InputContainer>
                        <InputInLabel label="Valor total" disabled={true} value={`R$ ${(replaceCommaWithDot(sumTotal()))}`}
                                      placeholder="R$" onChange={() => {}} />
                    </S.InputContainer>
                </S.InputSection>

                <S.ButtonContainer>
                    <Button label="Criar turma" variant={VariantButtonEnum.SECONDARY} justifyText="center"
                            onClick={(event) => handleSubmit && handleSubmit(event, {
                                periodo: Number(periodo), ensino, descricao, mensalidade: removeCurrencyPrefix(mensalidade),
                                refeicao: removeCurrencyPrefix(refeicao), horaExtra: removeCurrencyPrefix(horaExtra),
                                nutricional: removeCurrencyPrefix(nutricional), didatico: removeCurrencyPrefix(didatico),
                                pedagogico: removeCurrencyPrefix(pedagogico)
                            })} />
                </S.ButtonContainer>
            </S.Body>
        </S.Container>
    );
}
