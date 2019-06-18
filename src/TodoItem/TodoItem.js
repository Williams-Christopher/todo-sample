import React from 'react';
import PropTypes from 'prop-types';

import './TodoItem.css';

function TodoItem(props) {
    return (
        <article className='todolist_item'>
            <p className='todolist_title'>{props.title}</p>
            <p className='todolist_date'>Date added: <time>{props.dateAdded}</time></p>
            <p className='todolist_date'>Date due: <time>{props.dateDue}</time></p>
            <div className='todoitem_note'>
                {props.note.split('\n').map((text, i) => <p key={i}>{text}</p>)}
            </div>
            <button type='button' onClick={e => props.deleteItem(props.id)}>Delete</button>
        </article>
    )
}

TodoItem.defaultProps = {
    id: '',
    title: '',
    dateAdded: '',
    dateDue: '',
    note: '',
    deleteItem: () => {}
}

TodoItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    dateAdded: PropTypes.string.isRequired,
    dateDue: PropTypes.string.isRequired,
    note: PropTypes.string,
    deleteItem: PropTypes.func.isRequired,

}

export default TodoItem;
