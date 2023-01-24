import { PostIt } from "~/framework/atoms";
import { Header } from "~/framework/molecules";
import { Dropdown } from "~/framework/organisms";
import { ViewUserProps } from "./ViewUser.interface";
import * as S from "./ViewUser.style";

const ViewUser:React.FC<ViewUserProps> = ({ user }) => {
    let profileArray:string[] = [];

    user?.perfis.forEach((perfil) => {
        profileArray.push(perfil.descricao);
    });

    return(
        <S.Container>
           <Header title="Usuário" />
           <Dropdown title="Dados Cadastrais" buttonText="Editar Dados" onButtonClick={() => {}}>
                {user?.nome && <PostIt title="Nome" content={[user.nome]} />}
                {user?.email && <PostIt title="Email" content={[user.email]} />}
                {user?.telefone_formatado && <PostIt title="Telefone" content={[user.telefone_formatado]} />}
            </Dropdown>
           <Dropdown title="Perfil" buttonText="Editar Dados" onButtonClick={() => {}}>
                <PostIt title="Perfil" content={profileArray} />
            </Dropdown>
        </S.Container>
    )
}

export default ViewUser;