import { useEffect, useState } from "react";

import { PostIt } from "~/framework/atoms";
import { Header, InputInLabel } from "~/framework/molecules";
import { Dropdown } from "~/framework/organisms";
import EditUserData from "~/framework/organisms/Modals/EditUserData/EditUserData.organism";

import { updateUserApiService } from "~/service/api";

import { ViewUserProps } from "./ViewUser.interface";
import * as S from "./ViewUser.style";


const ViewUser:React.FC<ViewUserProps> = ({ user, reload, setReload }) => {
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

    const handleModalSubmit = async () => {
        const alterUser = { id: inputdata.id, nome: inputdata.name, email: inputdata.email, senha: inputdata.password, telefone: inputdata.phone };
        await updateUserApiService(alterUser).then((response:any) => {
            if(alterUser.nome.trim().length < 1){
                alert("Nome inválido");
                return;
            }
            else if(inputdata.password !== inputdata.confirmPassword){
                alert("As senhas não conferem");
                return;
            }
            else if(inputdata.password.trim().length < 6){
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
                    <InputInLabel label="Nome do Usuário" placeholder="Digite aqui" value={inputdata.name} onChange={(value:string) => handleChange(value, "name")} />
                    <InputInLabel disabled required={true} type="email" label="Email" placeholder="usuario@sige"  value={inputdata.email} onChange={(value:string) => handleChange(value, "email")} />
                    <InputInLabel label="Senha" type='password' placeholder="Digite aqui"  value={inputdata.password} onChange={(value:string) => handleChange(value, "password")} />
                    <InputInLabel label="Confirmar senha" type='password' placeholder="Digite aqui" value={inputdata.confirmPassword} onChange={(value:string) => handleChange(value, "confirmPassword")} />
                    <InputInLabel type='text' label="Telefone" placeholder="(XX) 9XXXX - XXXX"  value={inputdata.phone} onChange={(value:string) => handleChange(value, "phone")} />
                </EditUserData> }
            <Header title="Usuário" />
            <Dropdown title="Dados Cadastrais" buttonText="Editar Dados" onButtonClick={() => setModalState(!modalState)}>
                {user?.nome && <PostIt title="Nome" content={[user.nome]} />}
                {user?.email && <PostIt title="Email" content={[user.email]} />}
                {user?.telefone_formatado && <PostIt title="Telefone" content={[user.telefone_formatado]} />}
                {user?.perfis && user.perfis.length > 0 && <PostIt title="Perfil" content={profileArray} />}
            </Dropdown>
        </S.Container>
    )
}

export default ViewUser;