import React from 'react';
import PropTypes from 'prop-types';
import './ValidationError.css';

function ValidationError(props) {
    let messageKeys = Object.keys(props.errorMessages);
    let messages = [];
    for (let i = 0; i < messageKeys.length; i++) {
        if (props.errorMessages[messageKeys[i]] !== '') {
            messages.push(props.errorMessages[messageKeys[i]]);
        }
    }

    return (
        <aside className='todolist_form_error'>
            <ul className='todolist_form_error_list'>
                {messages.map((m, i) => <li key={i}>{m}</li>)}
            </ul>
        </aside>
    )
}

ValidationError.defaultProps = {
    errorMessages: {},
}

ValidationError.propTypes = {
    errorMessages: PropTypes.object,
}

export default ValidationError;