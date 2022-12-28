import React, {useState} from 'react';
import * as S from './ViewTeacher.style';
import {Header} from "@molecules";
import {registrationData, contactData} from "./ViewTeacher.logic";
import {PostIt} from "@atoms";
import {Dropdown} from "@organisms";

const ViewTeacher: React.FC = () => {
    const [registrationModalState, setRegistrationModalState] = useState(false);

    return (
        <S.Container>
            <Header title="Visualizar Professor" />

            <h2>falta a imagem aqui</h2>

            <Dropdown title="Dados Cadastrais do Professor" buttonText="Editar Dados" onButtonClick={() => setRegistrationModalState(!registrationModalState)} >
                {registrationData.map((item)=>(
                    <PostIt  key={item.key} title={item.name} content={item.content} />
                ))}
            </Dropdown>
            <Dropdown title="Contato" buttonText="Editar Dados" onButtonClick={() => setRegistrationModalState(!registrationModalState)} >
                {contactData.map((item)=>(
                    <PostIt  key={item.key} title={item.name} content={item.content} />
                ))}
            </Dropdown>
        </S.Container>
    );
}

export default ViewTeacher;
