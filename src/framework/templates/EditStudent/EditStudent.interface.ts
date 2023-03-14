import React from 'react';

export interface EditStudentProps {
    handleSubmit: (event: React.SyntheticEvent, data: any) => void;
    data: any;
}
