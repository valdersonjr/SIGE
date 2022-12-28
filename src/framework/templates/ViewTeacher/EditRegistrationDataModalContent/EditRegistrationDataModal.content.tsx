import React from 'react';
import {InputInLabel} from "@molecules";

export const EditRegistrationDataModal: React.FC = () => {
    return (
        <React.Fragment>
            <InputInLabel label="Nome" onChange={() => {}} value="Paulão" />
            <InputInLabel label="Turmas Vinculadas" onChange={() => {}} value="Jardim II" />
            <InputInLabel label="Período" onChange={() => {}} value="Noturno" />
        </React.Fragment>
    );
}
