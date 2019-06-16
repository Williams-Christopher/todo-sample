import React from 'react';

import './TodoItem.css';

function TodoItem(props) {
    return (
        <article className='todolist_item'>
            <p className='todolist_title'>{props.title}</p>
            <p className='todolist_date'>Date added: <time>{props.dateAdded}</time></p>
            <p className='todolist_date'>Date due: <time>{props.dateDue}</time></p>
            <p className='todoitem_note'>{props.note}</p>
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

export default TodoItem;
