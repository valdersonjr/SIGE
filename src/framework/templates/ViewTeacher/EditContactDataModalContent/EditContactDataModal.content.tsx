import React from 'react';
import {InputInLabel} from "@molecules";

export const EditContactDataModal: React.FC = () => {
    return (
        <React.Fragment>
            <InputInLabel label="Telefone" onChange={() => {}} value="(00) 0 0000-0000" />
            <InputInLabel label="Email" onChange={() => {}} value="paulao@gmail.com" />
            <InputInLabel label="Endereço" onChange={() => {}} value="Rua do Limoeiro" />
        </React.Fragment>
    );
}
