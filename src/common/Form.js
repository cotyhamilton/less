import React, { Component } from 'react';

// my awesome custom form component tm

/*

this.props.children = [<Input />, <Input />, ...]
this.props.submit

*/

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // update state with change in input fields
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    // submit function is prop passed in (login, signup, ...)
    submit = (e) => {
        e.preventDefault();
        this.props.submit(this.state);
        e.target.reset();
    }

    render() {
        // add handleChange method as prop to <Input /> components
        let inputs = React.Children.map(this.props.children,
            (child) => {
                return React.cloneElement(child, { onChange: this.handleChange })
            });
        return (
            <form onSubmit={this.submit}>
                {[ ...inputs ]}
                <button type="submit" className="btn btn-dark">submit</button>
            </form>
        )
    }
}

export default Form;