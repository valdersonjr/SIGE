import React, { useEffect, useState } from "react";

import { PostIt } from "~/framework/atoms";
import { Header, InputInLabel } from "~/framework/molecules";
import { Dropdown } from "~/framework/organisms";
import EditUserData from "~/framework/organisms/Modals/EditUserData/EditUserData.organism";

import { updateUserApiService } from "~/service/api";

import { ViewUserProps } from "./ViewUser.interface";
import * as S from "./ViewUser.style";
import {Loading} from "@organisms/Loading/Loading.organism";


const ViewUser:React.FC<ViewUserProps> = ({ user, reload, setReload, loading }) => {
    let profileArray:string[] = [];

    const [modalState, setModalState] = useState(false);
    const [inputdata, setInputData] = useState({
        id: user?.id,
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
    });

    useEffect(() => {
        user && setInputData({
            id: user?.id,
            name: user.nome,
            email: user.email,
            password: "",
            confirmPassword: "",
            phone: user.telefone,
        })
    },[user, reload]);

    user?.perfis.forEach((perfil) => {
        profileArray.push(perfil.descricao);
    });

    const handleChange = (value: string, type: string) => {
        setInputData({...inputdata, [type]: value});
    }

    const handleModalSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault();
        event.stopPropagation();

        const alterUser = { id: inputdata.id, nome: inputdata.name, email: inputdata.email, senha: inputdata.password, telefone: inputdata.phone };
        alterUser.telefone = alterUser.telefone.replaceAll(" ", "");
        alterUser.telefone = alterUser.telefone.replace("(", "");
        alterUser.telefone = alterUser.telefone.replace(")", "");

        await updateUserApiService(alterUser).then((response:any) => {
            if(inputdata.password !== inputdata.confirmPassword){
                alert("As senhas não conferem");
                return;
            }
            else if(inputdata.password.length < 6){
                alert("A senha deve ter no mínimo 6 caracteres");
                return;
            }
            else if(response.message){
                alert(response.message);
            }
            else {
                setReload && setReload(!reload);
                setModalState(!modalState);
            }
        });
    }

    return(
        <S.Container>
            { modalState && 
                <EditUserData title="Editar dados" modalState={modalState} setModalState={setModalState} handleModalSubmit={handleModalSubmit}>
                    <InputInLabel required label="Nome do Usuário" placeholder="Digite aqui" value={inputdata.name} onChange={(value:string) => handleChange(value, "name")} />
                    <InputInLabel disabled type="email" label="Email" placeholder="usuario@sige"  value={inputdata.email} onChange={(value:string) => handleChange(value, "email")} />
                    <InputInLabel required label="Senha" type='password' placeholder="Digite aqui"  value={inputdata.password} onChange={(value:string) => handleChange(value, "password")} />
                    <InputInLabel required label="Confirmar senha" type='password' placeholder="Digite aqui" value={inputdata.confirmPassword} onChange={(value:string) => handleChange(value, "confirmPassword")} />
                    <InputInLabel type='text' mask="(99) 99999 9999" label="Telefone" placeholder="(XX) 9XXXX - XXXX"  value={inputdata.phone} onChange={(value:string) => handleChange(value, "phone")} />
                </EditUserData> }
            <Header title="Usuário" />
            {!loading ? (
                <Dropdown title="Dados Cadastrais" buttonText="Editar Dados" onButtonClick={() => setModalState(!modalState)}>
                    {user?.nome && <PostIt title="Nome" content={[user.nome]} />}
                    {user?.email && <PostIt title="Email" content={[user.email]} />}
                    {user?.telefone_formatado && <PostIt title="Telefone" content={[user.telefone_formatado]} />}
                    {user?.perfis && user.perfis.length > 0 && <PostIt title="Perfil" content={profileArray} />}
                </Dropdown>
            ) : <Loading />}
        </S.Container>
    )
}

export default ViewUser;
