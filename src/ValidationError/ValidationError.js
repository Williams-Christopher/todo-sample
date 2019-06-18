import React from 'react';
import PropTypes from 'prop-types';
import './ValidationError.css';

function ValidationError(props) {
    if (props.hasError && props.message) {
        return (
            <p className='todolist_form_error'>{props.message}</p>
        )
    } else {
        return null;
    }
}

ValidationError.defaultProps = {
    hasError: false,
    message: '',
}

ValidationError.propTypes = {
    hasError: PropTypes.bool,
    message: PropTypes.string,
}

export default ValidationError;