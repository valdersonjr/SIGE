import React from 'react';
import {NewClass} from "@templates/NewClass/NewClass.template";
import { educationDataProps, finantialDataProps } from '~/framework/templates/NewClass/NewClass.interface';

const NewClassPage: React.FC = () => {
    
    const handleClassCreation = async (e:React.SyntheticEvent, educationData:educationDataProps, finantialData:finantialDataProps ) => {
        e.preventDefault();
        
    }

    return <NewClass handleSubmit={handleClassCreation} />
}

export default NewClassPage;
