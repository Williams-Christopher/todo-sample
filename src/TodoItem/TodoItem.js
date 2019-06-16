import React from 'react';

import './TodoItem.css';

function TodoItem(props) {
    return (
        <article className='todolist_item'>
            <p className='todolist_content'>{props.title}</p>
            <p className='todolist_date'>Date added: <time datetime={props.dateAdded}>{props.dateAdded}</time></p>
            <p className='todolist_date'>Date due: <time datetime={props.dateDue}>{props.dateDue}</time></p>
            <p className='todoitem_note'>{props.note}</p>
        </article>
    )
}

export default TodoItem;
