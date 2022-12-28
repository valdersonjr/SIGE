import React from 'react';
import {InputInLabel} from "@molecules";

export const EditActivityDataModal: React.FC = () => {
    return (
        <React.Fragment>
            <InputInLabel label="Atividade" onChange={() => {}} value="Espanhol" />
            <InputInLabel label="Professor Vinculado" onChange={() => {}} value="Claudia" />
            <InputInLabel label="Período" onChange={() => {}} value="1° - 08:00 às 09:00" />
            <InputInLabel label="Vagas para Turma" onChange={() => {}} value="20" />
        </React.Fragment>
    );
}
