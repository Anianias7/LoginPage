import React from 'react'

const input = (props) => {
    const createConfigObject = (event) =>  {
        return ({
            name: event.target.name,
            value: event.target.value,
            validators: props.validators,
            required: props.required
        });
    };

    return <input {...props} onChange={(event) => {props.onChange(createConfigObject(event))}}/>
};

export default input;