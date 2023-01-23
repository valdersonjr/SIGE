import { PostIt } from "~/framework/atoms";
import { Header } from "~/framework/molecules";
import { Dropdown } from "~/framework/organisms";
import { ViewUserProps } from "./ViewUser.interface";
import * as S from "./ViewUser.style";

const ViewUser:React.FC<ViewUserProps> = ({ user }) => {
    return(
        <S.Container>
           <Header title="Usuário" />
           <Dropdown title="Dados Cadastrais" buttonText="Editar Dados" onButtonClick={() => {}}>
                {user?.nome && <PostIt title="Nome" content={user.nome} />}
                {user?.email && <PostIt title="Email" content={user.email} />}
                {user?.telefone_formatado && <PostIt title="Telefone" content={user.telefone_formatado} />}
            </Dropdown>
           <Dropdown title="Perfil" buttonText="Editar Dados" onButtonClick={() => {}}>
                {user?.perfis.map((perfil) => {
                    return(
                        <PostIt title="Perfil" content={perfil.descricao} />
                    )
                })}
            </Dropdown>
        </S.Container>
    )
}

export default ViewUser;