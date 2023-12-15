import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import React from "react";
const FormInput = ({ title, type, name, ...props }) => {
    return (
        <div className="flex flex-col space-y-2">
            <InputLabel>{title}</InputLabel>
            <TextInput {...props} name={name} placeholder="123" type={type} />
        </div>
    );
};

export default FormInput;
