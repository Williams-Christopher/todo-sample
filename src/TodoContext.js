import React from 'react';

const TodoContext = React.createContext ({
    todoList: [],
    addItem: () => {},
    deleteItem: () => {},
});

export default TodoContext;
