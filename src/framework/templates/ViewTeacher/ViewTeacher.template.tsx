import React, {useState} from 'react';
import * as S from './ViewTeacher.style';
import {Header} from "@molecules";
import {registrationData, contactData} from "./ViewTeacher.logic";
import {PostIt} from "@atoms";
import {Dropdown} from "@organisms";
import EditTeacherData from "@organisms/Modals/EditTeacherData/EditTeacherData.organism";
import {
    EditRegistrationDataModal
} from "@templates/ViewTeacher/EditRegistrationDataModalContent/EditRegistrationDataModal.content";
import EditTeacherContactData from "@organisms/Modals/EditTeacherContactData/EditTeacherContactData.organism";
import {EditContactDataModal} from "@templates/ViewTeacher/EditContactDataModalContent/EditContactDataModal.content";
import {ChooseImage} from "@molecules/Inputs/ChooseImage/ChooseImage.molecule";

const ViewTeacher: React.FC = () => {
    const [registrationModalState, setRegistrationModalState] = useState(false);
    const [contactModalState, setContactModalState] = useState(false);
    const [teacherImage, setTeacherImage] = useState('');

    const handleChangeImage = (e: any) => {
        setTeacherImage(e.target.files[0]);
    };

    return (
        <S.Container>
            {registrationModalState && <EditTeacherData title="Editar dados cadastrais" modalState={registrationModalState} setModalState={setRegistrationModalState} children={<EditRegistrationDataModal />} />}
            {contactModalState && <EditTeacherContactData title="Editar dados de contato" modalState={contactModalState} setModalState={setContactModalState} children={<EditContactDataModal />} />}

            <Header title="Visualizar Professor" />

            <S.ImageInputContainer>
                <ChooseImage label="clique para adicionar uma foto do professor" value={teacherImage}
                             onChange={handleChangeImage} />
            </S.ImageInputContainer>

            <Dropdown title="Dados Cadastrais do Professor" buttonText="Editar Dados" onButtonClick={() => setRegistrationModalState(!registrationModalState)} >
                {registrationData.map((item)=>(
                    <PostIt  key={item.key} title={item.name} content={[item.content]} />
                ))}
            </Dropdown>
            <Dropdown title="Contato" buttonText="Editar Dados" onButtonClick={() => setContactModalState(!contactModalState)} >
                {contactData.map((item)=>(
                    <PostIt  key={item.key} title={item.name} content={[item.content]} />
                ))}
            </Dropdown>
        </S.Container>
    );
}

export default ViewTeacher;
