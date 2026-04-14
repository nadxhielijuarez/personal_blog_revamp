import React, { JSX } from 'react';


type CreateNewFormProps = {
    formType: string;
};

export default function CreateNewForm({formType}: CreateNewFormProps): JSX.Element {
    return <>
    <div className="form-container">
        <h1 className="form-title">Create New {formType}</h1>
        
    </div>
    </>
};