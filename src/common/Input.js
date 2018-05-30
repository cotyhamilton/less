import React from 'react';

// my awesome custom input component tm

/*

this.props = {
    input_name,
    input_type,
    placeholder,
    small
}

this.props.onChange = handleChange() from Form

*/

const Input = (props) => {
    return (
        <div className="form-group">
            <label htmlFor={props.input_name}>{props.input_name}</label>
            <input
                type={props.input_type}
                name={props.input_name}
                id={props.input_name}
                className="form-control"
                onChange={props.onChange}
                autoComplete="off"
                placeholder={props.placeholder}
            />
            {props.small ? <small className="form-text text-muted">{props.small}</small> : null}
        </div>
    )
}

export default Input;