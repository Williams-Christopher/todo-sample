import React from 'react';
import TodoContext from '../TodoContext';
import TodoItem from '../TodoItem/TodoItem';

import './TodoList.css';

function TodoList() {
    return (
        <TodoContext.Consumer>
            {(context) => {
                return (
                    <ul className='todolist_list'>
                    {context.todoList.map(t => {
                        return (
                            // For fun, change {t.id} to {context.todoList.id} and
                            // watch the world burn
                            <li key={t.id}>
                                <TodoItem
                                    key={t.id}
                                    dateAdded={t.dateAdded}
                                    dateDue={t.dateDue}
                                    title={t.title}
                                    note={t.note}
                                />
                            </li> 
                        )
                    })}
                    </ul>
                )
            }}
        </TodoContext.Consumer>
    )

}

export default TodoList;