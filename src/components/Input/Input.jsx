import './Input.css';
import React from "react";

function Input({inputID, inputLabel, inputType, value, updateCounter}) {
    return (
        <>
            <label htmlFor={inputID}>{inputLabel}
                <input
                    className="input"
                    type={inputType}
                    id={inputID}
                    name={inputID}
                    value={value}
                    onChange={updateCounter}/>
            </label>
        </>
    );
}

export default Input;
/*

<label htmlFor="firstName">Voornaam
    <input type="text" id="firstName" name="firstName" value={formState.firstName} onChange={handleChange}/></label>*/
