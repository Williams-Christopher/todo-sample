import React from 'react';

import './TodoItem.css';

function TodoItem(props) {
    return (
        <article className='todolist_item'>
            <p className='todolist_title'>{props.title}</p>
            <p className='todolist_date'>Date added: <time>{props.dateAdded}</time></p>
            <p className='todolist_date'>Date due: <time>{props.dateDue}</time></p>
            <p className='todoitem_note'>{props.note}</p>
        </article>
    )
}

TodoItem.defaultProps = {
    title: '',
    dateAdded: '',
    dateDue: '',
    note: ''
}

export default TodoItem;
